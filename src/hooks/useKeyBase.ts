import { useRef, useEffect, KeyboardEvent } from "react";

export function useKey(key: string, cb: (event: KeyboardEvent) => void): void {
  const callbackRef = useRef<(event: KeyboardEvent) => void>(cb);

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  useEffect(() => {
    function handle(event: KeyboardEvent) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keypress", handle as any);
    return () => document.removeEventListener("keypress", handle as any);
  }, [key]);
}
