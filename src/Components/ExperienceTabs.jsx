/* eslint-disable react/no-unescaped-entities */
import { FiBarChart, FiBell, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

import background from "../assets/images/background.webp";
const ExperienceTabs = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-black">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-7xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-semibold rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xs sm:text-xl font-light">
          {title}
        </span>
        <div className="w-6 lg:w-full aspect-square bg-black text-white grid place-items-center">
          {Icon}
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "black",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white w-full"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceTabs;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "max-content",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const desc1 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">
      Software Engineer @Hashcore
    </div>
    <div className="bg-transparent border-2 border-white  px-3 py-2 my-3 max-w-max">
      Nov 2023 - Present
    </div>
    <div className="text-slate-400 ">
      I develop blockchain-based products using the MERN stack and Redux, create
      frontend dApps, and manage project repositories and deployments while
      continuously enhancing my blockchain and full stack development skills.
    </div>
  </div>
);

const desc2 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">
      MERN Stack trainer @UIT University
    </div>
    <div className="bg-transparent border-2 border-white  px-3 py-2 my-3 max-w-max">
      Nov 2024 - Present
    </div>
    <div className="text-slate-400 ">
      Teaching MERN Stack developement course in weekend classes at UIT University
    </div>
  </div>
);
const desc4 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">
      Frontend Developer @Stallyons
    </div>
    <div className="bg-transparent border-2 border-white  px-3 py-2 my-3 max-w-max">
      Sep 2023 - Nov 2023
    </div>
    <div className="text-slate-400 ">
      Created complex frontend applications using React.js and Redux, including
      social media platforms, and had experience working with Webflow and
      WordPress.
    </div>
  </div>
);
const desc6 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">
      Frontend Developer @Pluton.ltd
    </div>
    <div className="bg-transparent border-2 border-white  px-3 py-2 my-3 max-w-max">
      May 2023 - Sep 2023
    </div>
    <div className="text-slate-400 ">
      Created complex frontend applications using React.js and Redux, including
      frontend dapps for blockchain products, and utilized my WordPress skills
      too.
    </div>
  </div>
);
const desc7 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">
      Frontend Developer @TheFourC's
    </div>
    <div className="bg-transparent border-2 border-white  px-3 py-2 my-3 max-w-max">
      Oct 2021 - Oct 2022
    </div>
    <div className="text-slate-400 ">
      Created multiple websites for clients nationally and internationally using
      React and wordPress
    </div>
  </div>
);
const desc3 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">Freelance Developer</div>
    <div className="bg-transparent border-2 border-white  px-3 py-2 my-3 max-w-max">
      Oct 2020 - Present
    </div>
    <div className="text-slate-400 ">
      Satisfied multiple clients from all over the globe with my expertise in
      Full Stack Development using MERN Stack with modern development tools. I
      love providing solutions to my client's problems.
    </div>
  </div>
);
const desc5 = (
  <div className=" bg-black text-white p-3 w-full mt-2 mb-2">
    <div className="text-xl sm:text-2xl font-semibold">
      IT Trainer @PIMS Computer Institute
    </div>
    <div className="bg-transparent border-2 border-white px-3 py-2 my-3 max-w-max">
      May 2022 - Dec 2023
    </div>
    <div className="text-slate-400 ">
      Trained numerous tech enthusiasts in IT skills ranging from basic to
      advanced, including MS Office, Photoshop, WordPress, web development,
      freelancing, and more.
    </div>
  </div>
);

const items = [
  {
    id: 1,
    title: "Software Engineer @Hashcore",
    Icon: 1,
    imgSrc: background,
    description: desc1,
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "MERN Trainer @UIT University",
    Icon: FiPlay,
    imgSrc: background,
    description: desc2,
  },
  {
    id: 3,
    title: "Freelance Developer",
    Icon: FiPlay,
    imgSrc: background,
    description: desc3,
  },
  {
    id: 4,
    title: "Frontend Developer @Stallyons",
    Icon: FiPlay,
    imgSrc: background,
    description: desc4,
  },
  {
    id: 5,
    title: "IT Trainer @PIMS",
    Icon: FiPlay,
    imgSrc: background,
    description: desc5,
  },
  {
    id: 6,
    title: "Frontend Developer @Pluton.ltd",
    Icon: FiBell,
    imgSrc: background,
    description: desc6,
  },
  {
    id: 7,
    title: "Frontend Developer @TheFourC's",
    Icon: FiBarChart,
    imgSrc: background,
    description: desc7,
  },
];
