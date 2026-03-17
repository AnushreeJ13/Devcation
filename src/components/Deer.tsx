import { motion, useScroll, useTransform } from "framer-motion";

const Deer: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Move deer horizontally as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], [-200, 800]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: "60%",
        x,
        zIndex: 5,
        fontSize: "50px"
      }}
    >
      🦌
    </motion.div>
  );
};

export default Deer;