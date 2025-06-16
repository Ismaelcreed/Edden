import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './FloatingCursor.scss';
import nuage from '../../assets/Images/cloud.png'; 

const FloatingCursor = () => {
  const cursorSize = 80; // Taille du nuage
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - cursorSize / 2); // Centrage précis
      mouseY.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-container"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.img
        src={nuage}
        alt="nuage cursor"
        className="floating-cursor"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default FloatingCursor;