import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import AnimatedWords from "./AnimatedWords";

const Hero = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.8,
              type: "spring",
              stiffness: 10,
              damping: 10,
            }}
          >
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
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
            <span className="text-[#915EFF]">
              <AnimatedWords
                text="Abhishek "
                styles={{
                  color: "#915EFF",
                  fontWeight: 900,
                  fontSize: "40px",
                }}
                delayOffset={true}
              ></AnimatedWords>
            </span>
            <span className="text-[#915EFF]">
              <AnimatedWords
                text=" Saxena "
                styles={{
                  color: "#915EFF",
                  fontWeight: 900,
                  fontSize: "40px",
                }}
                delayOffset={true}
              ></AnimatedWords>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software Engineer <br className="sm:block hidden" />
            and I develop Fullstack web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
