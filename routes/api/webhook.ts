import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response(JSON.stringify({
    message: "ok"
  }), { headers: { "Content-Type": "application/json" } });
};
