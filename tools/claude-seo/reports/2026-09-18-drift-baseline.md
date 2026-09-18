# SEO Drift Baseline — 2026-09-18

Captured with the vendored `seo-drift` skill (`drift_baseline.py`, `--skip-cwv`) against the
live site https://hairbymelissa.co.nz.

## Storage location

`drift_baseline.py` hardcodes its SQLite path:

```
DB_DIR = os.path.expanduser("~/.cache/claude-seo/drift")
DB_PATH = os.path.join(DB_DIR, "baselines.db")
```

It does **not** read `CLAUDE_SEO_DATA_DIR` (that env var only affects the managed venv/plugin
data resolution in `runtime.py`, used by other scripts) — `drift_baseline.py`,
`drift_compare.py`, and `drift_history.py` import only `google_auth` and write straight to
`~/.cache/claude-seo/drift/baselines.db`, independent of `CLAUDE_SEO_DATA_DIR`. There is no
`--db-path` flag either. Per the run instructions (do not edit repo source, including vendored
skill scripts), this was **not patched** — the DB stays at the default, out of
`tools/claude-seo/`:

```
~/.cache/claude-seo/drift/baselines.db
```

Resolved on this machine to `/Users/altusmacbook/.cache/claude-seo/drift/baselines.db`.

## Baselines captured

8 URLs, each with a fresh baseline row (`--skip-cwv`, so `cwv_captured: false` for all):

| baseline_id | URL | h2 / h3 | schema_count | status |
|---|---|---|---|---|
| 2 | / | 9 / 23 | 3 | 200 |
| 3 | /locations/helensville/ | 8 / 31 | 3 | 200 |
| 4 | /blog/keratin-aftercare/ | 11 / 29 | 4 | 200 |
| 5 | /services/balayage/ | 3 / 21 | 3 | 200 |
| 6 | /services/half-head-highlights/ | 3 / 20 | 3 | 200 |
| 7 | /services/keratin-treatments/ | 3 / 20 | 4 | 200 |
| 8 | /booking/ | 2 / 9 | 2 | 200 |
| 9 | /contact/ | 4 / 10 | 2 | 200 |

Note: baseline_id 1 (homepage) pre-existed in the DB from an earlier run before this session
started; it is not part of this baseline set but does not interfere — `drift_compare.py` uses
the most recent baseline per URL by default, which is id 2 for the homepage.

Verified with `drift_history.py <url>` for all 8 URLs — each returns exactly the baseline
captured above (homepage returns 2: the pre-existing id 1 plus id 2 from this run).

## Commands used

```bash
source tools/claude-seo/env.sh   # sets CLAUDE_SEO_PYTHON / CLAUDE_SEO_DATA_DIR (venv + data dir, not the drift DB)

for u in \
  "https://hairbymelissa.co.nz/" \
  "https://hairbymelissa.co.nz/locations/helensville/" \
  "https://hairbymelissa.co.nz/blog/keratin-aftercare/" \
  "https://hairbymelissa.co.nz/services/balayage/" \
  "https://hairbymelissa.co.nz/services/half-head-highlights/" \
  "https://hairbymelissa.co.nz/services/keratin-treatments/" \
  "https://hairbymelissa.co.nz/booking/" \
  "https://hairbymelissa.co.nz/contact/"; do
  CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
    .claude/skills/seo/scripts/drift_baseline.py "$u" --skip-cwv
done
```

## Re-run on 2026-10-16 (comparison against this baseline)

```bash
cd /Volumes/KINGSTON/projects/hairbymellisa

for u in \
  "https://hairbymelissa.co.nz/" \
  "https://hairbymelissa.co.nz/locations/helensville/" \
  "https://hairbymelissa.co.nz/blog/keratin-aftercare/" \
  "https://hairbymelissa.co.nz/services/balayage/" \
  "https://hairbymelissa.co.nz/services/half-head-highlights/" \
  "https://hairbymelissa.co.nz/services/keratin-treatments/" \
  "https://hairbymelissa.co.nz/booking/" \
  "https://hairbymelissa.co.nz/contact/"; do
  echo "=== $u ==="
  CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
    .claude/skills/seo/scripts/drift_compare.py "$u" --skip-cwv
done
```

This diffs each URL's current live state against its most recent baseline above (id 2 for the
homepage, ids 3-9 for the rest) and classifies findings as CRITICAL / WARNING / INFO per the 17
comparison rules. To see the full change log for a single URL instead of just the latest diff:

```bash
CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
  .claude/skills/seo/scripts/drift_history.py "https://hairbymelissa.co.nz/" --limit 10
```

Optional HTML report after a compare:

```bash
CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
  .claude/skills/seo/scripts/drift_report.py <comparison_json_file> \
  --output tools/claude-seo/reports/2026-10-16-drift-compare.html
```
