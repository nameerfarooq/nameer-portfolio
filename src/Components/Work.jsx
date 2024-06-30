import Project from "./Project";
import imageforProject from "../assets/images/a.jpeg";
import { useState } from "react";
const projectsArray = [
  {
    image: imageforProject,
    title: "Bytemates",
    description:
      "Bytemates is a software agency, and I had the honor of developing a beautiful website for them. I utilized WordPress, Elementor, Slider Revolution, and my Adobe Photoshop skills to create the site. Additionally, I designed numerous social media posters for the agency.",
    link: "https://bytemates.com/",
  },
  {
    image: imageforProject,
    title: "Greener Pakistan",
    description:
      "Greener Pakistan is a group of solar energy experts offering a wide range of solar energy solutions, including underground cabling services. I developed their website using React JS, SCSS, and Framer Motion.",
    link: "https://greener.com.pk/",
  },
  {
    image: imageforProject,
    title: "Real Estate App",
    description:
      "As I transition from frontend to full stack development, I believe in learning by doing. To hone my skills, I followed a YouTube tutorial and created a stunning full stack real estate website using the MERN stack, Tailwind css, and Firebase.",

    link: "https://city-estate.onrender.com/",
  },

  {
    image: imageforProject,
    title: "Artizia.io",
    description:
      "Artizia.io is an NFT marketplace dApp where users can create, buy, sell, or auction NFTs. I had the opportunity to work on this website while at Pluton Ltd. It was a great experience integrating our dApp with blockchain on the frontend.",

    link: "http://artizia.io/",
  },
  {
    image: imageforProject,
    title: "Tradepedia",
    description:
      "Tradepedia is a company that provides guidance on trading. During my job, I worked on building part of their website, which includes exciting features like RTL (right-to-left) support and language translation.",

    link: "https://tradepedia.io/",
  },
  {
    image: imageforProject,
    title: "Zero Swap",
    description:
      "ZeroSwap is a dapp which is used for exchanging tokens with the concept of self reapaying over time. I Built this products frontend using React Js and Scss. During development of this product, I learnt many things about web3 and learn how to integrate smart contracts with our frontend dapps",

    link: "https://swap.zeroliquid.xyz/",
  },
  {
    image: imageforProject,
    title: "The NIC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "https://thenic.se/",
  },
  {
    image: imageforProject,
    title: "FYP Manager",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "https://thenic.se/",
  },
  {
    image: imageforProject,
    title: "Encirkel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "Noori Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "TFC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "News Monkey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "Reservations Dashboard UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
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
