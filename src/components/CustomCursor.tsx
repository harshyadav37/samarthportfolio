import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable on precise pointing devices (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("button") ||
          target.closest("a") ||
          target.closest('[role="button"]') ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest(".cursor-pointer");
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 800,
          mass: 0.1,
        }}
      />

      {/* Trailing cinematic ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-white/50"
        style={{
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? "rgba(168, 85, 247, 0.15)" : "rgba(255, 255, 255, 0.02)",
          borderColor: isHovered ? "rgba(192, 132, 252, 0.7)" : "rgba(255, 255, 255, 0.3)",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.2,
        }}
      />
    </>
  );
}
