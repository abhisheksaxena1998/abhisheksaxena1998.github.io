import React, { lazy, memo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
const ComputersCanvas = lazy(() => import("./canvas/Computers"));
const AnimatedWords = lazy(() => import("./AnimatedWords"));

const Hero = memo(({ isMobile }) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        (
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.75,
              type: "spring",
              stiffness: 2,
              damping: 4,
            }}
          >
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </motion.div>
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <AnimatedWords
              text=" Hi, I'm "
              styles={{
                fontWeight: 900,
                marginTop: "0.25rem",
                fontSize: "40px",
              }}
            ></AnimatedWords>
            <span
              className={isMobile ? "text-[#915EFF]" : "text-[#915EFF] mt-1"}
            >
              <AnimatedWords
                text="Abhishek "
                styles={{
                  color: "#6066EC",
                  fontWeight: 900,
                  fontSize: "40px",
                }}
                delayOffset={true}
              ></AnimatedWords>
            </span>
            <span
              className={isMobile ? "text-[#915EFF]" : "text-[#915EFF] mt-1"}
            >
              <AnimatedWords
                text=" Saxena "
                styles={{
                  color: "#6066EC",
                  fontWeight: 900,
                  fontSize: "40px",
                }}
                delayOffset={true}
              ></AnimatedWords>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software Engineer <br className="sm:block hidden" />
            turning ideas into
            <span className={`glow ${styles.heroSubText}`}>
              {" "}
              real life products.
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />)
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll button">
          <div className="animate-pulse w-[35px] h-[64px] rounded-3xl border-6 border-secondary flex justify-center items-start p-2 bg-transparent border border-gray-400">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="animate-pulse glow-dot w-3 h-3 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
});

export default Hero;
