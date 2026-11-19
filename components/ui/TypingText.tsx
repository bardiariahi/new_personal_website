"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text }: { text: string }) {
  const [count, setCount] = useState(() => Array.from(text).length);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const length = Array.from(text).length;
    let interval: ReturnType<typeof setInterval> | undefined;
    let finish: ReturnType<typeof setTimeout> | undefined;
    const start = setTimeout(() => {
      let index = 0;
      setCount(0);
      setTyping(true);
      interval = setInterval(() => {
        index += 1;
        setCount(index);
        if (index >= length) {
          clearInterval(interval);
          finish = setTimeout(() => setTyping(false), 450);
        }
      }, 35);
    }, 80);
    return () => { clearTimeout(start); clearInterval(interval); clearTimeout(finish); };
  }, [text]);

  return <p className="typing-description" aria-label={text}><span aria-hidden="true">{Array.from(text).slice(0, count).join("")}{typing && <span className="typing-caret" />}</span></p>;
}
