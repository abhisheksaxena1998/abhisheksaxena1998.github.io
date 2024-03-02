import React from "react";
import { motion } from "framer-motion";

const AnimatedWords = ({ text, styles, delayOffset }) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: !delayOffset ? 0.08 * i : 0.08 * i + 1.1,
      },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 5,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 5,
      },
    },
  };

  return (
    <motion.div
      className="text-white text-[18px] font-bold cursor-pointer flex"
      style={styles}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    >
      {words.map((word, index) => (
        <motion.span
          style={{ marginRight: "5px", display: "inline-block" }}
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: index * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;
