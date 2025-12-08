import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function CursorBlobs() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const smoothX = useSpring(cursorX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(cursorY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed -z-10 w-[420px] h-[420px] rounded-full mix-blend-screen opacity-50 blur-2xl"
        style={{
          x: useTransform(smoothX, (v) => v - 210),
          y: useTransform(smoothY, (v) => v - 210),
          background: 'linear-gradient(135deg, hsl(174 72% 46% / 0.6), hsl(168 80% 42% / 0.45))',
        }}
      />
      <motion.div
        className="pointer-events-none fixed -z-20 w-[700px] h-[700px] rounded-full mix-blend-plus-lighter opacity-25 blur-3xl"
        style={{
          x: useTransform(smoothX, (v) => v - 350),
          y: useTransform(smoothY, (v) => v - 250),
          background: 'linear-gradient(90deg, hsl(186 76% 35% / 0.25), hsl(174 72% 46% / 0.2))',
        }}
      />
    </>
  );
}
