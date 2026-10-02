export interface CreativeSkill {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface CreativeTool {
  id: string;
  name: string;
  category: string;
  shortName: string;
  color: string;
  description: string;
  focusArea: string;
}

export const skillsList: CreativeSkill[] = [
  {
    id: "storytelling",
    number: "01",
    title: "Visual Storytelling & Pacing",
    tagline: "Narrative architecture that commands audience retention.",
    description:
      "Crafting rhythmic pacing, emotional arc, and visual coherence. Cutting for rhythm, tension, and narrative flow across short-form reels, brand commercials, and long-form narrative films.",
    deliverables: ["Pacing & Cut Optimization", "Narrative Structuring", "High-Retention Commercial Cuts", "Documentary Sequences"],
  },
  {
    id: "audio",
    number: "02",
    title: "Audio Post Production",
    tagline: "Immersive soundscapes that carry half the picture's weight.",
    description:
      "Precision audio editing, foley curation, atmospheric sound design, dialogue de-noising, and multi-track spatial mixing that brings visual cuts to life with visceral punch.",
    deliverables: ["Sound Design & Foley", "Dialogue Cleanup & EQ", "Atmospheric SFX Layering", "Music Cue Synchronization"],
  },
  {
    id: "color",
    number: "03",
    title: "Color Correction & Grading",
    tagline: "Cinematic color science that defines the project's soul.",
    description:
      "Balancing log footage, matching multi-camera setups, creating custom filmic LUTs, and color grading for mood, depth, and skin tones with strict broadcast delivery standards.",
    deliverables: ["Log Normalization & Shot Matching", "Cinematic Film Emulation", "Skin Tone Preservation", "HDR & Rec.709 Mastering"],
  },
  {
    id: "motion",
    number: "04",
    title: "Motion Graphics & VFX",
    tagline: "Dynamic visual enhancements seamlessly integrated into edits.",
    description:
      "Kinetic typography, seamless 3D tracking, screen replacements, visual cleanups, title design, and stylized compositing tailored to enhance narrative momentum.",
    deliverables: ["Kinetic Title Sequences", "Object Tracking & Compositing", "Rotoscoping & Wire Removal", "Dynamic Infographic Elements"],
  },
];

export const toolsList: CreativeTool[] = [
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    category: "NLE Video Editing",
    shortName: "Pr",
    color: "#9999FF",
    description: "Professional video editing and timeline workflow for high-volume campaigns, commercial edits, and narrative assemblies.",
    focusArea: "Master Assembly & Multi-Cam",
  },
  {
    id: "after-effects",
    name: "Adobe After Effects",
    category: "Motion & Compositing",
    shortName: "Ae",
    color: "#9999FF",
    description: "Motion graphics, visual effects, camera tracking, roto, and sophisticated title animations integrated dynamically.",
    focusArea: "Kinetic Motion & Visual FX",
  },
  {
    id: "davinci",
    name: "DaVinci Resolve",
    category: "Color & Finish",
    shortName: "Dv",
    color: "#FF5E5B",
    description: "Color correction and cinematic grading with advanced node-based color science, studio mastering, and film curves.",
    focusArea: "Color Grading & Mastering",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Still Compositing",
    shortName: "Ps",
    color: "#31A8FF",
    description: "Photo editing, visual compositing, high-end skin retouching, color toning, and keyframe visual development.",
    focusArea: "Retouching & Key Art",
  },
  {
    id: "canva",
    name: "Canva",
    category: "Design & Socials",
    shortName: "Cv",
    color: "#00C4CC",
    description: "Creative design, rapid storyboard layouts, client visual pitches, and social media content structuring.",
    focusArea: "Storyboard & Rapid Concepts",
  },
];
