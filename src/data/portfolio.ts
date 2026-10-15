export type PortfolioCategory =
  | "ALL"
  | "VIDEO EDITING"
  | "CINEMATOGRAPHY"
  | "MOTION / VFX";


export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "ALL">;
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
  "MOTION / VFX",
];

const videoProjects: Array<{
  filename: string;
  category: Exclude<PortfolioCategory, "ALL">;
}> = [
  // { filename: "wr1.mp4", category: "VIDEO EDITING" },
  // { filename: "w3.mp4", category: "VIDEO EDITING" },
  // { filename: "w2.mp4", category: "VIDEO EDITING" },
  // { filename: "w1.mp4", category: "VIDEO EDITING" },

  // { filename: "ugc.mp4", category: "CINEMATOGRAPHY" },
  // { filename: "t2.mp4", category: "VIDEO EDITING" },
  // { filename: "t1.mp4", category: "VIDEO EDITING" },
  // { filename: "s5.mp4", category: "MOTION / VFX" },
  // { filename: "s4.mp4", category: "MOTION / VFX" },
  // { filename: "s3.mp4", category: "MOTION / VFX" },
  // { filename: "c1.mp4", category: "VIDEO EDITING" },
  
  { filename: "b1.mov", category: "CINEMATOGRAPHY" },
  // { filename: "r1.mp4", category: "VIDEO EDITING" },
  { filename: "c2.mp4", category: "VIDEO EDITING" },
  // { filename: "s1.mp4", category: "MOTION / VFX" },
  // { filename: "s2.mp4", category: "MOTION / VFX" },
];

export const portfolioItems: PortfolioItem[] = videoProjects.map(
  ({ filename, category }) => {
    const videoPath = `/video/${filename}`;
    const title = filename.replace(/\.[^.]+$/, "").toUpperCase();

    return {
      id: `video-${filename.replace(/[^a-zA-Z0-9]+/g, "-")}`,
      title,
      category,
      type: "video",
      thumbnail: videoPath,
      video: videoPath,
      previewVideo: videoPath,
      aspectRatio: "landscape",
      client: "Independent Project",
      year: "N/A",
      role: category,
      // description: `Video project from ${filename}.`,
      tags: [category],
    };
  },
);
