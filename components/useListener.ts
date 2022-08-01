import { useState, useEffect } from "preact/hooks";
import { Message } from './Message.ts';

const CONNECTING = "connecting";
const CONNECTED = "connected";
const DISCONNECTED = "disconnected";

export default function useListener(path: string) {
  const [connectionState, setConnectionState] = useState(DISCONNECTED);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const events = new EventSource(path);
    setConnectionState(CONNECTING);
    events.addEventListener("open", () => setConnectionState(CONNECTED));
    events.addEventListener("error", () => {
      switch (events.readyState) {
        case EventSource.OPEN:
          setConnectionState(CONNECTED);
          break;
        case EventSource.CONNECTING:
          setConnectionState(CONNECTING);
          break;
        case EventSource.CLOSED:
          setConnectionState(DISCONNECTED);
          break;
      }

      return function cleanup() {
        events.close();
      }
    });

    events.addEventListener("message", (e) => {
      const msg = JSON.parse(e.data);
      setMessages(messages => [...messages, msg]);
    });
  }, []);

  return {connectionState, messages};
}
