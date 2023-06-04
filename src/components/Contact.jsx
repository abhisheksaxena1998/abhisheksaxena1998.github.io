import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ReCAPTCHA from "react-google-recaptcha";
import { notification } from "antd";

const Context = React.createContext({
  name: "Default",
});
const Contact = () => {
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [validToken, setValidToken] = useState(null);
  const formRef = useRef();
  const captchaRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (type, placement, message, text) => {
    api[type]({
      message: `${message}`,
      description: `${text}!`,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    let token = captchaRef.current.getValue();
    let valid_token = verifyToken(token);
    setValidToken(valid_token);
  }, [formRef, captchaRef?.current?.getValue(), form]);

  const verifyToken = (token) => {
    if (token) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();
    let valid_token = verifyToken(token);
    setValidToken(valid_token);

    if (validToken === true) {
      setSuccessMsg("Hurray!! you have submitted the form");
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Abhishek",
            from_email: form.email,
            to_email: "developerabhe@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);

            setForm({
              name: "",
              email: "",
              message: "",
            });

            openNotification(
              "success",
              "topRight",
              "Thank you.",
              " I will get back to you as soon as possible."
            );
          },
          () => {
            setLoading(false);
            openNotification(
              "error",
              "topRight",
              "Something went wrong!",
              "Please try again later!"
            );
          }
        );
    } else {
      setErrorMsg(" Sorry!! Verify you are not a bot");
      setLoading(false);
      openNotification(
        "warning",
        "topRight",
        "Complete captcha",
        "Please select 'I'm not a robot'"
      );
    }
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col py-4 px-0">
              <ReCAPTCHA
                className="recaptcha"
                theme="dark"
                sitekey={import.meta.env.VITE_APP_SITE_KEY}
                ref={captchaRef}
                onChange={(value) => setValidToken(value)}
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </Context.Provider>
  );
};

export default SectionWrapper(Contact, "contact");
