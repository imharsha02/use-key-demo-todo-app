import { useRef, useEffect, KeyboardEvent } from "react";

export function useKey(key: string, cb: (event: KeyboardEvent) => void): void {
  const callbackRef = useRef<(event: KeyboardEvent) => void>(cb); // use a ref to store a reference to the callback

  // use an Effect to update the callback reference
  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  // use an Effect to attach and detach the keyboard event listener.
  useEffect(() => {
    // Handler function to execute the callback when the specified key is pressed.
    function handle(event: KeyboardEvent) {
      // Check if the pressed key is the specified key.
      if (event.code === key) {
        // Execute the current callback function.
        callbackRef.current(event);
      }
    }
    // Attach the event listener to the document.
    document.addEventListener("keypress", handle as any);

    // Cleanup function to remove the event listener on unmount
    return () => document.removeEventListener("keypress", handle as any);
  }, [key]);
}
