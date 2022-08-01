# Mux Live Stream Embed

This project is made with [deno](https://deno.land/) and [fresh](https://fresh.deno.dev/).

## Usage

Right now this app will show a Mux live stream playback page with Mux Player at `/v/:playback_id`

If you set up webhooks to go to `/api/webhook` then this app will receive webhooks and pass through the relevant webhook events to the client.

That's all, it aint much, but it's honest work.

Ways to build on this:

- Secure playback with signed URLs (time-based signatures + playback restrictions for CORS)
- Handle pre-live states and post-live states (maybe a pre-live looping on-deman video?) -- maybe a post-live survey?
- Make this page `iframe`-able for your own domain
- Configure a fallback `:playback_id`, if the server gets a disconnected event, then swap to the fallback

... other cool things?

The idea is that this application can be self-hosted by a Mux customer and they could `<iframe>` embeds to embed this in their web applications to get some extra functionality.

## Dev

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
