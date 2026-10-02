import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play, Film, Camera, Video, Sparkles, Sliders } from "lucide-react";
import { PortfolioItem } from "../data/portfolio";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function PortfolioModal({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: PortfolioModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key & handle arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!item) return null;

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "CINEMATOGRAPHY":
        return <Film size={14} className="text-purple-400" />;
      case "VIDEO EDITING":
        return <Video size={14} className="text-purple-400" />;
      case "PHOTOGRAPHY":
        return <Camera size={14} className="text-purple-400" />;
      default:
        return <Sparkles size={14} className="text-purple-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050507]/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#09090e] shadow-2xl"
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#07070a]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 px-3 py-1 text-xs font-mono tracking-wider text-purple-300 uppercase">
                  {getCategoryIcon(item.category)}
                  {item.category}
                </span>
                <span className="hidden sm:inline text-xs font-mono text-zinc-500">
                  {item.year} · {item.client || "Independent Project"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Prev / Next controls */}
                {onPrev && (
                  <button
                    type="button"
                    onClick={onPrev}
                    aria-label="Previous project"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <ChevronLeft size={16} />
                  </button>
                )}
                {onNext && (
                  <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next project"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <ChevronRight size={16} />
                  </button>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable */}
            <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
              {/* Media Player / Visual Canvas */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-inner">
                {item.type === "video" ? (
                  <div className="aspect-video w-full bg-black">
                    <video
                      ref={videoRef}
                      src={item.video || item.previewVideo}
                      poster={item.thumbnail}
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full object-contain"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="flex max-h-[65vh] w-full items-center justify-center bg-black/60 p-2">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-h-[60vh] w-auto max-w-full rounded object-contain shadow-2xl"
                    />
                  </div>
                )}
              </div>

              {/* Project Information & Production Credits */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 pt-2">
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-purple-400">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Sidebar */}
                <div className="lg:col-span-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-4">
                  <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-400 border-b border-white/10 pb-2">
                    Production Details
                  </h4>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-zinc-500 font-mono">Client / Project</span>
                      <p className="text-zinc-200 font-medium">{item.client || "Independent"}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-mono">Year</span>
                      <p className="text-zinc-200 font-medium">{item.year}</p>
                    </div>

                    {item.duration && (
                      <div>
                        <span className="text-zinc-500 font-mono">Run Time</span>
                        <p className="text-zinc-200 font-medium">{item.duration}</p>
                      </div>
                    )}

                    {item.gearUsed && (
                      <div>
                        <span className="text-zinc-500 font-mono">Camera & Post Pipeline</span>
                        <p className="text-zinc-200 font-medium leading-relaxed">{item.gearUsed}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
