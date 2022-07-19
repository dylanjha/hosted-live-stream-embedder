import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const channel = new BroadcastChannel("streamzzz");
    const { message } = await req.json();
    channel.postMessage({ message });

    return new Response(JSON.stringify({
      message: "ok got your message"
    }), { headers: { "Content-Type": "application/json" } });
  }
}
