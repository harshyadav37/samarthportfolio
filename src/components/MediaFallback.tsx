import { useState } from "react";
import { Film, Image as ImageIcon, Play } from "lucide-react";

interface MediaFallbackProps {
  src?: string;
  alt: string;
  type?: "image" | "video";
  className?: string;
  aspectRatioClass?: string;
  poster?: string;
  title?: string;
  category?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  onHoverPlay?: boolean;
  isHovered?: boolean;
}

export default function MediaFallback({
  src,
  alt,
  type = "image",
  className = "",
  aspectRatioClass = "aspect-video",
  poster,
  title,
  category,
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  isHovered = false,
}: MediaFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no src provided or failed to load
  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c0c14] via-[#08080c] to-[#040407] p-6 text-zinc-400 border border-white/5 ${aspectRatioClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle cinematic anamorphic light streak */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -top-12 -left-12 h-44 w-44 rounded-full bg-purple-500/5 blur-3xl" />

        {/* Top metadata slate */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
          <span className="flex items-center gap-1.5">
            {type === "video" ? <Film size={12} className="text-purple-400" /> : <ImageIcon size={12} className="text-zinc-400" />}
            {category || "CINEMATIC MEDIA"}
          </span>
          <span className="text-zinc-600">4K · 2.39:1 · 24FPS</span>
        </div>

        {/* Center icon / title */}
        <div className="relative z-10 my-auto text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            {type === "video" ? (
              <Play size={18} className="translate-x-0.5 text-zinc-200" />
            ) : (
              <ImageIcon size={18} className="text-zinc-300" />
            )}
          </div>
          {title && (
            <p className="font-display text-sm font-semibold tracking-wide text-zinc-200">
              {title}
            </p>
          )}
          <p className="mt-1 text-xs text-zinc-500 tracking-tight">Shot on Cinema Glass</p>
        </div>

        {/* Bottom subtle crosshairs */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-600">
          <span>REC · TC 00:14:28:12</span>
          <span>ARRI LOG-C</span>
        </div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className={`relative overflow-hidden bg-[#09090d] ${aspectRatioClass} ${className}`}>
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          onError={() => setHasError(true)}
          onLoadedData={() => setIsLoaded(true)}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            isLoaded ? "opacity-100" : "opacity-90"
          } ${isHovered ? "scale-105" : "scale-100"}`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#09090d] ${aspectRatioClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-80"
        } ${isHovered ? "scale-105" : "scale-100"}`}
      />
    </div>
  );
}
