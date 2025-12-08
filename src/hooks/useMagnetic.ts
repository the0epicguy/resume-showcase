import { RefObject, useEffect } from 'react';

export function useMagnetic(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    function handler(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) rotate(${x * 0.01}deg)`;
    }

    function reset() {
      el.style.transform = '';
    }

    el.addEventListener('mousemove', handler);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', handler);
      el.removeEventListener('mouseleave', reset);
    };
  }, [ref]);
}
