import React, { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { Spin } from "antd";
import "../index.css";

const Modal = lazy(() =>
  import("antd").then((module) => ({ default: module.Modal }))
);
const Card = lazy(() =>
  import("antd").then((module) => ({ default: module.Card }))
);
const Meta = lazy(() =>
  import("antd").then((module) => ({ default: module.Card.Meta }))
);

const ProjectDetails = ({
  isDetailsCardExpanded,
  setIsDetailsCardExpanded,
  detailed_content,
  isMobile,
  source_code_link,
  image,
}) => {
  const [isCoverImageLoaded, setIsCoverImageLoaded] = useState(false);
  const [isContentImageLoaded, setIsContentImageLoaded] = useState(false);
  const [isResourceLoaded, setIsresourceLoaded] = useState(false);
  const handleCancel = () => {
    setIsDetailsCardExpanded(false);
  };
  const handleCoverImageLoad = () => {
    setIsCoverImageLoaded(true);
  };
  const handleContentImageLoad = () => {
    setIsContentImageLoaded(true);
  };
  const handleResourseImageLoad = () => {
    setIsresourceLoaded(true);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <Modal
          title={detailed_content.title}
          open={isDetailsCardExpanded}
          onCancel={handleCancel}
          footer={null}
          width={isMobile ? "100%" : "69%"}
          bodyStyle={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 250px)",
            overflowX: "auto",
          }}
        >
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <>
                {!isCoverImageLoaded && (
                  <Spin size="large" className="mt-28 mb-28">
                    <div className="content" />
                  </Spin>
                )}
                <img
                  className="shadow-lg"
                  loading="lazy"
                  alt="example"
                  src={image}
                  style={{
                    padding: isMobile ? "1px" : "0.24rem",
                    display: isCoverImageLoaded ? {} : { display: "none" },
                  }}
                  onLoad={handleCoverImageLoad}
                />
              </>
            }
          >
            {detailed_content?.demonstration?.has_youtube_content ? (
              <>
                {" "}
                <div
                  className="embed-responsive embed-responsive-16by9"
                  style={{ padding: 0 }}
                >
                  <div
                    className="embed-responsive embed-responsive-16by9"
                    style={{ padding: 0 }}
                  >
                    <iframe
                      className="w-full aspect-video rounded-lg shadow-lg"
                      width={isMobile ? "100%" : "100%"}
                      height={isMobile ? "200" : "580"}
                      src={detailed_content?.demonstration?.youtube_embed_link}
                      title={detailed_content?.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-screen-lg mx-auto pb-10 flex justify-center mt-4">
                {detailed_content?.image && !isContentImageLoaded && (
                  <Spin size="large" className="mt-28 mb-28">
                    <div className="content" />
                  </Spin>
                )}

                {detailed_content?.image && (
                  <img
                    className="shadow-lg"
                    loading="lazy"
                    alt="example"
                    src={detailed_content?.image}
                    style={{
                      padding: isMobile ? "0rem" : "0.125rem",
                      display: isContentImageLoaded ? {} : { display: "none" },
                    }}
                    onLoad={handleContentImageLoad}
                  />
                )}
              </div>
            )}
            <a href={source_code_link}>
              <Meta
                title={detailed_content?.image_text}
                description={source_code_link}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              />
            </a>
            <div className="mt-5">
              <span className="mt-4 text-black font-medium text-[16px] text-justify">
                <p className="p-1">
                  Description : {detailed_content.description}
                </p>
              </span>
            </div>
            {detailed_content?.demonstration?.resource && !isResourceLoaded && (
              <Spin size="large" className="mt-28 mb-28">
                <div className="content" />
              </Spin>
            )}
            {detailed_content?.demonstration?.resource && (
              <img
                className="shadow-lg"
                loading="lazy"
                alt="example"
                src={detailed_content?.demonstration?.resource}
                style={{
                  padding: isMobile ? "0rem" : "0.125rem",
                }}
                onLoad={handleResourseImageLoad}
              />
            )}
            <Meta
              title={detailed_content?.demonstration?.title}
              description={detailed_content?.demonstration?.description}
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                display: isResourceLoaded ? {} : { display: "none" },
              }}
            />
          </Card>
        </Modal>
      </motion.div>
    </Suspense>
  );
};
export default ProjectDetails;
