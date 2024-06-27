import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import AnimatedWords from "./AnimatedWords";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2  mr-10"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.02 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain"
            />
          </motion.div>
          <motion.div
            className="text-white text-[18px] font-bold cursor-pointer flex"
            style={{ marginRight: "2rem" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <AnimatedWords
                text="Abhishek Saxena"
                styles={{
                  overflow: "hidden",
                  display: "flex",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              />
            </motion.div>
            <motion.div className="sm:block hidden" variants={item}>
              <AnimatedWords
                text=" | Software Engineer"
                styles={{
                  overflow: "hidden",
                  display: "flex",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              />
            </motion.div>
          </motion.div>
        </Link>

        <motion.ul
          className="list-none hidden sm:flex flex-row gap-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
              variants={item}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            loading="lazy"
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <motion.ul
              className="list-none flex justify-end items-start flex-1 flex-col gap-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  variants={item}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
