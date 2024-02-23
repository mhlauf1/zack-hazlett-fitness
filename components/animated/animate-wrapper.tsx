'use client';
import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimateWrapper({ children }: { children: ReactNode }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25, // Adjust as needed
    rootMargin: '0px' // Modify if needed to trigger the animation later or earlier
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.6, // Duration can be adjusted
        delay: 0.3 // Delay can be adjusted
      }
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.6 // Ensures that the slide effect happens at the same rate as the fade
      }
    }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} exit="hidden">
      {children}
    </motion.div>
  );
}
