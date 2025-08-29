// NUCLEAR CACHE BUSTING SCRIPT
// This will force Netlify to rebuild with completely new asset hashes

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Add a unique timestamp to force new build hashes
const timestamp = Date.now();
const cacheId = `build-${timestamp}`;

// Update package.json version to force cache break
const packagePath = path.join(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
pkg.version = `0.0.${timestamp}`;
pkg.name = `hairbymelissa-${timestamp}`;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

// Create a unique cache-busting file
const cacheBustPath = path.join(__dirname, 'CACHE_BUST.txt');
fs.writeFileSync(cacheBustPath, `FORCE_REBUILD_${cacheId}\nTimestamp: ${new Date().toISOString()}\n`);

console.log(`Cache bust applied: ${cacheId}`);
console.log('Package version updated, all caches should be invalidated');