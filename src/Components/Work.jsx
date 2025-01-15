import Project from "./Project";
import realEstate from "../assets/images/realestate.webp";
import greener from "../assets/images/greener1.webp";
import artizia from "../assets/images/ARTIZIA.webp";
import pumpkin from "../assets/images/pumpkin.webp";
import dashboard from "../assets/images/DASHBOARD-UI.webp";
import tradepedia from "../assets/images/TRADEPEDIA.webp";
import pmbotics from "../assets/images/PMBOTCS.webp";
import tfc from "../assets/images/tfc1.webp";
import zeroswap from "../assets/images/zeroswap.webp";
import newsmonkey from "../assets/images/NEWSMONKEY.webp";
import nuala from "../assets/images/NUALA.webp";
import noorimission from "../assets/images/noorimission1.webp";
import bytemates from "../assets/images/BYTE.webp";
import thenic from "../assets/images/thenic1.webp";
import encirkel from "../assets/images/ENCIRKEL.webp";
import noorigd from "../assets/images/NOORIGD.webp";
import bytematesgd from "../assets/images/BYTEMATESGD.webp";
import pimsgd from "../assets/images/PIMSGD.webp";
import gci from "../assets/images/gci.webp";
import { useEffect, useState } from "react";
import HeadingStyle1 from "./HeadingStyleBlack";
const projectsArray = [
  {
    category: "web",
    image: pumpkin,
    title: "Pumpkin DApp",
    description:
      "alpha.pumpkin.fun is a Web3 DApp built on Solana blockchain, The purpose of this project is to facililate web3 users to create their meme coins through our launchpad",
    link: "https://alpha.pumpkin.fun/",
  },
  {
    category: "web",
    image: greener,
    title: "Greener Pakistan",
    description:
      "Greener Pakistan is a group of solar energy experts offering a wide range of solar energy solutions, including underground cabling services. I developed their website using React JS, SCSS, and Framer Motion.",
    link: "https://greener.com.pk/",
  },

  {
    category: "web",
    image: tradepedia,
    title: "Tradepedia",
    description:
      "Tradepedia is a company that provides guidance on trading. During my job, I worked on building part of their website, which includes exciting features like RTL (right-to-left) support and language translation.",

    link: "https://tradepedia.io/",
  },
  {
    category: "web",
    image: artizia,
    title: "Artizia.io",
    description:
      "Artizia.io is an NFT marketplace dApp where users can create, buy, sell, or auction NFTs. I had the opportunity to work on this website while at Pluton Ltd. It was a great experience integrating our dApp with blockchain on the frontend.",

    // link: "http://artizia.io/",
  },
  {
    category: "web",
    image: realEstate,
    title: "Real Estate App",
    description:
      "As I transition from frontend to full stack development, I believe in learning by doing. To hone my skills, I followed a YouTube tutorial and created a stunning full stack real estate website using the MERN stack, Tailwind css, and Firebase.",

    link: "https://city-estate.onrender.com/",
  },
  {
    category: "web",
    image: bytemates,
    title: "Bytemates",
    description:
      "Bytemates is a software agency, and I had the honor of developing a beautiful website for them. I utilized WordPress, Elementor, Slider Revolution, and my Adobe Photoshop skills to create the site. Additionally, I designed numerous social media posters for the agency.",
    link: "https://bytemates.com/",
  },
  {
    category: "web",
    image: zeroswap,
    title: "Zero Swap",
    description:
      "ZeroSwap is a dapp which is used for exchanging tokens with the concept of self reapaying by the time. I Built this product's frontend using React Js and Scss. During development of this product, I learnt many things about web3 and learnt how to integrate smart contracts with our frontend dapps",

    // link: "https://swap.zeroliquid.xyz/",
  },
  {
    category: "web",
    image: thenic,
    title: "NORRBOTTENS ISLAMISKA CENTER",
    description:
      "Norrbottens Islamiska Center represents a Muslim community living in the northern county of Sweden, Norrbotten., they are raising funds for the new project of builting a masjid in sweden, I have crafted thier website using Wordpress, Elementor.",

    link: "https://thenic.se/",
  },
  {
    category: "web",
    image: pmbotics,
    title: "PMBOTICS",
    description:
      "PMBOTICS is my final year project during which i created during last two semesters of my graduation, This project was proposed to solve the hurdles and difficulties of universities which they face while managing student's FYP's. This project handles all stages of a FYP from initiating a project, managing milestones, creating sprint, creating tasks and awarding scores to students. to use this system as a supervisor use these credentials, username: pmboticss@gmail.com, password:admin-123",

    link: "https://pmbotics.netlify.app/",
  },
  {
    category: "web",
    image: encirkel,
    title: "Encirkel",
    description:
      "Encirkel is a Digital Marketing agency based in sweden, They provide services for website developement, Graphics designig, branding and social media marketing globally, They always trust me for their every project related to web development.",
  },
  {
    category: "web",
    image: nuala,
    title: "Transitions Holistic Wellbeing",
    description:
      "Nuala Scott is a Certified TRE® (Tension & Trauma Releasing Exercises) Provider Health & Wellbeing Practitioner, I developed a website for thier business!",
    // link: "https://transitionsholisticwellbeing.com/",
  },
  {
    category: "web",
    image: noorimission,
    title: "Noori Mission",
    description:
      "Noori Mission is a platform for teaching Quranic education globally via online platforms, I built their website so they could reach more students through their online presence.",
    // link: "https://noorimission.net/",
  },
  {
    category: "web",
    image: tfc,
    title: "TFM",
    description:
      "TFM is a company, providing CCTV cameras, fire fighting solutions and emergency alarm solutions to their clients, I built their website using HTML, CSS and Javascript",
    link: "https://nameerfarooq.github.io/TFC-Project3/",
  },
  {
    category: "web",
    image: gci,
    title: "Global Computer Institute",
    description:
      "Global Computer Institute is a reputed institute in area, I was thier student in 2018 and completed CIT course for there, When I learned Web development from SMIT, I thought of developing a website for my older institute so i get hands on practice of developing websites",
    link: "https://nameerfarooq.github.io/GlobalComputerInstitute/",
  },
  {
    category: "web",
    image: newsmonkey,
    title: "News Monkey",
    description:
      "News Monkey is one of my favourite project, I built this when i was learing react Js, I loved to make components, render them conditionaly and used NEWS API for free news results from all over the world",
    link: "https://github.com/nameerfarooq/newsMonkey",
  },
  {
    category: "web",
    image: dashboard,
    title: "Reservations Dashboard UI",
    description: "This was a very simple project, I made it for an interview",
    link: "https://reservation-dashboard.netlify.app/",
  },
  {
    category: "design",
    image: bytematesgd,
    title: "Designing for ByteMates",
    description:
      "Bytemates is my recurring client, they always trust me weather they want a website or social media posters for their pages, I sometime design posters for them",
    link: "https://www.facebook.com/bytemates/",
  },
  {
    category: "design",
    image: pimsgd,
    title: "Designing for PIMS",
    description:
      "PIMS Coaching center & computer institute, I was running this startup as a co-founder with my some friends, and I loved to design promotional posters for our startup",
    link: "https://www.facebook.com/pimscoachingcentre",
  },
  {
    category: "design",
    image: noorigd,
    title: "Designing for Noori Mission",
    description:
      "Noori Mission is an online Quran teaching Academy, I was working with them as a website developer and also used to create social media posters for their promotion.",
    link: "https://www.facebook.com/profile.php?id=100086843539445",
  },
];

const Work = () => {
  const [showAll, setShowALl] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(projectsArray);
  useEffect(() => {
    if (activeTab === 0) {
      setFilteredProjects(projectsArray);
    } else if (activeTab === 1) {
      let filtered = projectsArray.filter((proj) => proj.category === "web");
      setFilteredProjects(filtered);
    } else if (activeTab === 2) {
      let filtered = projectsArray.filter((proj) => proj.category === "design");
      setFilteredProjects(filtered);
    }
  }, [activeTab]);
  return (
    <div id="work" className="mx-auto my-12 mt-32 bg-black py-24 text-white">
      <HeadingStyle1 black={false} text1={"My"} text2={"Work"} />

      <div className="text-xs sm:text-xl p-2 flex flex-wrap bg-white text-black w-max mx-auto">
        <div
          onClick={() => setActiveTab(0)}
          className={` py-2  px-2 sm:px-4  cursor-pointer ${
            activeTab === 0 && "bg-black text-white"
          }`}
        >
          All
        </div>
        <div
          onClick={() => setActiveTab(1)}
          className={` py-2 px-2 sm:px-4  cursor-pointer ${
            activeTab === 1 && "bg-black text-white"
          }`}
        >
          Web Development
        </div>
        <div
          onClick={() => setActiveTab(2)}
          className={`py-2 px-2 sm:px-4  cursor-pointer ${
            activeTab === 2 && "bg-black text-white"
          }`}
        >
          Graphics Designing
        </div>
      </div>
      <br />
      <br />
      <br />
      {filteredProjects.length > 0 &&
        (showAll ? filteredProjects : filteredProjects.slice(0, 6)).map(
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
        {filteredProjects.length > 6 && (
          <button
            onClick={() => setShowALl(!showAll)}
            className="border py-2 px-4 mx-auto min-w-max bg-white text-black hover:scale-110 transition-all duration-300 ease-in-out "
          >
            {showAll ? "Hide some" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
