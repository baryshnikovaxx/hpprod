"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";

export default function HeroFilm({ isRu }: { isRu: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectMotion = () => { if (motion.matches) video.current?.pause(); };
    respectMotion();
    motion.addEventListener("change", respectMotion);
    return () => motion.removeEventListener("change", respectMotion);
  }, []);
  return <>
    <video ref={video} className={styles.heroFilm} autoPlay muted loop playsInline
      preload="metadata" poster="/showreel/hero-bw-grain-v3.jpg" aria-hidden="true"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
      <source src="/showreel/hero-bw-grain-v4.mp4" type="video/mp4" />
    </video>
    <button type="button" className={styles.heroFilmToggle}
      aria-label={playing ? (isRu ? "Приостановить фоновое видео" : "Pause background video") : (isRu ? "Воспроизвести фоновое видео" : "Play background video")}
      onClick={() => { const el = video.current; if (!el) return; if (el.paused) void el.play().catch(() => setPlaying(false)); else el.pause(); }}>
      <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>
    </button>
  </>;
}
