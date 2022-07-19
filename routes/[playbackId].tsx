/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Player from "../islands/Player.tsx";

export default function Playback(props: PageProps) {
  return (
    <main>
      <Player playbackId={props.params.playbackId} />
    </main>
  );
}
