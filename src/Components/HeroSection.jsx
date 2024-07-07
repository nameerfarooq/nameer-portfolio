import {
  FaBehance,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import shineblack from "../assets/icons/shineblack.png";
import shinewhite from "../assets/icons/shinewhite.png";
import hero from "../assets/hero.mp4";
import { TypeAnimation } from "react-type-animation";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex gap-5 items-center flex-wrap-reverse p-4 my-14">
        <div className="flex flex-col gap-8 flex-1">
          <div className="name flex flex-col gap-2">
            <div className="text-xl flex gap-2">
              Hello{" "}
              <img
                className="w-6 h-6"
                src="https://gifdb.com/images/high/waving-hand-black-and-white-erox5pacbap4ac1l.gif"
                alt=""
              />{" "}
              I'am{" "}
            </div>
            <div className="text-4xl font-extrabold cursor-pointer">
              Muhammad Nameer
            </div>
            <div className="text-4xl font-medium">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
              
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 30 }}
                style={{ display: "block", minHeight: "30px" }}
                omitDeletionAnimation={false}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="about text-zinc-500">
            Holding a BSCS degree from NED University, I specialize in frontend
            development and am now venturing into full stack capabilities. I
            thrive on creating exceptional digital experiences and am open to
            new freelance collaborations to showcase my expanding expertise.
          </div>
          <div className="socials flex gap-3 items-center">
            <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
              <a
                href="https://www.linkedin.com/in/muhammad-nameer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
              <a
                href="https://github.com/nameerfarooq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
              <a
                href="mailto:nameerfarooq18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaEnvelope />{" "}
              </a>
            </div>
            <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
              <a
                href="https://wa.me/+923352418380"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaWhatsapp />{" "}
              </a>
            </div>

            <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
              <a
                href="https://x.com/NameerFarooq18"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaXTwitter />
              </a>
            </div>

            <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
              <a
                href="https://www.behance.net/nameerfarooq?tracking_source=search_projects%7Cnameerfarooq"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaBehance />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-1 justify-center mx-auto">
          <video autoPlay loop muted>
            <source src={hero} type="video/mp4" />
          </video>
        </div>
      </div>
      <div>
        <Marquee className="border-y-2 border-black p-3 bg-black text-white  ">
          <p className="flex gap-2">
            <img width={20} src={shinewhite} alt="" /> HTML{" "}
            <img width={20} src={shinewhite} alt="" /> CSS{" "}
            <img width={20} src={shinewhite} alt="" /> SCSS{" "}
            <img width={20} src={shinewhite} alt="" /> TAILWIND CSS{" "}
            <img width={20} src={shinewhite} alt="" /> MATERIAL UI{" "}
            <img width={20} src={shinewhite} alt="" /> BOOTSTRAP
            <img width={20} src={shinewhite} alt="" /> FRAMER MOTION{" "}
            <img width={20} src={shinewhite} alt="" /> JAVASCRIPT{" "}
            <img width={20} src={shinewhite} alt="" /> ES6{" "}
            <img width={20} src={shinewhite} alt="" /> TYPESCRIPT{" "}
            <img width={20} src={shinewhite} alt="" /> PYTHON{" "}
            <img width={20} src={shinewhite} alt="" /> C#{" "}
            <img width={20} src={shinewhite} alt="" /> REACT JS{" "}
            <img width={20} src={shinewhite} alt="" /> NODE JS{" "}
            <img width={20} src={shinewhite} alt="" /> EXPRESS JS{" "}
            <img width={20} src={shinewhite} alt="" /> MONGO DB{" "}
            <img width={20} src={shinewhite} alt="" /> MONGOOSE
            <img width={20} src={shinewhite} alt="" /> REDUX TOOLKIT{" "}
            <img width={20} src={shinewhite} alt="" /> CONTEXT API{" "}
            <img width={20} src={shinewhite} alt="" /> FETCH API{" "}
            <img width={20} src={shinewhite} alt="" /> AXIOS{" "}
            <img width={20} src={shinewhite} alt="" /> ETHER.JS
            <img width={20} src={shinewhite} alt="" /> WEB3 INTEGRATIONS{" "}
            <img width={20} src={shinewhite} alt="" /> ETHEREUM{" "}
            <img width={20} src={shinewhite} alt="" /> SOLANA{" "}
            <img width={20} src={shinewhite} alt="" /> JWT{" "}
            <img width={20} src={shinewhite} alt="" /> SOCKET.IO
            <img width={20} src={shinewhite} alt="" /> ADOBE PHOTOSHOP{" "}
            <img width={20} src={shinewhite} alt="" /> ADOBE XD{" "}
            <img width={20} src={shinewhite} alt="" /> FIGMA{" "}
            <img width={20} src={shinewhite} alt="" /> WORDPRESS{" "}
            <img width={20} src={shinewhite} alt="" /> ELEMENTOR
            <img width={20} src={shinewhite} alt="" /> WEBFLOW{" "}
            <img width={20} src={shinewhite} alt="" /> VS CODE{" "}
            <img width={20} src={shinewhite} alt="" /> GITHUB{" "}
            <img width={20} src={shinewhite} alt="" /> NETLIFY{" "}
            <img width={20} src={shinewhite} alt="" /> AWS AMPLIFY{" "}
            <img width={20} src={shinewhite} alt="" /> POSTMAN
            <img width={20} src={shinewhite} alt="" /> MS OFFICE{" "}
          </p>
        </Marquee>
        <Marquee
          direction="right"
          className="border-y-2 border-black p-3  bg-white"
        >
          <p className="flex gap-2">
            <img width={20} src={shineblack} alt="" /> HTML{" "}
            <img width={20} src={shineblack} alt="" /> CSS{" "}
            <img width={20} src={shineblack} alt="" /> SCSS{" "}
            <img width={20} src={shineblack} alt="" /> TAILWIND CSS{" "}
            <img width={20} src={shineblack} alt="" /> MATERIAL UI{" "}
            <img width={20} src={shineblack} alt="" /> BOOTSTRAP
            <img width={20} src={shineblack} alt="" /> FRAMER MOTION{" "}
            <img width={20} src={shineblack} alt="" /> JAVASCRIPT{" "}
            <img width={20} src={shineblack} alt="" /> ES6{" "}
            <img width={20} src={shineblack} alt="" /> TYPESCRIPT{" "}
            <img width={20} src={shineblack} alt="" /> PYTHON{" "}
            <img width={20} src={shineblack} alt="" /> C#{" "}
            <img width={20} src={shineblack} alt="" /> REACT JS{" "}
            <img width={20} src={shineblack} alt="" /> NODE JS{" "}
            <img width={20} src={shineblack} alt="" /> EXPRESS JS{" "}
            <img width={20} src={shineblack} alt="" /> MONGO DB{" "}
            <img width={20} src={shineblack} alt="" /> MONGOOSE
            <img width={20} src={shineblack} alt="" /> REDUX TOOLKIT{" "}
            <img width={20} src={shineblack} alt="" /> CONTEXT API{" "}
            <img width={20} src={shineblack} alt="" /> FETCH API{" "}
            <img width={20} src={shineblack} alt="" /> AXIOS{" "}
            <img width={20} src={shineblack} alt="" /> ETHER.JS
            <img width={20} src={shineblack} alt="" /> WEB3 INTEGRATIONS{" "}
            <img width={20} src={shineblack} alt="" /> ETHEREUM{" "}
            <img width={20} src={shineblack} alt="" /> SOLANA{" "}
            <img width={20} src={shineblack} alt="" /> JWT{" "}
            <img width={20} src={shineblack} alt="" /> SOCKET.IO
            <img width={20} src={shineblack} alt="" /> ADOBE PHOTOSHOP{" "}
            <img width={20} src={shineblack} alt="" /> ADOBE XD{" "}
            <img width={20} src={shineblack} alt="" /> FIGMA{" "}
            <img width={20} src={shineblack} alt="" /> WORDPRESS{" "}
            <img width={20} src={shineblack} alt="" /> ELEMENTOR
            <img width={20} src={shineblack} alt="" /> WEBFLOW{" "}
            <img width={20} src={shineblack} alt="" /> VS CODE{" "}
            <img width={20} src={shineblack} alt="" /> GITHUB{" "}
            <img width={20} src={shineblack} alt="" /> NETLIFY{" "}
            <img width={20} src={shineblack} alt="" /> AWS AMPLIFY{" "}
            <img width={20} src={shineblack} alt="" /> POSTMAN
            <img width={20} src={shineblack} alt="" /> MS OFFICE{" "}
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default HeroSection;
