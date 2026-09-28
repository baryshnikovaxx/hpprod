"use client";

import { useEffect, useRef, useState } from "react";

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

export default function ShowreelVideo({
  src,
  poster,
  label,
  isRu,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  isRu: boolean;
  className?: string;
}) {
  const videoRef = useRef<FullscreenVideo>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) {
          if (!pausedByUser.current) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.6] },
    );
    observer.observe(video);

    const onFullscreenChange = () => {
      video.controls = document.fullscreenElement === video;
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  };

  const expand = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => video.webkitEnterFullscreen?.());
    } else {
      video.webkitEnterFullscreen?.();
    }
  };

  return (
    <figure className={`showreel ${playing ? "is-playing" : ""} ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button type="button" className="showreel-play" onClick={toggle} aria-label={isRu ? "Смотреть видео" : "Play video"}>
        <span aria-hidden="true">▶</span>
      </button>
      <div className="showreel-controls">
        <button type="button" onClick={toggle} aria-label={playing ? (isRu ? "Пауза" : "Pause") : (isRu ? "Смотреть" : "Play")}>
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
        </button>
        <button type="button" onClick={expand} aria-label={isRu ? "На весь экран" : "Fullscreen"}>
          <span aria-hidden="true">⤢</span>
        </button>
      </div>
    </figure>
  );
}
