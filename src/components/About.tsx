import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Film, Camera, Video, Sparkles } from "lucide-react";
import { siteConfig } from "../data/config";

export default function About() {
  const [imageError1, setImageError1] = useState(false);
  const [imageError2, setImageError2] = useState(false);

  const scrollToWork = () => {
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
    <section id="about" className="relative w-full bg-[#050507] py-20 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-purple-950/15 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* ================================================== */}
        {/* 1. THE PHILOSOPHY (Displayed ABOVE About Me)       */}
        {/* With Atmospheric Glow Gradient Behind Tagline     */}
        {/* ================================================== */}
        <div className="relative mb-24 md:mb-36 text-center">
          {/* Cinematic Radial Glow Gradient behind the taglines */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 sm:h-72 w-full max-w-3xl rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.22)_0%,_rgba(139,92,246,0.08)_45%,_transparent_75%)] blur-2xl sm:blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-2/3 max-w-xl bg-purple-500/15 blur-[60px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-4xl"
          >
            {/* Kicker */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
              <p className="font-mono text-xs tracking-[0.35em] text-purple-300 uppercase font-semibold">
                THE PHILOSOPHY
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
            </div>

            {/* Large Bold Tagline Statement */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05] text-balance">
              "{siteConfig.about.signatureStatement}"
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-sans leading-relaxed text-balance font-normal">
              {siteConfig.about.signatureSubtext}
            </p>

            {/* Elegant Cinematic Divider */}
            <div className="mx-auto mt-10 flex items-center justify-center gap-3">
              <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
              <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </motion.div>
        </div>

        {/* ================================================== */}
        {/* 2. ABOUT ME: Two-Column Split Layout               */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 pt-4">
          {/* Left Column: Story & Bio */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase font-semibold">
                  {siteConfig.about.eyebrow}
                </span>
              </div>

              {/* Main Heading */}
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {siteConfig.about.greeting}{" "}
                <span className="text-white block sm:inline">
                  {siteConfig.name1}
                </span>
              </h3>

              {/* Primary Role Statement */}
              <p className="mt-6 text-lg sm:text-xl font-medium text-zinc-200 leading-relaxed max-w-2xl">
                {siteConfig.about.primaryStatement}
              </p>

              {/* Polished Professional Bio Paragraph */}
              <p className="mt-5 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
                {siteConfig.about.bioParagraph}
              </p>

              {/* Core Pillars */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5 max-w-xl">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Video size={16} />
                    <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                      EDITING
                    </span>
                  </div>
                  <span className="mt-1 text-[11px] text-zinc-500">Rhythm & Pacing</span>
                </div>
                <div className="flex flex-col border-x border-white/10 px-3">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Film size={16} />
                    <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                      CINEMA
                    </span>
                  </div>
                  <span className="mt-1 text-[11px] text-zinc-500">Light & Lenses</span>
                </div>
                <div className="flex flex-col pl-3">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Camera size={16} />
                    <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                      PHOTO
                    </span>
                  </div>
                  <span className="mt-1 text-[11px] text-zinc-500">Still Frames</span>
                </div>
              </div>

              {/* CTA Button: VIEW MY WORK */}
              <div className="mt-10">
                <button
                  type="button"
                  onClick={scrollToWork}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-3.5 text-xs font-bold tracking-widest text-[#050507] uppercase transition-all duration-300 hover:bg-purple-100 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>VIEW MY WORK</span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#050507] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={12} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Cinematic Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Outer decorative film crop lines */}
              <div className="absolute -inset-3 rounded-2xl border border-white/10 pointer-events-none hidden sm:block" />
              <div className="absolute top-2 left-2 z-20 text-[10px] font-mono tracking-widest text-zinc-500 pointer-events-none">
                CAM A · SENSOR 36x24MM
              </div>
              <div className="absolute bottom-2 right-2 z-20 text-[10px] font-mono tracking-widest text-zinc-500 pointer-events-none">
                ISO 800 · 50MM F/1.4
              </div>

              {/* Portrait Frame */}
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/15 bg-[#09090e] shadow-2xl transition-all duration-500 hover:border-purple-500/40">
                {!imageError1 ? (
                  <img
                    src={siteConfig.about.portraitImage}
                    alt={siteConfig.about.portraitAlt}
                    onError={() => setImageError1(true)}
                    className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  // Cinematic editorial fallback portrait frame
                  <div className="relative flex h-full w-full flex-col justify-between p-8 bg-gradient-to-b from-[#12121e] via-[#09090f] to-[#040407]">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span>DIRECTOR / CINEMATOGRAPHER</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="my-auto text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400">
                        <Camera size={36} />
                      </div>
                      <h4 className="font-display text-xl font-bold tracking-wider text-white uppercase">
                        {siteConfig.name1}
                      </h4>
                      <p className="mt-1 text-xs text-zinc-400 font-sans">
                        Cinematographer & Video Editor
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                        <Sparkles size={11} className="text-purple-400" />
                        <span>Based in Studio & On Location</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600 border-t border-white/5 pt-3">
                      <span>PROJECT ARCHIVE 2026</span>
                      <span>LEICA SUMMICRON-C</span>
                    </div>
                  </div>
                )}

                {/* Subtle bottom gradient vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-transparent to-transparent opacity-80" />

                {/* Corner accent marks */}
                <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-purple-400/80" />
                <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-purple-400/80" />
                <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-purple-400/80" />
                <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-purple-400/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>



   <section id="about" className="relative w-full bg-[#050507] py-20 md:py-32 overflow-hidden">
  {/* Background ambient lighting */}
  <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-purple-950/15 blur-[150px]" />

  <div className="mx-auto max-w-7xl px-6 md:px-12">

    {/* ABOUT ME: Two-Column Split Layout */}
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 pt-4">

      {/* ==================================================
          LEFT COLUMN: Large Cinematic Portrait
          ================================================== */}
      <div className="order-1 lg:order-1 lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Outer decorative film crop lines */}
          <div className="absolute -inset-3 rounded-2xl border border-white/10 pointer-events-none hidden sm:block" />

          <div className="absolute top-2 left-2 z-20 text-[10px] font-mono tracking-widest text-zinc-500 pointer-events-none">
            CAM A · SENSOR 36x24MM
          </div>

          <div className="absolute bottom-2 right-2 z-20 text-[10px] font-mono tracking-widest text-zinc-500 pointer-events-none">
            ISO 800 · 50MM F/1.4
          </div>

          {/* Portrait Frame */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/15 bg-[#09090e] shadow-2xl transition-all duration-500 hover:border-purple-500/40">

            {!imageError2 ? (
              <img
                src={siteConfig.about.portraitImage2}
                alt={siteConfig.about.portraitAlt}
                onError={() => setImageError2(true)}
                className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
            ) : (
              /* Cinematic editorial fallback portrait frame */
              <div className="relative flex h-full w-full flex-col justify-between p-8 bg-gradient-to-b from-[#12121e] via-[#09090f] to-[#040407]">

                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>DIRECTOR / CINEMATOGRAPHER</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="my-auto text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400">
                    <Camera size={36} />
                  </div>

                  <h4 className="font-display text-xl font-bold tracking-wider text-white uppercase">
                    {siteConfig.name2}
                  </h4>

                  <p className="mt-1 text-xs text-zinc-400 font-sans">
                    Cinematographer & Video Editor
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                    <Sparkles size={11} className="text-purple-400" />
                    <span>Based in Studio & On Location</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600 border-t border-white/5 pt-3">
                  <span>PROJECT ARCHIVE 2026</span>
                  <span>LEICA SUMMICRON-C</span>
                </div>
              </div>
            )}

            {/* Subtle bottom gradient vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-transparent to-transparent opacity-80" />

            {/* Corner accent marks */}
            <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-purple-400/80" />
            <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-purple-400/80" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-purple-400/80" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-purple-400/80" />

          </div>
        </motion.div>
      </div>


      {/* ==================================================
          RIGHT COLUMN: Story & Bio
          ================================================== */}
      <div className="order-2 lg:order-2 lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

            <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase font-semibold">
              {siteConfig.about.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {siteConfig.about.greeting}{" "}
            <span className="text-white block sm:inline">
              {siteConfig.name2}
            </span>
          </h3>

          {/* Primary Role Statement */}
          <p className="mt-6 text-lg sm:text-xl font-medium text-zinc-200 leading-relaxed max-w-2xl">
            {siteConfig.about.primaryStatement}
          </p>

          {/* Professional Bio */}
          <p className="mt-5 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            {siteConfig.about.bioParagraph}
          </p>

          {/* Core Pillars */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5 max-w-xl">

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-purple-400">
                <Video size={16} />

                <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                  EDITING
                </span>
              </div>

              <span className="mt-1 text-[11px] text-zinc-500">
                Rhythm & Pacing
              </span>
            </div>


            <div className="flex flex-col border-x border-white/10 px-3">
              <div className="flex items-center gap-2 text-purple-400">
                <Film size={16} />

                <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                  CINEMA
                </span>
              </div>

              <span className="mt-1 text-[11px] text-zinc-500">
                Light & Lenses
              </span>
            </div>


            <div className="flex flex-col pl-3">
              <div className="flex items-center gap-2 text-purple-400">
                <Camera size={16} />

                <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                  PHOTO
                </span>
              </div>

              <span className="mt-1 text-[11px] text-zinc-500">
                Still Frames
              </span>
            </div>

          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToWork}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-3.5 text-xs font-bold tracking-widest text-[#050507] uppercase transition-all duration-300 hover:bg-purple-100 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>VIEW MY WORK</span>

              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#050507] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={12} />
              </div>
            </button>
          </div>

        </motion.div>
      </div>

    </div>
  </div>
</section>



    </section>
  );
}
