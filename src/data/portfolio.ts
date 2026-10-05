import { useState } from "react";

export type PortfolioCategory =
  | "ALL"
  | "VIDEO EDITING"
  | "CINEMATOGRAPHY"
  | "PHOTOGRAPHY"
  | "MOTION / VFX";


export interface PortfolioItem {
  id: string;
  title: string;
  category: "VIDEO EDITING" | "CINEMATOGRAPHY" | "PHOTOGRAPHY" | "MOTION / VFX";
  type: "video" | "image";
  thumbnail: string;
  video?: string;
  previewVideo?: string; // Short muted video preview loop
  aspectRatio: "landscape" | "portrait" | "standard" | "wide"; // landscape (16:9), portrait (3:4 or 4:5), wide (21:9)
  gridSpan?: string; // Tailwind grid span e.g. "md:col-span-2 md:row-span-2"
  client?: string;
  year: string;
  duration?: string;
  role: string;
  gearUsed?: string;
  description: string;
  tags: string[];
}

export const portfolioCategories: PortfolioCategory[] = [
  "ALL",
  "VIDEO EDITING",
  "CINEMATOGRAPHY",
  "PHOTOGRAPHY",
  "MOTION / VFX",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "project-1",
    title: "Nocturne — Midnight Narrative",
    category: "CINEMATOGRAPHY",
    type: "video",
    thumbnail: "/images/work/project-1.jpg",
    video: "/video/video2.mp4",
    previewVideo: "/video/video2.mp4",
    aspectRatio: "wide",
    gridSpan: "lg:col-span-2 lg:row-span-2",
    client: "Aura Pictures & Indie Cinema",
    year: "2025",
    duration: "3:42",
    role: "Cinematographer & Colorist",
    gearUsed: "Sony FX6 · Cooke Anamorphic /i · DaVinci Resolve",
    description:
      "A moody, low-light psychological short film captured with vintage anamorphic glass. Focused on deep contrast ratios, subtle practical neon highlights, and atmospheric haze.",
    tags: ["Anamorphic", "Low Light", "Narrative", "Color Grading"],
  },
  {
    id: "project-2",
    title: "Verve — High-Pace Commercial",
    category: "VIDEO EDITING",
    type: "video",
    thumbnail: "/images/work/project-2.jpg",
    video: "/video/video2.mp4",
    previewVideo: "/video/video2.mp4",
    aspectRatio: "landscape",
    gridSpan: "lg:col-span-1 lg:row-span-1",
    client: "Apex Urban Footwear",
    year: "2025",
    duration: "0:45",
    role: "Lead Video Editor & Sound Designer",
    gearUsed: "Premiere Pro · Soundly · After Effects",
    description:
      "High-energy dynamic commercial cut built around punchy sync cuts, multi-layered foley, and kinetic typography designed for maximum social engagement and retention.",
    tags: ["Commercial", "Pacing", "Sound Design", "Social Cut"],
  },
  {
    id: "project-3",
    title: "Solitude in Concrete",
    category: "PHOTOGRAPHY",
    type: "image",
    thumbnail: "/images/work/project-3.jpg",
    aspectRatio: "portrait",
    gridSpan: "lg:col-span-1 lg:row-span-2",
    client: "Editorial Monograph",
    year: "2024",
    role: "Photographer & Retoucher",
    gearUsed: "Leica SL2 · 50mm Summilux · Photoshop",
    description:
      "Brutalist architectural editorial portrait series examining the interplay of raw concrete geometry, dramatic midday shadows, and human stillness in metropolitan spaces.",
    tags: ["Editorial", "Architecture", "Monochrome", "Print"],
  },
  {
    id: "project-4",
    title: "Chroma — Future Kinetic Title",
    category: "MOTION / VFX",
    type: "video",
    thumbnail: "/images/work/project-4.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    aspectRatio: "standard",
    gridSpan: "lg:col-span-1 lg:row-span-1",
    client: "Cybernetic Music Festival",
    year: "2025",
    duration: "1:15",
    role: "Motion Designer & 3D Artist",
    gearUsed: "After Effects · Blender · Illustrator",
    description:
      "Experimental title sequence combining procedural geometric displacement, 3D typography, and custom light leak transitions synced to synthesized bass drops.",
    tags: ["Kinetic Type", "3D Titles", "VFX Compositing"],
  },
  {
    id: "project-5",
    title: "Highland Reverie — Travel Doc",
    category: "CINEMATOGRAPHY",
    type: "video",
    thumbnail: "/images/work/project-5.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    aspectRatio: "landscape",
    gridSpan: "lg:col-span-1 lg:row-span-1",
    client: "Alpine Expeditions",
    year: "2024",
    duration: "2:10",
    role: "Director of Photography & Editor",
    gearUsed: "Red Komodo 6K · Canon FD Primes",
    description:
      "Documentary travel visual shot across rugged Himalayan mountain passes during twilight and golden hours, balancing handheld spontaneity with painterly vistas.",
    tags: ["Documentary", "Natural Light", "Travel", "6K Cinema"],
  },
  {
    id: "project-6",
    title: "Raw Form — Avant-Garde Fashion",
    category: "PHOTOGRAPHY",
    type: "image",
    thumbnail: "/images/work/project-6.jpg",
    aspectRatio: "portrait",
    gridSpan: "lg:col-span-1 lg:row-span-2",
    client: "Komorebi Lookbook",
    year: "2025",
    role: "Photographer & Creative Director",
    gearUsed: "Fujifilm GFX 100S · Broncolor Lighting",
    description:
      "Avant-garde fashion lookbook emphasizing sculptural fabric drapes, tactile textures, and striking chiaroscuro single-source key lighting.",
    tags: ["High Fashion", "Studio Lighting", "Medium Format"],
  },
  {
    id: "project-7",
    title: "Tempo — Automotive Rhythm Reel",
    category: "VIDEO EDITING",
    type: "video",
    thumbnail: "/images/work/project-7.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    aspectRatio: "landscape",
    gridSpan: "lg:col-span-2 lg:row-span-1",
    client: "Velocity Supercars",
    year: "2025",
    duration: "1:02",
    role: "Editor, Sound Designer & Colorist",
    gearUsed: "Premiere Pro · DaVinci Resolve Studio",
    description:
      "Adrenaline-fueled automotive showcase blending precision speed ramps, roaring exhaust sound design, and an assertive filmic contrast grade.",
    tags: ["Automotive", "Speed Ramp", "Precision Editing", "Color Science"],
  },
  {
    id: "project-8",
    title: "Aura Screen & UI Replacements",
    category: "MOTION / VFX",
    type: "video",
    thumbnail: "/images/work/project-8.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    aspectRatio: "standard",
    gridSpan: "lg:col-span-1 lg:row-span-1",
    client: "Neura Tech Devices",
    year: "2024",
    duration: "0:50",
    role: "VFX Compositor & Roto Artist",
    gearUsed: "Mocha Pro · After Effects · DaVinci Fusion",
    description:
      "Planar tracking, screen reflection simulation, and seamless compositing of futuristic graphical user interfaces onto handheld prototype devices.",
    tags: ["Planar Tracking", "Screen Replacement", "Compositing"],
  },
];
