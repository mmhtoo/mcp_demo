import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./libs/mcp/mcp.server.js";
import { registerTools } from "./tools/index.js";

async function main() {
  await registerTools();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.info("MCP server started on Stdio Server");
}

main().catch(console.error);
