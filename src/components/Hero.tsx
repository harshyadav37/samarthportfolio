import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { siteConfig } from "../data/config";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const scrollToAbout = () => {
    const aboutElem = document.getElementById("about");
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#050507]"
    >
      {/* Background Visual Container with Parallax */}
      <motion.div
        style={{ y: heroParallax }}
        className="absolute inset-0 h-[115%] w-full select-none"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-75" : "opacity-0"
          }`}
          poster={siteConfig.hero.bannerImage}
        >
          {/* Support local placeholder file first, fallback to high-res sample cinematic reel */}
          <source src={siteConfig.hero.bannerVideo} type="video/mp4" />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback Static Poster / Cinematic Backdrop if video is loading */}
        {!videoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url(${siteConfig.hero.bannerImage}), linear-gradient(135deg, #0c0c16 0%, #060609 100%)`,
            }}
          />
        )}

        {/* Dark Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/80 via-transparent to-[#050507]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050507_90%)]" />
      </motion.div>

      {/* Top Spacer for fixed navbar */}
      <div className="h-28" />

      {/* Hero Content — Minimal, Cinematic, High-Character */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 py-12"
      >
        <div className="relative max-w-4xl">
          {/* Subtle Glow Gradient behind hero headline */}
          <div className="pointer-events-none absolute -left-12 -top-12 h-64 w-96 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.18)_0%,_transparent_70%)] blur-3xl" />

          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-purple-500/70" />
            <span className="font-mono text-xs tracking-[0.25em] text-zinc-400 uppercase">
              {siteConfig.eyebrow}
            </span>
          </motion.div>

          {/* Main Visual Name Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase text-balance leading-[0.95]"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Subtitle / Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-zinc-300 font-sans tracking-wide"
          >
            <span className="text-zinc-200">Video Editor</span>
            <span className="text-purple-400 font-bold">/</span>
            <span className="text-zinc-200">Cinematographer</span>
            <span className="text-purple-400 font-bold">/</span>
            <span className="text-zinc-200">Photographer</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar: Scroll Indicator & Media Reel Controls */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-10 md:px-12">
        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="group flex items-center gap-3 text-left text-xs font-mono tracking-widest text-zinc-400 transition-colors hover:text-white"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:border-purple-400/50">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="text-zinc-300 group-hover:text-purple-400" />
            </motion.div>
          </div>
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase">
            {siteConfig.hero.scrollText}
          </span>
        </motion.button>

        {/* Ambient Reel Play/Mute Controls */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background reel" : "Play background reel"}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <div className="h-3 w-[1px] bg-white/10" />
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute reel audio" : "Mute reel audio"}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-purple-400" />}
          </button>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider pl-1">
            Reel Preview
          </span>
        </div>
      </div>
    </section>
  );
}
