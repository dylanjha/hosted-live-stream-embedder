/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import useListener from '../components/useListener.ts'
import type MuxPlayer from "mux-player";
import "mux-player";

interface PlayerProps {
  playbackId: string;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": preact.JSX.HTMLAttributes<MuxPlayer>;
    }
  }
}

export default function Player (props: PlayerProps) {
  const { messages } = useListener(`/api/listen/${props.playbackId}`);

  return (
    <main>
      <section class={tw`md:grid md:grid-cols-3`}>
        <div class={tw`md:col-span-2`}>
          <div class={tw`w-full`} style={{ aspectRatio: '16/9' }}>
            <mux-player
              stream-type="live"
              playback-id={props.playbackId}
              metadata-video-title="Test video title"
              metadata-viewer-user-id="user-id-007"
              class="w-full"
            ></mux-player>
          </div>
        </div>
        <div class={tw`md:col-span-1 px-4 py-3`}>
          <ul class={tw`text-blue-400`}>
            {messages.map((msg) => <li>{msg.message}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
