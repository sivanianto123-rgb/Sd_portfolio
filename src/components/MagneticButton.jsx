import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function MagneticButton({ children, className = "", as = "a", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });
  const MotionTag = motion[as] ?? motion.a;

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionTag
      ref={ref}
      className={`magnetic cursor-hover ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
