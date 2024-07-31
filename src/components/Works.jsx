import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { container, fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { ExpandOutlined } from "@ant-design/icons";
import { Tag, Spin } from "antd";
import ProjectDetails from "./ProjectDetails";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile,
  detailed_content,
  readme_link,
}) => {
  const [isDetailsCardExpanded, setIsDetailsCardExpanded] = useState(false);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const handleThumbnailLoad = () => {
    setIsThumbnailLoaded(true);
  };
  return (
    <motion.div variants={!isMobile} whileHover={{ scale: 1.05 }}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-quaternary p-5 rounded-2xl sm:w-[360px] w-full gradient-border"
      >
        {isDetailsCardExpanded && (
          <ProjectDetails
            isDetailsCardExpanded={isDetailsCardExpanded}
            setIsDetailsCardExpanded={setIsDetailsCardExpanded}
            detailed_content={detailed_content}
            isMobile={isMobile}
            source_code_link={source_code_link}
            image={image}
          />
        )}
        <div className="relative w-full h-[230px]">
          {!isThumbnailLoaded && (
            <Spin
              size="large"
              className="mt-28 mb-28 bg-white loader-antd"
              indicator={antIcon}
            >
              <div className="content" />
            </Spin>
          )}
          <img
            loading="lazy"
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            style={{
              display: isThumbnailLoaded ? {} : { display: "none" },
            }}
            onLoad={handleThumbnailLoad}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => setIsDetailsCardExpanded(true)}
              className="purple-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-white"
            >
              <ExpandOutlined
                className="expand-icon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                loading="lazy"
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain expand-icon"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {readme_link && (
            <a href={readme_link}>
              <Tag bordered={true} color="purple">
                README.md
              </Tag>
            </a>
          )}
          <p className="mt-2 text-secondary text-[14px] text-justify">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = window.innerWidth < 768;

  return (
    <div ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={!isMobile && fadeIn("", "", 0.1, 1)}
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            isMobile={isMobile}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
