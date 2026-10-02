import { ArrowUp } from "lucide-react";
import { siteConfig } from "../data/config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#030305] border-t border-white/10 text-zinc-400 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Top 3-Zone Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Left: Brand Name */}
          <div>
            <span className="font-display text-lg font-bold tracking-widest text-white uppercase">
              {siteConfig.name}
            </span>
            <p className="mt-1 text-xs font-mono text-purple-400 tracking-wider">
              {siteConfig.footer.statement}
            </p>
          </div>

          {/* Center: Roles */}
          <div className="text-xs sm:text-sm font-sans text-zinc-300">
            Video Editor <span className="text-purple-400 mx-1">•</span> Cinematographer <span className="text-purple-400 mx-1">•</span> Photographer
          </div>

          {/* Right: Direct Links & Back to Top */}
          <div className="flex items-center gap-6 text-xs font-mono tracking-wider">
            <a
              href={siteConfig.contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={siteConfig.contact.email.url}
              className="hover:text-white transition-colors"
            >
              Email
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-purple-400 transition-colors ml-2"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © {siteConfig.footer.copyrightYear} {siteConfig.name}. All rights reserved.
          </div>
          <div>
            Crafted for Cinematic Storytelling · Shoot to Screen
          </div>
        </div>
      </div>
    </footer>
  );
}
