import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, ChevronDown, Sparkles } from "lucide-react";
import { portfolioItems, portfolioCategories, PortfolioCategory, PortfolioItem } from "../data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("ALL");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  // Filter items based on active category
  const filteredItems = selectedCategory === "ALL"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  // Modal navigation
  const currentIndex = activeModalItem
    ? filteredItems.findIndex((i) => i.id === activeModalItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveModalItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveModalItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveModalItem(filteredItems[0]);
    }
  };

  return (
    <section id="work" className="relative w-full bg-[#050507] py-24 md:py-36">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-950/15 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          {/* Subtle Glow Gradient behind selected work header */}
          <div className="pointer-events-none absolute -left-10 -top-8 h-40 w-80 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.15)_0%,_transparent_70%)] blur-3xl" />

          <div className="relative z-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase font-semibold">
                CURATED SHOWCASE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              SELECTED WORK
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans italic tracking-wide">
              "Most videos featured here were shot and edited by me."
            </p>
          </div>

          {/* Filtering Controls: Dual Mode (Dropdown + Desktop Bar) */}
          <div className="flex items-center gap-3">
            {/* Custom Dropdown Control as explicitly requested */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                aria-label="Filter portfolio categories"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono tracking-wider text-zinc-200 transition-colors hover:border-purple-400/50 hover:bg-white/10"
              >
                <Filter size={14} className="text-purple-400" />
                <span className="uppercase">{selectedCategory}</span>
                <ChevronDown
                  size={14}
                  className={`text-zinc-400 transition-transform ${isFilterDropdownOpen ? "rotate-180 text-purple-400" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isFilterDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 z-30 mt-2 w-52 rounded-xl border border-white/10 bg-[#0b0b10] p-1.5 shadow-2xl backdrop-blur-xl"
                  >
                    {portfolioCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterDropdownOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-mono tracking-wider transition-colors ${
                          selectedCategory === category
                            ? "bg-purple-950/50 text-purple-300 font-medium"
                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{category}</span>
                        {selectedCategory === category && (
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Item count tag */}
            <span className="hidden sm:inline-block rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-mono text-zinc-500">
              {filteredItems.length} {filteredItems.length === 1 ? "PROJECT" : "PROJECTS"}
            </span>
          </div>
        </div>

        {/* Quick Filter Bar for Desktop */}
        <div className="hidden lg:flex items-center gap-2 pt-6 pb-2 overflow-x-auto">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-purple-600/20 text-purple-300 border border-purple-500/40"
                  : "text-zinc-400 hover:text-zinc-200 border border-transparent hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry / Bento Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setActiveModalItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox / Modal */}
        <PortfolioModal
          item={activeModalItem}
          isOpen={!!activeModalItem}
          onClose={() => setActiveModalItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
