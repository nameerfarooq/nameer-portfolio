/* eslint-disable no-unused-vars */
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import HeadingStyle1 from "./HeadingStyleBlack";
import webcert from "../assets/images/webcert.jpg";
import jira from "../assets/images/jira.jpeg";
import postman from "../assets/images/postmancert.jpg";
import git from "../assets/images/gitcert.jpg";
import photoshop from "../assets/images/cert3.jpeg";
import flash from "../assets/images/cert4.jpeg";
import excel from "../assets/images/cert2.jpeg";
import cit from "../assets/images/cert1.jpeg";
import uit from "../assets/images/uit.jpeg";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCross, FaRegWindowClose, FaWindowClose } from "react-icons/fa";
export const HoverImageLinks = () => {
  const [showImg, setshowImg] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const handleImg = (src) => {
    setImgSrc(src);
    setshowImg(true);
  };
  return (
    <>
      {imgSrc && showImg && (
        <div className="flex p-3 sm:p-12 items-center justify-center bg-black bg-opacity-80 fixed top-0 left-0 w-full h-screen z-40">
          <div
            onClick={() => setshowImg(false)}
            className="fixed top-10 right-10 z-50 cursor-pointer"
          >
            <FaRegWindowClose size={50} color="white" />
          </div>
          <div className="max-w-7xl max-h-screen">
            <img
              src={imgSrc}
              className=" w-full h-auto object-contain"
              alt=""
            />
          </div>
        </div>
      )}
      <section className="bg-black  p-6 md:p-8">
        <br />
        <br />
        <HeadingStyle1 black={false} text1={"My"} text2={"Achievements"} />

        <div className="mx-auto max-w-7xl mt-20 sm:mt-32">
          <Link
            heading="Web Development"
            subheading="HTML, CSS and JavaScript for web developers by 10 pearls"
            imgSrc={webcert}
            handleImg={handleImg}
          />
          <Link
            heading="Jira"
            subheading="Get started with Jira by coursera"
            imgSrc={jira}
            handleImg={handleImg}
          />
          <Link
            heading="Postman"
            subheading="Introduction to API testing with Postman by 10 pearls"
            imgSrc={postman}
            handleImg={handleImg}
          />

          <Link
            heading="ICT Project Exhibition"
            subheading="Secured 2nd position in ICT project exhibition at UIT"
            imgSrc={uit}
            handleImg={handleImg}
          />

          <Link
            heading="CIT"
            subheading="CIT from SBTE (Sindh board of technical education)"
            imgSrc={cit}
            handleImg={handleImg}
          />
          <Link
            heading="GIT"
            subheading="GIT Fundamentals by 10 pearls"
            imgSrc={git}
            handleImg={handleImg}
          />
          <Link
            heading="Photoshop"
            subheading="1st position in Adobe PhotoShop's internal examination by GCI"
            imgSrc={photoshop}
            handleImg={handleImg}
          />
          <Link
            heading="MS Excel"
            subheading="1st position in MS EXCEL's internal examination by GCI"
            imgSrc={excel}
            handleImg={handleImg}
          />
          <Link
            heading="Flash"
            subheading="1st position in Flash's internal examination by GCI"
            imgSrc={flash}
            handleImg={handleImg}
          />
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

const Link = ({ heading, imgSrc, subheading, href, handleImg }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      onClick={() => handleImg(imgSrc)}
      href={href}
      target="_blank"
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="cursor-pointer group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 w-[120%] sm:w-100% block text-xl sm:text-4xl font-bold text-white transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block "
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
