import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const AchievementCard = ({
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
    variants={!isMobile && fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[] w-full"
  >
    <p className="text-white font-black text-[40px]">{event}</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      {award_text && (
        <a href={award_link}>
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
              <a href={redirect_url}>
                <img
                  src={repo_url}
                  alt={`feedback_by-${index}`}
                  className="w-[20rem]"
                />
              </a>
              <span className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">
                  <a href={redirect_url}>
                    Repository Statistics:
                    <p className="flex flex-row py-4">
                      {visitors && <img src={visitors} alt="github visitors" />}
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
          src={image}
          alt={`feedback_by-${index}`}
          className="w-[15rem] h-[15rem] rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={!isMobile && textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>ACHIEVEMENTS.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <AchievementCard
            key={testimonial.event}
            index={index}
            isMobile={isMobile}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
