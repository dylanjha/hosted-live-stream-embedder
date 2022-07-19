/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import type MuxPlayer from "mux-player";
import "mux-player";

interface CounterProps {
  playbackId: string;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": preact.JSX.HTMLAttributes<MuxPlayer>;
    }
  }
}

export default function Player(props: CounterProps) {
  return (
    <div class={tw`flex gap-2 w-full`}>
      <mux-player
        stream-type="on-demand"
        playback-id={props.playbackId}
        metadata-video-title="Test video title"
        metadata-viewer-user-id="user-id-007"
      ></mux-player>
    </div>
  );
}
