/* eslint-disable react/prop-types */
import React from "react";
import HeadingStyle1 from "./HeadingStyleBlack";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import shineblack from "../assets/icons/shineblack.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Example = () => {
  return (
    <div className="bg-white-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-green">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const { name, designation, testimonial } = card;
  return (
    <div className=" hover:-mt-10 transition-all ease-in-out duration-300 hover:cursor-pointer relative h-[350px] w-[450px] rounded-3xl p-4 bg-black text-white flex flex-col justify-center items-center overflow-hidden overflow-clip">
      <span className="absolute top-5 left-5">
        <FaQuoteLeft />
      </span>
      <span className="absolute bottom-5 right-5">
        <FaQuoteRight />
      </span>
      <div className="text-2xl font-bold">{name}</div>
      <div className="font-light">{designation}</div>
      <br />

      <div className="text-clip  text-sm text-zinc-500 text-center">
        {testimonial}
      </div>
    </div>
  );
};

const cards = [
  {
    name: "Taha Siddiqui",
    designation: "CEO, BYTE MATES",
    testimonial:
      "I am extremely pleased to share my positive feedback regarding the services provided by Mr. Nameer for the development and design of my software company's website. From the very beginning, Mr. Nameer showcased his expertise and professionalism, ensuring that all my requirements were understood and incorporated into the project.",
  },

  {
    name: "Talha iftikhar",
    designation: "Manufacturing Associate @ Northvolt",
    testimonial:
      "I am delighted to recommend Nameer for his outstanding work in developing and managing the website for my business, Encirkel. His expertise in web development is truly impressive, and his attention to detail ensures that our site not only looks great but also functions seamlessly.",
  },
  {
    name: "Nuala Allen",
    designation: "Certified Therapist",
    testimonial:
      "I highly recommend Mr. Nameer for his outstanding work creating website that can help the business in getting appointment from the customers. Mr. Nameer has helped out in every way to provide the responsive and adaptive website. I would highly recommend him for future work.",
  },
  {
    name: "Ahmed Samir",
    designation: "President of Norrbottens Islamiska Center",
    testimonial:
      "I am pleased to offer my enthusiastic endorsement of Mr. Nameer in light of his exceptional contributions to the development of our website for the 'Norrbottens Islamiska Center' (www.thenic.se), an esteemed Islamic society in Sweden. Based on the exemplary results demonstrated in this collaborative project, I wholeheartedly recommend Mr. Nameer for prospective engagements. His professionalism, expertise, and commitment to delivering high-quality outcomes are truly commendable. ",
  },
  {
    name: "Arisha",
    designation: "Marketing Lead",
    testimonial:
      "I hired Muhammad N. for the website development work, he provided personalised experience, and delivered quality work timely. Really appreciate his efforts.",
  },
  {
    name: "Bilal",
    designation: "CEO @Greener Pakistan",
    testimonial:
      "I hired Muhammad N. for the website development work, he provided personalised experience, and delivered quality work timely. Really appreciate his efforts.",
  },
  {
    name: "Syed Daniyal Zaidi",
    designation: "Python Developer @NextGenI",
    testimonial:
      "I had the pleasure of working with Nameer on several projects, and I found him to be a highly organized professional. His communication and time management skills are exceptional.",
  },
  {
    name: "Usama Ali",
    designation: "Backend Developer @KNYSYS",
    testimonial:
      "I had the pleasure of working with Muhammad Nameer on our Final Year Project, where he excelled as the front-end engineer. Muhammad's exceptional technical skills, innovative thinking, and dedication to continuous learning greatly contributed to our project's success. His proactive approach and excellent communication foster a positive work environment. I recommend him for opportunities.",
  },
];
const Testimonials = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32">
        <br />
        <br />
        <br />
        <div className="text-4xl relative text-center flex gap-2 items-center justify-center">
          <img
            className="w-[35px] h-[35px] object-contain"
            src={shineblack}
            alt=""
          />
          <p className="flex gap-2">
            Client's
            <span className="font-extrabold">Testimonials</span>
          </p>
        </div>
      </div>
      <Example />
      <br />
      <br />
      <br />
    </>
  );
};

export default Testimonials;
