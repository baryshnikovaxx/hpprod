"use client";
import { useEffect, useRef } from "react";
import styles from "../home.module.css";

export default function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectMotion = () => {
      if (motion.matches) video.current?.pause();
      else void video.current?.play().catch(() => {});
    };
    respectMotion();
    motion.addEventListener("change", respectMotion);
    return () => motion.removeEventListener("change", respectMotion);
  }, []);
  return <video ref={video} className={styles.heroFilm} autoPlay muted loop playsInline
    controls={false} disablePictureInPicture disableRemotePlayback
    preload="metadata" poster="/showreel/hero-bw-grain-v3.jpg" aria-hidden="true" tabIndex={-1}>
    <source src="/showreel/hero-bw-grain-v4.mp4" type="video/mp4" />
  </video>;
}
