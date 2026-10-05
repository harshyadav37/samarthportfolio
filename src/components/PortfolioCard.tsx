import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, ArrowUpRight, Film, Camera, Video, Sparkles } from "lucide-react";
import { PortfolioItem } from "../data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "CINEMATOGRAPHY":
        return <Film size={12} className="text-purple-400" />;
      case "VIDEO EDITING":
        return <Video size={12} className="text-purple-400" />;
      case "PHOTOGRAPHY":
        return <Camera size={12} className="text-purple-400" />;
      default:
        return <Sparkles size={12} className="text-purple-400" />;
    }
  };

  // Determine aspect ratio class
  const getAspectClass = () => {
    switch (item.aspectRatio) {
      case "portrait":
        return "aspect-[3/4]";
      case "wide":
        return "aspect-[21/9] sm:aspect-[16/9]";
      case "landscape":
      default:
        return "aspect-video";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#09090d] transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/20 ${item.gridSpan || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View project: ${item.title}`}
    >
      <div className={`relative w-full overflow-hidden ${getAspectClass()}`}>
        {/* If video item with preview video */}
        {item.type === "video" && (item.previewVideo || item.video) ? (
          <video
            ref={videoRef}
            src={item.previewVideo || item.video}
            poster={item.thumbnail}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : !imageError ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          // Stylized fallback visual frame with zero broken image appearance
          <div className="relative flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#12121e] via-[#090910] to-[#040407]">
            <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-zinc-500">
              <span className="flex items-center gap-1.5 uppercase">
                {getCategoryIcon(item.category)}
                {item.category}
              </span>
              <span>{item.year}</span>
            </div>
            <div className="my-auto text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-transform group-hover:scale-110">
                {item.type === "video" ? <Play size={16} /> : <Camera size={16} />}
              </div>
              <p className="font-display text-sm font-semibold text-zinc-200">
                {item.title}
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-600 flex justify-between">
              <span>{item.role}</span>
              <span>SHOT & EDITED</span>
            </div>
          </div>
        )}

        {/* Ambient Dark Gradient Scrim for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Top Badges / Info */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            {getCategoryIcon(item.category)}
            <span>{item.category}</span>
          </div>

          {/* {item.duration && (
            <span className="text-[11px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
              {item.duration}
            </span>
          )} */}
        </div>

        {/* Bottom Metadata */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono tracking-wider text-purple-400">
                {item.client || "Self-Directed"} · {item.year}
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-200">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
                {item.role}
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-white/5 text-zinc-300 group-hover:border-purple-400 group-hover:text-purple-400 transition-colors shrink-0">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
