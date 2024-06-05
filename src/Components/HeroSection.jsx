import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hero.mp4";
const HeroSection = () => {
  return (
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
          <div className="text-4xl font-extrabold">Muhammad Nameer</div>
          <div className="text-4xl font-medium">Full Stack Developer</div>
        </div>
        <div className="about text-zinc-500">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </div>
        <div className="socials flex gap-3 items-center">
          <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
            <FaLinkedin />
          </div>
          <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
            <FaGithub />
          </div>
          <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
            <FaEnvelope />
          </div>
          <div className="transition-all duration-300 ease-in-out cursor-pointer social-icon rounded w-10 h-10 flex items-center justify-center border-2 border-black">
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className="flex items-center w-3/5">
        <video autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
