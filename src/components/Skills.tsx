import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { skillsList, toolsList } from "../data/skills";

export default function Skills() {
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>("storytelling");

  return (
    <section id="skills" className="relative w-full bg-[#050507] py-24 md:py-36 border-t border-white/5 overflow-hidden">
      {/* Cinematic Ambient Glow Gradients in Background */}
      <div className="pointer-events-none absolute top-1/4 -right-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.12)_0%,_transparent_70%)] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.10)_0%,_transparent_70%)] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Section Header with Glow Gradient */}
        <div className="relative mb-20 md:mb-24">
          <div className="pointer-events-none absolute -top-10 left-0 h-40 w-96 rounded-full bg-purple-600/10 blur-[80px]" />

          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
            <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase font-semibold">
              EXPERTISE & PIPELINE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
            SKILLS & TOOLS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
            A calibrated creative pipeline marrying narrative intuition with rigorous technical post-production standards.
          </p>
        </div>

        {/* ================================================== */}
        {/* PART 1: SKILLS — Refined Editorial Numbered Rows  */}
        {/* ================================================== */}
        <div className="mb-24 md:mb-32">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
                PART 01
              </span>
              <span className="text-zinc-600 font-mono">/</span>
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                CORE DISCIPLINES
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              04 DISCIPLINES
            </span>
          </div>

          {/* Clean, Non-Jittering Rows */}
          <div className="space-y-3">
            {skillsList.map((skill) => {
              const isHovered = hoveredSkillId === skill.id;

              return (
                <div
                  key={skill.id}
                  onMouseEnter={() => setHoveredSkillId(skill.id)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isHovered
                      ? "border-purple-500/40 bg-[#0c0c14]/90 shadow-xl shadow-purple-950/20"
                      : "border-white/5 bg-[#08080c]/50 hover:border-white/15"
                  }`}
                >
                  {/* Subtle Glow Gradient behind hovered row */}
                  <div
                    className={`pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(ellipse_at_left,_rgba(168,85,247,0.15)_0%,_transparent_70%)] transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Left Purple Accent Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transition-opacity duration-300 ${
                      isHovered ? "opacity-100 shadow-[0_0_12px_rgba(168,85,247,0.8)]" : "opacity-0"
                    }`}
                  />

                  {/* Main Content Row */}
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8">
                    {/* Number and Title */}
                    <div className="flex items-start sm:items-center gap-5 sm:gap-8 lg:min-w-[420px]">
                      <span
                        className={`font-mono text-3xl sm:text-4xl font-light transition-colors duration-300 ${
                          isHovered ? "text-purple-400" : "text-zinc-600"
                        }`}
                      >
                        {skill.number}
                      </span>
                      <div>
                        <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-100">
                          {skill.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm font-sans text-purple-300/80">
                          {skill.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Clear Discipline Description */}
                    <div className="lg:max-w-xl">
                      <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                        {skill.description}
                      </p>
                      {/* Quiet Unboxed Metadata Tags */}
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-zinc-500">
                        {skill.deliverables.map((del, idx) => (
                          <span key={del} className="flex items-center gap-1.5">
                            <span className="text-zinc-300">{del}</span>
                            {idx < skill.deliverables.length - 1 && (
                              <span className="text-zinc-700" aria-hidden="true">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Icon / Accent indicator */}
                    <div className="hidden lg:flex items-center justify-center shrink-0">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                          isHovered
                            ? "border-purple-500/60 bg-purple-500/10 text-purple-300 translate-x-1"
                            : "border-white/10 text-zinc-600"
                        }`}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================== */}
        {/* PART 2: TOOLS — Balanced 5-Column Creative Worksuite */}
        {/* ================================================== */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
                PART 02
              </span>
              <span className="text-zinc-600 font-mono">/</span>
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                SOFTWARE & TOOLS
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              05 APPLICATIONS
            </span>
          </div>

          {/* Balanced 5-Card Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {toolsList.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#08080c] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#0c0c14] hover:shadow-xl hover:shadow-purple-950/20"
              >
                {/* Subtle top glow highlight on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Tool Header: Monogram Emblem + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border font-mono text-sm font-bold transition-transform duration-300 group-hover:scale-105 shadow-inner"
                      style={{
                        color: tool.color,
                        borderColor: `${tool.color}40`,
                        backgroundColor: `${tool.color}10`,
                      }}
                    >
                      {tool.shortName}
                    </div>

                    <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500">
                      {tool.shortName === "Pr" || tool.shortName === "Dv" ? "CORE NLE" : "FINISHING"}
                    </span>
                  </div>

                  {/* Tool Name */}
                  <h4 className="font-display text-base font-bold text-white transition-colors duration-200 group-hover:text-purple-200">
                    {tool.name}
                  </h4>

                  {/* Tool Description */}
                  <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Focus Area Footer */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>ROLE:</span>
                  <span className="text-zinc-300 font-medium truncate max-w-[120px]">
                    {tool.focusArea}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
