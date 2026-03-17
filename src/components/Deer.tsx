import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

const Deer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isJumping, setIsJumping] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Move deer from left to right as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], [-200, 1200]);
  // Bobbing motion
  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -15, 0, -10, 0, -5]);

  const handleClick = async () => {
    if (isJumping) return;
    setIsJumping(true);
    await controls.start({
      y: [0, -50, 0],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6, ease: "easeInOut" }
    });
    setIsJumping(false);
  };

  return (
    <motion.div ref={ref} style={{ position: "fixed", bottom: "5%", left: 0, zIndex: 10 }}>
      {/* Deer emoji with bounce */}
      <motion.div
        style={{ x, y, fontSize: "3rem", filter: "drop-shadow(0 0 10px #f59e0b)" }}
        animate={controls}
        initial={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🦌
      </motion.div>
      {/* Footprints (optional) */}
      <motion.div style={{ x, opacity: 0.5, fontSize: "1.5rem", marginTop: -10 }}>
        👣👣👣
      </motion.div>
    </motion.div>
  );
};

export default Deer;