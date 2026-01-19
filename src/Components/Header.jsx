import FancyButton from "./FancyButton";
import resume from "../assets/Muhammad Nameer-FullStack-Software Engineer-MERN.pdf";

import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import HeaderDrawer from "./HeaderDrawer";

const AnimatedHamburgerButton = ({ open }) => {
  const [active, setActive] = useState(open);
  useEffect(() => {
    setActive(open);
  }, [open]);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-12 w-12  bg-black transition-colors hover:bg-black"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-3 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Header = () => {
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(!open);
  };
  return (
    <>
      <div
        id="top"
        className="max-w-7xl mx-auto p-3 flex justify-between gap-3 header"
      >
        <div className="nav-logo text-black-700 font-semibold text-xl flex-1 items-center flex">
          Muhammad Nameer.
        </div>
        <div className="nav-items flex gap-6 items-center flex-1 justify-center font-semibold">
          <div className=" cursor-pointer">
            <a href="#skills">Skills</a>
          </div>
          <div className=" cursor-pointer">
            {" "}
            <a href="#experience"> Experience</a>
          </div>
          <div className=" cursor-pointer">
            {" "}
            <a href="#work">Work</a>
          </div>
          <div className=" cursor-pointer">
            {" "}
            <a href="#achievements">Achievements</a>
          </div>
          <div className=" cursor-pointer">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="flex-1 justify-end flex gap-3 items-center">
          <a href={resume} target="_blank" download>
            <div className="resumeButton">
              <FancyButton />
            </div>
          </a>
          <div className="burgerButton" onClick={handleOpen}>
            <AnimatedHamburgerButton open={open} />
          </div>
        </div>
      </div>
      <HeaderDrawer open={open} handleOpen={handleOpen} />
    </>
  );
};

export default Header;
