/**
 * Centralized Configuration for Samarth Nagde's Portfolio
 * Edit this file to update personal details, links, media URLs, and text copy.
 */

export interface PersonalConfig {
  name1: string;
   name2: string;
  logo: string;
  eyebrow: string;
  titles: string[];
  roleSubtitle: string;
  tagline: string;
  subtagline: string;
  about: {
    eyebrow: string;
    greeting: string;
    primaryStatement: string;
    bioParagraph: string;
    portraitImage: string;
    portraitImage2: string;
    portraitAlt: string;
    experienceYears: string;
    projectsCompleted: string;
    signatureStatement: string;
    signatureSubtext: string;
  };
  hero: {
    bannerImage: string;
    bannerVideo?: string; // Optional video loop (e.g. /videos/hero.mp4)
    scrollText: string;
  };
  contact: {
    headline: string;
    headlineAccent: string;
    subheading: string;
    whatsapp: {
      number: string;
      display: string;
      url: string;
      description: string;
    };
    instagram: {
      username: string;
      display: string;
      url: string;
      description: string;
    };
    email: {
      address: string;
      display: string;
      url: string;
      description: string;
    };
  };
  footer: {
    statement: string;
    copyrightYear: number;
  };
}

export const siteConfig: PersonalConfig = {
  name1:"Samarth Nagde" ,
  name2:"Sanskar Nagde",
  logo:"SARNAGE.POV",
  eyebrow: "CREATIVE DIRECTION & POST-PRODUCTION",
  titles: ["Video Editor", "Cinematographer", "Photographer"],
  roleSubtitle: "Video Editor · Cinematographer · Photographer",
  tagline: "FROM SHOOT TO SCREEN, ALL IN ONE PLACE.",
  subtagline: "Creative shoots, cinematic visuals and professional editing — everything you need to bring your vision to life.",

  hero: {
    bannerImage: "/images/hero-banner.jpg",
    bannerVideo: "/videos/hero.mp4",
    scrollText: "SCROLL TO EXPLORE",
  },

  about: {
    eyebrow: "ABOUT ME",
    greeting: "Hi, I'm",
    primaryStatement: "I am a Video Editor, Cinematographer & Photographer focused on transforming ideas into visually compelling stories.",
    bioParagraph: "I create visual stories that connect emotion, atmosphere and narrative. From capturing cinematic footage to shaping the final edit, I work across the complete visual journey — from shoot to screen.",
    portraitImage: "/images/bella1.jpg",
    portraitImage2: "/images/bella2.jpg",
    portraitAlt: "Samarth Nagde — Filmmaker, Cinematographer and Video Editor",
    experienceYears: "5+",
    projectsCompleted: "120+",
    signatureStatement: "FROM SHOOT TO SCREEN, ALL IN ONE PLACE.",
    signatureSubtext: "Creative shoots, cinematic visuals and professional editing — everything you need to bring your vision to life.",
  },

  contact: {
    headline: "WANT YOUR VIDEOS TO STAND OUT?",
    headlineAccent: "LET'S WORK TOGETHER.",
    subheading: "Have a project, campaign, shoot or creative idea in mind? Let's turn it into something worth watching.",
    whatsapp: {
      number: "+917987698062", // Easily replace with actual number
      display: "+91 79876 98062",
      url: "https://wa.me/917987698062?text=Hi%20Samarth%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      description: "Fastest response for project inquiries & collaborations",
    },
    instagram: {
      username: "sarnage.pov", // Easily replace with actual username
      display: "@sarnage.pov",
      url: "https://instagram.com/sarnage.pov",
      description: "Direct messages, daily visual reels & behind the scenes",
    },
    email: {
      address: "sarnage6@gmail.com",
      display: "sarnage6@gmail.com",
      url: "mailto:sarnage6@gmail.com?subject=Project%20Inquiry%20%7C%20Samarth%20Nagde",
      description: "Official production briefs, treatment decks & proposals",
    },
  },

  footer: {
    statement: "FROM SHOOT TO SCREEN.",
    copyrightYear: 2026,
  },
};
