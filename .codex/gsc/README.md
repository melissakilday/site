# Google Search Console connection

The project-only MCP server is configured in `../config.toml` using
`AminForou/mcp-gsc` (`mcp-search-console` 0.4.1).

## Authentication

1. In Google Cloud, enable the Google Search Console API.
2. Create an OAuth client ID of type **Desktop app** and download its JSON.
3. Save it in this directory as `client_secrets.json`.
4. Restart Codex's MCP connection (or reopen Codex) and ask to list GSC properties.
5. Complete the Google browser login with the account that can access
   `hairbymelissa.co.nz`.

Credentials and the generated `token.json` stay in this ignored directory.
No global Codex MCP configuration is changed. Project scoping controls where
the server is loaded; Google account permissions determine which properties
the server can access. Use the Hair By Melissa property for this project.

Setup reference: https://github.com/AminForou/mcp-gsc#readme
