/** Local-only asset pipeline for the keratin treatment page images.
 * node scripts/generate-images.mjs --generate : resume or create the three approved tasks
 * node scripts/generate-images.mjs --optimize : crop/resize downloaded sources into public/images/keratin/
 * Never automatically retries an uncertain POST or replaces an existing image.
 *
 * Note on IPTC/XMP tagging: this repo's installed sharp (0.33.5) has no withXmp()/XMP-write
 * support. The optimize step therefore does crop + resize + final encode + XMP tagging in a
 * single Pillow (system python3) pass per output file, rather than chaining sharp's encoder
 * with a second Pillow re-encode (which would add an avoidable extra lossy generation on the
 * WebP/JPEG outputs). require('sharp') was confirmed working per the task instructions; its
 * lack of XMP support is what is being worked around.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);

const manifestPath = 'docs/assets-manifest.json';
const common = "Warm, calm editorial photograph in a small bright boutique home hair salon in New Zealand: cream walls, pale timber, a large window with soft natural daylight, a few green plants, soft blue and blush accents. Realistic hair texture and believable hands. No faces visible, no logos, no brand names, no text, no watermarks. Illustrative commercial art direction, not a real client. ";

// [id, aspectRatio, resolution, prompt, alt, intendedUse]
const specs = [
  ['keratin-hero', '16:9', '2K',
    "Over-the-shoulder close view from behind a seated client: a hairdresser's hands glide a ceramic flat iron down a smooth, glossy section of long dark brown hair. The client is seen only from the back of the head and shoulders. The left half of the frame is soft, out-of-focus salon background with room for a white headline. Shallow depth of field, 50mm lens.",
    'Illustration: a hairdresser sealing a keratin treatment into long dark hair with a flat iron',
    'ServiceLayout hero + og:image (1200x630 crop)'],
  ['keratin-process', '4:3', '1K',
    "Close-up of a hairdresser's gloved hands applying a creamy white smoothing treatment with a tint brush to one sectioned piece of damp brown hair, other sections held with clips; a small mixing bowl on a tidy trolley nearby.",
    'Illustration: keratin formula being brushed onto a section of hair',
    'Process section'],
  ['keratin-aftercare', '4:3', '1K',
    'Overhead flat lay on pale timber: two plain unlabelled pump bottles in cream and soft blue, a wide-tooth comb, a folded soft towel and the corner of a silk pillowcase.',
    'Illustration: sulfate-free shampoo, a wide-tooth comb and a silk pillowcase for keratin aftercare',
    'Aftercare section'],
];

// Final output specs per asset id: list of {suffix, width, height, format, quality, mozjpeg}
const outputSpecs = {
  'keratin-hero': [
    { suffix: '640', width: 640, height: 360, format: 'webp', quality: 80 },
    { suffix: '1200', width: 1200, height: 675, format: 'webp', quality: 80 },
    { suffix: '1600', width: 1600, height: 900, format: 'webp', quality: 80 },
    { suffix: 'og', width: 1200, height: 630, format: 'jpg', quality: 82, mozjpeg: true },
  ],
  'keratin-process': [
    { suffix: '640', width: 640, height: 480, format: 'webp', quality: 80 },
    { suffix: '1200', width: 1200, height: 900, format: 'webp', quality: 80 },
  ],
  'keratin-aftercare': [
    { suffix: '640', width: 640, height: 480, format: 'webp', quality: 80 },
    { suffix: '1200', width: 1200, height: 900, format: 'webp', quality: 80 },
  ],
};

let manifest;
try {
  manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
} catch {
  manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    provider: 'Kie.ai',
    model: 'nano-banana-2',
    documentation: 'https://docs.kie.ai/market/google/nanobanana2',
    usageNote: 'Generated assets are illustrations, not client work.',
    creditBalance: {},
    assets: [],
  };
}
const save = () => fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

await fs.mkdir('assets/generated', { recursive: true });
await fs.mkdir('public/images/keratin', { recursive: true });

if (process.argv.includes('--generate')) {
  let env = {};
  try {
    for (const line of (await fs.readFile('.env', 'utf8')).split('\n')) {
      const m = line.match(/^\s*(?:export\s+)?([\w]+)\s*=\s*(.*?)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
    }
  } catch {}
  const key = process.env.KIE_API_KEY || env.KIE_API_KEY;
  if (!key) throw new Error('Kie credential missing. Set KIE_API_KEY locally.');

  const api = async (endpoint, body) => {
    const response = await fetch('https://api.kie.ai/api/v1/' + endpoint, {
      method: body ? 'POST' : 'GET',
      headers: { Authorization: `Bearer ${key}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
      signal: AbortSignal.timeout(60000),
    });
    if (!response.ok) throw new Error(`Kie HTTP ${response.status}`);
    const result = await response.json();
    if (result.code !== 200) throw new Error(`Kie response code ${result.code}: ${result.msg || ''}`);
    return result.data;
  };

  // Record credit balance before, if the endpoint works. Never log the key.
  try {
    const before = await api('chat/credit');
    manifest.creditBalance.before = before;
    manifest.creditBalance.beforeAt = new Date().toISOString();
    await save();
  } catch (e) {
    console.log('Credit balance (before) unavailable:', e.message);
  }

  for (const [id, aspect, resolution, prompt, alt, use] of specs) {
    let asset = manifest.assets.find((a) => a.id === id && a.status !== 'rejected' && a.status !== 'failed');
    if (!asset) {
      asset = {
        id,
        kind: 'generated-illustration',
        model: 'nano-banana-2',
        prompt: common + prompt,
        aspectRatio: aspect,
        resolution,
        intendedUse: use,
        alt,
        source: `assets/generated/${id}.png`,
        status: 'unsubmitted',
        creditsConsumed: null,
      };
      manifest.assets.push(asset);
      await save();
    }
    if (asset.status === 'unsubmitted') {
      // Persist the uncertainty marker BEFORE the paid request. A lost response must be
      // reconciled in Kie, never blindly resubmitted.
      asset.status = 'submission-uncertain';
      await save();
      const created = await api('jobs/createTask', {
        model: asset.model,
        input: { prompt: asset.prompt, image_input: [], aspect_ratio: aspect, resolution, output_format: 'png' },
      });
      if (!created?.taskId) throw new Error(`${id}: no task ID returned; reconcile provider record before continuing.`);
      asset.taskId = created.taskId;
      asset.status = 'submitted';
      asset.submittedAt = new Date().toISOString();
      await save();
      console.log(`${id}: submitted ${asset.taskId}`);
    } else if (!asset.taskId) {
      throw new Error(`${id}: uncertain submission; reconcile provider record before continuing.`);
    }
  }

  const until = Date.now() + 15 * 60 * 1000;
  while (manifest.assets.some((a) => a.kind === 'generated-illustration' && !['downloaded', 'failed', 'rejected'].includes(a.status))) {
    if (Date.now() > until) throw new Error('Polling timed out; rerun --generate to resume existing task IDs.');
    for (const asset of manifest.assets.filter((a) => a.kind === 'generated-illustration' && !['downloaded', 'failed', 'rejected'].includes(a.status))) {
      if (asset.status !== 'submitted') continue;
      const data = await api(`jobs/recordInfo?taskId=${encodeURIComponent(asset.taskId)}`);
      if (data.state === 'fail') {
        asset.status = 'failed';
        asset.failureCode = data.failCode || null;
        await save();
        console.log(`${asset.id}: failed`);
        continue;
      }
      if (data.state === 'success') {
        asset.creditsConsumed = data.creditsConsumed ?? null;
        asset.completedAt = data.completeTime ?? null;
        const url = JSON.parse(data.resultJson).resultUrls?.[0];
        if (!url || !url.startsWith('https://')) throw new Error('Missing HTTPS image URL');
        const image = await fetch(url, { signal: AbortSignal.timeout(60000) });
        if (!image.ok) throw new Error('Image download failed');
        await fs.writeFile(asset.source, Buffer.from(await image.arrayBuffer()));
        asset.status = 'downloaded';
        await save();
        console.log(`${asset.id}: downloaded; credits=${asset.creditsConsumed ?? 'not reported'}`);
      }
    }
    if (manifest.assets.some((a) => a.kind === 'generated-illustration' && a.status === 'submitted')) {
      await new Promise((r) => setTimeout(r, 10000));
    }
  }
  if (manifest.assets.some((a) => a.kind === 'generated-illustration' && a.status === 'failed')) {
    throw new Error('One or more generation tasks failed; inspect manifest before any replacement.');
  }

  try {
    const after = await api('chat/credit');
    manifest.creditBalance.after = after;
    manifest.creditBalance.afterAt = new Date().toISOString();
    await save();
  } catch (e) {
    console.log('Credit balance (after) unavailable:', e.message);
  }
}

if (process.argv.includes('--reject')) {
  // node scripts/generate-images.mjs --reject <id> "<reason>"
  const idx = process.argv.indexOf('--reject');
  const id = process.argv[idx + 1];
  const reason = process.argv[idx + 2] || 'rejected on review';
  const asset = manifest.assets.find((a) => a.id === id && a.status === 'downloaded');
  if (!asset) throw new Error(`No downloaded asset found with id ${id}`);
  asset.status = 'rejected';
  asset.rejectionReason = reason;
  await save();
  console.log(`${id}: marked rejected (${reason}). Rerun --generate to create a fresh attempt.`);
}

if (process.argv.includes('--optimize')) {
  // Confirm sharp is present per instructions, and check for XMP write support.
  const sharp = (await import('sharp')).default;
  const sharpVersion = (await import('sharp/package.json', { with: { type: 'json' } })).default.version;
  const hasWithXmp = typeof sharp().withXmp === 'function';
  console.log(`sharp ${sharpVersion} present; withXmp supported: ${hasWithXmp}`);

  const python = String.raw`
import json, pathlib, hashlib
from PIL import Image, ImageOps

XMP = b'<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" Iptc4xmpExt:DigitalSourceType="http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia"/></rdf:RDF></x:xmpmeta>'

def crop_to_aspect(im, target_w, target_h):
    src_w, src_h = im.size
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h
    if src_ratio > target_ratio:
        new_w = round(src_h * target_ratio)
        left = (src_w - new_w) // 2
        im = im.crop((left, 0, left + new_w, src_h))
    else:
        new_h = round(src_w / target_ratio)
        top = (src_h - new_h) // 2
        im = im.crop((0, top, src_w, top + new_h))
    return im

p = pathlib.Path('docs/assets-manifest.json')
m = json.loads(p.read_text())
out_specs = json.loads(pathlib.Path('/tmp/keratin-output-specs.json').read_text())

for a in m['assets']:
    if a.get('kind') != 'generated-illustration' or a.get('status') != 'downloaded':
        continue
    specs = out_specs.get(a['id'])
    if not specs:
        continue
    src_path = pathlib.Path(a['source'])
    im0 = ImageOps.exif_transpose(Image.open(src_path)).convert('RGB')
    a['sourceDimensions'] = {'width': im0.width, 'height': im0.height}
    a['sourceSha256'] = hashlib.sha256(src_path.read_bytes()).hexdigest()
    base = im0
    override = a.get('cropOverride')
    if override:
        l, t, w, h = override['left'], override['top'], override['width'], override['height']
        base = im0.crop((l, t, l + w, t + h))
    outputs = []
    for spec in specs:
        target_w, target_h = spec['width'], spec['height']
        cropped = crop_to_aspect(base, target_w, target_h)
        resized = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
        out_path = f"public/images/keratin/{a['id']}-{spec['suffix']}.{ 'webp' if spec['format']=='webp' else 'jpg' }"
        if spec['format'] == 'webp':
            resized.save(out_path, 'WEBP', quality=spec['quality'], method=6, xmp=XMP)
        else:
            resized.save(out_path, 'JPEG', quality=spec['quality'], xmp=XMP, optimize=True)
        outputs.append({
            'path': out_path,
            'width': target_w,
            'height': target_h,
            'bytes': pathlib.Path(out_path).stat().st_size,
        })
    a['outputs'] = outputs

p.write_text(json.dumps(m, indent=2) + '\n')
print('optimize: done')
`;

  await fs.writeFile('/tmp/keratin-output-specs.json', JSON.stringify(outputSpecs));
  const result = spawnSync(process.env.PYTHON_BIN || 'python3', ['-c', python], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error('Optimization failed: ' + result.stderr);
  console.log(result.stdout.trim());
  await fs.rm('/tmp/keratin-output-specs.json', { force: true });

  // Reload manifest (python wrote it) before continuing.
  manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  await save();
}

if (!process.argv.includes('--generate') && !process.argv.includes('--optimize') && !process.argv.includes('--reject')) {
  console.log('Use --generate to create/resume approved tasks, --optimize for local exports, or --reject <id> "<reason>" to mark a reviewed image bad.');
}
