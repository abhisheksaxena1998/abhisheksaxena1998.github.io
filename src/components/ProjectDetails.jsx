import { Modal } from "antd";
import { Card } from "antd";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const { Meta } = Card;
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
  );
};
export default ProjectDetails;
