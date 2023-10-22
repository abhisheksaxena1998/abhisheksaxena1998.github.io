import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

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
  const handleCancel = () => {
    setIsDetailsCardExpanded(false);
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
              <img
                loading="lazy"
                alt="example"
                src={image}
                style={{ padding: isMobile ? "1px" : "0.24rem" }}
              />
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
                      frameBorder="1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-screen-lg mx-auto pb-10 flex justify-center">
                {detailed_content?.image && (
                  <img
                    loading="lazy"
                    alt="example"
                    src={detailed_content?.image}
                    style={{
                      padding: isMobile ? "0rem" : "0.125rem",
                    }}
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
            {detailed_content?.demonstration?.resource && (
              <img
                loading="lazy"
                alt="example"
                src={detailed_content?.demonstration?.resource}
                style={{
                  padding: isMobile ? "0rem" : "0.125rem",
                }}
              />
            )}
            <Meta
              title={detailed_content?.demonstration?.title}
              description={detailed_content?.demonstration?.description}
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            />
          </Card>
        </Modal>
      </motion.div>
    </Suspense>
  );
};
export default ProjectDetails;
