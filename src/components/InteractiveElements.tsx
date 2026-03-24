import { useRef, MouseEvent as ReactMouseEvent, ReactNode, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 3D tilt card
export const TiltCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { stiffness: 300, damping: 30 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      className={`relative ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, hsl(0 100% 47.6% / 0.12), transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
};

// Magnetic button
export const MagneticButton = ({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: smoothX, y: smoothY }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

// Line-by-line text reveal (Mitchy-style with ghost text effect)
export const LineReveal = ({
  lines,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) => {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "120%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

// Text reveal word by word
export const TextReveal = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: -80 }}
            whileInView={{ y: "0%", rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Floating element
export const FloatingElement = ({
  children,
  className = "",
  duration = 4,
  distance = 15,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      animate={{ y: [-distance, distance, -distance], rotate: [-2, 2, -2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered container
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered clip reveal
export const ClipReveal = ({
  children,
  className = "",
  direction = "bottom",
}: {
  children: ReactNode;
  className?: string;
  direction?: "bottom" | "left" | "right";
}) => {
  const clips = {
    bottom: { hidden: "inset(100% 0 0 0)", visible: "inset(0 0 0 0)" },
    left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0 0 0)" },
    right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0)" },
  };

  return (
    <motion.div
      initial={{ clipPath: clips[direction].hidden, opacity: 0 }}
      whileInView={{ clipPath: clips[direction].visible, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Smooth number counter
export const SmoothCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => {
        if (started.current) return;
        started.current = true;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};
