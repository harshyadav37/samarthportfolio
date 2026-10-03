import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Instagram, Mail, Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "../data/config";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for glassmorphism / darker background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close contact dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contactDropdownRef.current &&
        !contactDropdownRef.current.contains(e.target as Node)
      ) {
        setIsContactOpen(false);
      }
    };

    if (isContactOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isContactOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "SKILLS", href: "#skills" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsContactOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand Zone: Single element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="group flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-widest text-white transition-opacity hover:opacity-90"
        >
          <span className="relative">
            {siteConfig.logo}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </a>

        {/* Center / Right Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative font-sans text-xs tracking-widest uppercase transition-colors duration-200 py-1 ${
                  isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side: Contact Dropdown Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Contact Popover Trigger */}
          <div className="relative" ref={contactDropdownRef}>
            <button
              type="button"
              onClick={() => setIsContactOpen(!isContactOpen)}
              aria-expanded={isContactOpen}
              aria-label="Open contact options"
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                isContactOpen
                  ? "border-purple-500/50 bg-purple-950/40 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                  : "border-white/15 bg-white/5 text-zinc-200 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>CONTACT</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isContactOpen ? "rotate-180 text-purple-400" : "text-zinc-400"}`}
              />
            </button>

            {/* Desktop Contact Popover */}
            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-72 origin-top-right rounded-2xl border border-white/10 bg-[#09090e]/95 p-3 shadow-2xl backdrop-blur-xl"
                >
                  <div className="px-3 py-2 text-[10px] font-mono tracking-wider text-zinc-500 uppercase border-b border-white/5">
                    Direct Channels
                  </div>

                  <div className="mt-2 space-y-1">
                    {/* WhatsApp */}
                    <a
                      href={siteConfig.contact.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                          <MessageSquare size={17} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                            WhatsApp
                          </div>
                          <div className="text-[11px] text-zinc-400 truncate max-w-[150px]">
                            {siteConfig.contact.whatsapp.display}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>

                    {/* Instagram */}
                    <a
                      href={siteConfig.contact.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:scale-105 transition-transform">
                          <Instagram size={17} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-zinc-100 group-hover:text-pink-400 transition-colors">
                            Instagram
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            {siteConfig.contact.instagram.display}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>

                    {/* Email */}
                    <a
                      href={siteConfig.contact.email.url}
                      className="group flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
                          <Mail size={17} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-zinc-100 group-hover:text-purple-400 transition-colors">
                            Email
                          </div>
                          <div className="text-[11px] text-zinc-400 truncate max-w-[150px]">
                            {siteConfig.contact.email.display}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>
                  </div>

                  <div className="mt-2 border-t border-white/5 pt-2 text-center">
                    <a
                      href="#contact"
                      onClick={(e) => handleLinkClick(e, "#contact")}
                      className="inline-block text-[11px] font-medium text-purple-400 hover:text-purple-300 py-1"
                    >
                      Open Full Project Brief &rarr;
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 md:hidden hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col justify-between bg-[#08080c] p-6 shadow-2xl border-l border-white/10 md:hidden"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-display text-sm font-bold tracking-widest text-white">
                  {siteConfig.name}
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/5"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-display text-2xl font-bold tracking-tight text-zinc-200 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="font-display text-2xl font-bold tracking-tight text-purple-400"
                >
                  CONTACT
                </a>
              </div>
            </div>

            {/* Quick Contact buttons in mobile drawer */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <p className="text-xs font-mono tracking-wider text-zinc-500 uppercase">
                Direct Inquiries
              </p>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={siteConfig.contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 p-3 text-emerald-400 transition-colors hover:bg-white/10"
                >
                  <MessageSquare size={18} />
                  <span className="text-[10px] text-zinc-300">WhatsApp</span>
                </a>
                <a
                  href={siteConfig.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 p-3 text-pink-400 transition-colors hover:bg-white/10"
                >
                  <Instagram size={18} />
                  <span className="text-[10px] text-zinc-300">Instagram</span>
                </a>
                <a
                  href={siteConfig.contact.email.url}
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 p-3 text-purple-400 transition-colors hover:bg-white/10"
                >
                  <Mail size={18} />
                  <span className="text-[10px] text-zinc-300">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
