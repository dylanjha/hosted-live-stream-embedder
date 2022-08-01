import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const { data, type } = await req.json();
    const resp = { message: '' }
    if (data && data.playback_ids) {
      data.playback_ids.forEach(({ id } : { id: string }) => {
        const channel = new BroadcastChannel(id);
        channel.postMessage({ message: type });
      });
      resp.message = 'Okay, broadcasted this'
    } else {
      resp.message = `No playback_ids in this webhook`
    }

    return new Response(JSON.stringify(resp), { headers: { "Content-Type": "application/json" } });
  }
}
