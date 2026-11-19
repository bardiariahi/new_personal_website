"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Animation = dynamic(() => import("./DeveloperAnimation"), { ssr: false });
export default function LottieArt() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { rootMargin: "200px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="lottie-art" aria-hidden="true">{visible ? <Animation /> : <span>✳</span>}</div>;
}
