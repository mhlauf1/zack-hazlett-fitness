'use client';
import { useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export default function AnimateWrapper({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {children}
      </span>
    </div>
  );
}
