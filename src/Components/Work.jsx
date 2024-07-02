import Project from "./Project";
import realEstate from "../assets/images/a.jpeg";
import greener from "../assets/images/greener.webp";
import artizia from "../assets/images/ARTIZIA.webp";
import dashboard from "../assets/images/DASHBOARD-UI.webp";
import tradepedia from "../assets/images/TRADEPEDIA.webp";
import pmbotics from "../assets/images/PMBOTCS.webp";
import tfc from "../assets/images/tfc.webp";
import zeroswap from "../assets/images/zeroswap.webp";
import newsmonkey from "../assets/images/NEWSMONKEY.webp";
import nuala from "../assets/images/NUALA.webp";
import noorimission from "../assets/images/noorimission.webp";
import bytemates from "../assets/images/BYTE.webp";
import thenic from "../assets/images/thenic.webp";
import encirkel from "../assets/images/ENCIRKEL.webp";
import { useState } from "react";
const projectsArray = [
  {
    image: bytemates,
    title: "Bytemates",
    description:
      "Bytemates is a software agency, and I had the honor of developing a beautiful website for them. I utilized WordPress, Elementor, Slider Revolution, and my Adobe Photoshop skills to create the site. Additionally, I designed numerous social media posters for the agency.",
    link: "https://bytemates.com/",
  },
  {
    image: greener,
    title: "Greener Pakistan",
    description:
      "Greener Pakistan is a group of solar energy experts offering a wide range of solar energy solutions, including underground cabling services. I developed their website using React JS, SCSS, and Framer Motion.",
    link: "https://greener.com.pk/",
  },
  {
    image: realEstate,
    title: "Real Estate App",
    description:
      "As I transition from frontend to full stack development, I believe in learning by doing. To hone my skills, I followed a YouTube tutorial and created a stunning full stack real estate website using the MERN stack, Tailwind css, and Firebase.",

    link: "https://city-estate.onrender.com/",
  },

  {
    image: artizia,
    title: "Artizia.io",
    description:
      "Artizia.io is an NFT marketplace dApp where users can create, buy, sell, or auction NFTs. I had the opportunity to work on this website while at Pluton Ltd. It was a great experience integrating our dApp with blockchain on the frontend.",

    link: "http://artizia.io/",
  },
  {
    image: tradepedia,
    title: "Tradepedia",
    description:
      "Tradepedia is a company that provides guidance on trading. During my job, I worked on building part of their website, which includes exciting features like RTL (right-to-left) support and language translation.",

    link: "https://tradepedia.io/",
  },
  {
    image: zeroswap,
    title: "Zero Swap",
    description:
      "ZeroSwap is a dapp which is used for exchanging tokens with the concept of self reapaying by the time. I Built this product's frontend using React Js and Scss. During development of this product, I learnt many things about web3 and learnt how to integrate smart contracts with our frontend dapps",

    link: "https://swap.zeroliquid.xyz/",
  },
  {
    image: thenic,
    title: "NORRBOTTENS ISLAMISKA CENTER",
    description:
      "Norrbottens Islamiska Center represents a Muslim community living in the northern county of Sweden, Norrbotten., they are raising funds for the new project of builting a masjid in sweden, I have crafted thier website using Wordpress, Elementor.",

    link: "https://thenic.se/",
  },
  {
    image: pmbotics,
    title: "PMBOTICS",
    description:
      "PMBOTICS is my final year project during which i created during last two semesters of my graduation, This project was proposed to solve the hurdles and difficulties of universities which they face while managing student's FYP's. This project handles all stages of a FYP from initiating a project, managing milestones, creating sprint, creating tasks and awarding scores to students. to use this system as a supervisor use these credentials, username: nameerfaooq18@gmail.com, password:abcabcabc",

    link: "https://pmbotics.netlify.app/",
  },
  {
    image: encirkel,
    title: "Encirkel",
    description:
      "Encirkel is a Digital Marketing agency based in sweden, They provide services for website developement, Graphics designig, branding and social media marketing globally, They always trust me for their every project related to web development.",
  },
  {
    image: nuala,
    title: "Transitions Holistic Wellbeing",
    description:
      "Nuala Scott is a Certified TRE® (Tension & Trauma Releasing Exercises) Provider Health & Wellbeing Practitioner, I developed a website for thier business!",
    link: "https://transitionsholisticwellbeing.com/",
  },
  {
    image: noorimission,
    title: "Noori Mission",
    description:
      "Noori Mission is a platform for teaching Quranic education globally via online platforms, I built their website so they could reach more students through their online presence.",
  },
  {
    image: tfc,
    title: "TFC",
    description:
      "TFC is a company, providing CCTV cameras, fire fighting solutions and emergency alarm solutions to their clients, I built their website using HTML, CSS and Javascript",
    link: "https://nameerfarooq.github.io/TFC-Project3/",
  },
  {
    image: newsmonkey,
    title: "News Monkey",
    description:
      "News Monkey is one of my favourite project, I built this when i was learing react Js, I loved to make components, render them conditionaly and used NEWS API for free news results from all over the world",
    link: "https://github.com/nameerfarooq/newsMonkey",
  },
  {
    image: dashboard,
    title: "Reservations Dashboard UI",
    description: "This was a very simple project, I made it for an interview",
    link: "https://reservation-dashboard.netlify.app/",
  },
];
const Work = () => {
  const [showAll, setShowALl] = useState(false);
  return (
    <div className="mx-auto my-12 mt-32 bg-black py-24 text-white">
      <p className="text-4xl mt-16 mb-32 text-center text-white">
        My <span className="font-extrabold">Work</span>
      </p>
      {projectsArray.length > 0 &&
        (showAll ? projectsArray : projectsArray.slice(0, 6)).map(
          (project, id) => (
            <Project
              data={project}
              key={id}
              id={id + 1}
              reversed={id % 2 !== 0}
            />
          )
        )}
      <div className="flex justify-center">
        <button
          onClick={() => setShowALl(!showAll)}
          className="border rounded-full py-2 px-4 mx-auto min-w-max bg-white text-black hover:scale-110 transition-all duration-300 ease-in-out "
        >
          {showAll ? "Hide some" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Work;
