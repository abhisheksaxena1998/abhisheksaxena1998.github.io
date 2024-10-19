import React from "react";
import { motion } from "framer-motion";

const AnimatedWords = ({ text, styles, delayOffset = 0 }) => {
  const words = text.split(" ");

  // Variants for Container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05 * i + delayOffset,
      },
    }),
  };

  // Variants for each word
  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 7,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap"
      style={styles}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: "8px", display: "inline-block" }}
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;
