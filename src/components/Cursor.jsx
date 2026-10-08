import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 300, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 300, mass: 0.4 });
  const raf = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return undefined;

    function move(e) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function over(e) {
      const el = e.target.closest("a, button, .cursor-hover");
      setHovering(Boolean(el));
    }

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: sx, y: sy }}
      animate={{ scale: hovering ? 2.6 : 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  );
}
