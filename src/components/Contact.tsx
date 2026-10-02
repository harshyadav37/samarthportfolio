import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Instagram, Mail, ArrowUpRight, Copy, Check, Send, Sparkles } from "lucide-react";
import { siteConfig } from "../data/config";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string>("Commercial");
  const [clientName, setClientName] = useState<string>("");
  const [clientDetails, setClientDetails] = useState<string>("");

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const projectTypes = [
    "Commercial",
    "Music Video",
    "Documentary",
    "Social Media Cut",
    "Color Grading",
    "Photography Shoot",
  ];

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hi Samarth! My name is ${clientName || "a client"}. I have a ${projectType} project in mind: ${clientDetails || "I'd like to collaborate with you."}`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  const generateEmailSubjectAndBody = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} — ${clientName || "New Client"}`);
    const body = encodeURIComponent(
      `Hi Samarth,\n\nI saw your portfolio and would like to discuss a ${projectType} project.\n\nProject details:\n${clientDetails || "Please let me know your availability."}\n\nBest regards,\n${clientName || ""}`
    );
    return `mailto:${siteConfig.contact.email.address}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-[#050507] py-24 md:py-36 overflow-hidden">
      {/* Cinematic Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] rounded-full bg-purple-950/20 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Main Heading & Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-3.5 py-1 text-xs font-mono tracking-widest text-purple-300 uppercase"
          >
            <Sparkles size={12} />
            <span>START A CONVERSATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]"
          >
            {siteConfig.contact.headline}
            <span className="block mt-2 text-purple-400">
              {siteConfig.contact.headlineAccent}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-sans leading-relaxed"
          >
            {siteConfig.contact.subheading}
          </motion.p>
        </div>

        {/* 3 Core Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#09090e] p-7 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#0c0c14] hover:shadow-2xl hover:shadow-emerald-950/20"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <MessageSquare size={22} />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.contact.whatsapp.number, "whatsapp")}
                  aria-label="Copy WhatsApp number"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copiedType === "whatsapp" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              <span className="text-xs font-mono tracking-widest uppercase text-emerald-400">
                WHATSAPP
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                Direct Chat
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                {siteConfig.contact.whatsapp.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-300">
                {siteConfig.contact.whatsapp.display}
              </span>
              <a
                href={siteConfig.contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-transform"
              >
                <span>Chat</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Instagram Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#09090e] p-7 transition-all duration-300 hover:border-pink-500/40 hover:bg-[#0c0c14] hover:shadow-2xl hover:shadow-pink-950/20"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:scale-105 transition-transform">
                  <Instagram size={22} />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.contact.instagram.username, "instagram")}
                  aria-label="Copy Instagram handle"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copiedType === "instagram" ? <Check size={14} className="text-pink-400" /> : <Copy size={14} />}
                </button>
              </div>

              <span className="text-xs font-mono tracking-widest uppercase text-pink-400">
                INSTAGRAM
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                Visual Feed & DM
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                {siteConfig.contact.instagram.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-300">
                {siteConfig.contact.instagram.display}
              </span>
              <a
                href={siteConfig.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-pink-400 hover:text-pink-300 group-hover:translate-x-1 transition-transform"
              >
                <span>Follow</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#09090e] p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#0c0c14] hover:shadow-2xl hover:shadow-purple-950/20"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
                  <Mail size={22} />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.contact.email.address, "email")}
                  aria-label="Copy Email address"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copiedType === "email" ? <Check size={14} className="text-purple-400" /> : <Copy size={14} />}
                </button>
              </div>

              <span className="text-xs font-mono tracking-widest uppercase text-purple-400">
                EMAIL
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                Official Briefs
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                {siteConfig.contact.email.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-300 truncate max-w-[170px]">
                {siteConfig.contact.email.display}
              </span>
              <a
                href={siteConfig.contact.email.url}
                className="flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-transform"
              >
                <span>Compose</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copy Notification Toast */}
        <AnimatePresence>
          {copiedType && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-white/15 bg-[#12121c] px-4 py-2.5 text-xs text-white shadow-2xl backdrop-blur-md"
            >
              <Check size={14} className="text-emerald-400" />
              <span>Copied {copiedType} to clipboard</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Quick Brief Composer */}
        <div className="rounded-2xl border border-white/10 bg-[#08080c] p-6 sm:p-8 md:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-purple-400">
                QUICK ESTIMATE & BRIEF
              </span>
              <h4 className="font-display text-xl font-bold text-white mt-1">
                Send Project Details Directly
              </h4>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              Instant Pre-filled Message
            </span>
          </div>

          <div className="space-y-5">
            {/* Project Type Selector */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Project Discipline:
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 ${
                      projectType === type
                        ? "bg-purple-600/30 text-purple-200 border border-purple-500/50"
                        : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="client-name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Your Name or Brand:
                </label>
                <input
                  id="client-name"
                  type="text"
                  placeholder="e.g. Maya Lin / Vertex Media"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="client-details" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Brief Overview / Timeline:
                </label>
                <input
                  id="client-details"
                  type="text"
                  placeholder="e.g. 60-sec brand commercial for Q3 launch"
                  value={clientDetails}
                  onChange={(e) => setClientDetails(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Dispatch Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-mono font-semibold tracking-wider uppercase text-white hover:bg-emerald-500 transition-colors"
              >
                <MessageSquare size={15} />
                <span>Send Brief via WhatsApp</span>
              </a>

              <a
                href={generateEmailSubjectAndBody()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-xs font-mono font-semibold tracking-wider uppercase text-zinc-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Mail size={15} />
                <span>Send Brief via Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
