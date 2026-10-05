"use client";
import { useEffect, useRef, useState } from "react";
import s from "./service-landing.module.css";

export default function LandingHeroVideo({src = "/landing/conference-webinar-reel-v5.mp4", poster = "/landing/conference-webinar-reel-v5.jpg"}: {src?: string; poster?: string}) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as Navigator & {connection?: {saveData?: boolean}}).connection?.saveData;
    let visible = true;
    const update = () => {
      if (!visible || document.hidden || motion.matches || saveData || userPaused.current) video.pause();
      else video.play().catch(()=>{});
    };
    const observer = new IntersectionObserver(([entry]) => {visible = entry.isIntersecting; update();}, {threshold:0});
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    update();
    return () => {observer.disconnect();document.removeEventListener("visibilitychange",update);motion.removeEventListener("change",update);};
  },[]);
  function toggle() {
    const video = ref.current;
    if(!video) return;
    if(video.paused) {userPaused.current = false;video.play().catch(()=>{});}
    else {userPaused.current = true;video.pause();}
  }
  return <>
    <div className={s.heroMedia} aria-hidden="true"><video ref={ref} muted loop playsInline preload="metadata" poster={poster} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}><source src={src} type="video/mp4" /></video></div>

    <button type="button" className={s.videoToggle} onClick={toggle} aria-label={playing ? "Приостановить фоновое видео" : "Воспроизвести фоновое видео"}>{playing ? "Пауза ❚❚" : "Смотреть ▶"}</button>
  </>;
}
