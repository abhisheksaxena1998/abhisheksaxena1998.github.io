import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

// Container animation variants
const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1, // Increased delay before starting child animations
      staggerChildren: 0.8, // Increased stagger delay between each card
    },
  },
};

// Item animation variants for individual achievement cards
const item = {
  hidden: { y: 40, opacity: 0 }, // Increased initial offset
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Slower animation for each item
      ease: "easeOut", // Smooth easing for a polished feel
    },
  },
};

// AchievementCard component
const AchievementCard = React.memo(
  ({
    index,
    testimonial,
    image,
    event,
    repo_url,
    redirect_url,
    forks,
    stars,
    visitors,
    points,
    isMobile,
    award_text,
    award_link,
  }) => (
    <motion.div
      variants={item} // Use `item` variants for individual cards
      className="bg-black-200 p-10 rounded-3xl xs:w-[] w-full"
    >
      <p className="text-white font-black text-[40px]">{event}</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        {award_text && (
          <a href={award_link} target="_blank" rel="noopener noreferrer">
            <div className="text-white tracking-wider text-[18px] mt-2">
              <p className="award-text">{award_text}</p>
            </div>
          </a>
        )}

        <div className="mt-7 flex justify-between items-center gap-1 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="flex-4 flex flex-col px-3 py-1 gap-5">
            {points &&
              points.map((point) => (
                <p className="mt-1 text-secondary text-[18px]" key={point}>
                  <span className="blue-text-gradient">●</span>
                  {point}
                </p>
              ))}

            {repo_url && (
              <>
                <a
                  href={redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    src={repo_url}
                    alt={`feedback_by-${index}`}
                    className="w-[20rem]"
                  />
                </a>
                <span className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">
                    <a
                      href={redirect_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository Statistics:
                      <p className="flex flex-row py-4">
                        {visitors && (
                          <img src={visitors} alt="github visitors" />
                        )}
                        {stars && <img src={stars} alt="github stars" />}
                        {forks && <img src={forks} alt="github forks" />}
                      </p>
                    </a>
                  </span>
                </span>
              </>
            )}
          </div>

          <img
            loading="lazy"
            src={image}
            alt={`feedback_by-${index}`}
            className="w-[15rem] h-[15rem] rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
);

// Achievements component
const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = window.innerWidth < 768;

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`} ref={ref}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>ACHIEVEMENTS.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${
          !isMobile && styles.paddingX
        } flex flex-wrap gap-7`}
      >
        <motion.div
          variants={container} // Apply container variants here
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-7"
        >
          {testimonials.map((testimonial, index) => (
            <AchievementCard
              key={testimonial.event}
              index={index}
              isMobile={isMobile}
              {...testimonial}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
