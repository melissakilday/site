# 2026-09-18 — GSC MCP server + agent team rules

## What changed
- Vendored mcp-gsc v0.4.1 into `tools/mcp-gsc/` with its own Python 3.11 venv; registered as project-scoped MCP server `gsc` in `.mcp.json`. Credentials and token in `tools/mcp-gsc/credentials/` (gitignored).
- Google Cloud: OAuth consent screen "Hair By Melissa GSC MCP" (External, Testing), Desktop OAuth client, test user altussnyman@gmail.com. Search Console API was already enabled.
- Added model doctrine and process rules to `CLAUDE.md`; agent definitions in `.claude/agents/`.
- Created this `changelog/` folder.

## Why
Search Console data becomes queryable from Claude sessions in this repo only. Rules make every future growth job run the same way: Fable plans, Opus orchestrates, Sonnet builds.

## Site changes
None.

## Baseline (GSC, 28 days to 2026-09-18, sc-domain:hairbymelissa.co.nz)
| Metric | Value |
|---|---|
| Clicks | 19 |
| Impressions | 1,613 |
| CTR | 1.18% |
| Avg position | 29.2 |

Key pages: home 11 clicks / 151 imp / pos 8.2; /locations/helensville/ 2 / 198 / 5.8; /blog/keratin-aftercare/ 1 / 647 / 37.7; /services/half-head-highlights/ 2 / 124 / 18.6.

## Re-check
2026-10-16 (28 days) — compare against this baseline.
