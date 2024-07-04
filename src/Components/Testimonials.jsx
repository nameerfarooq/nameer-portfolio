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
    <div className=" hover:-mt-10 transition-all ease-in-out duration-300 hover:cursor-pointer relative h-[350px] w-[450px] rounded-3xl p-4 bg-black text-white flex flex-col justify-center items-center">
      <span className="absolute top-5 left-5">
        <FaQuoteLeft />
      </span>
      <span className="absolute bottom-5 right-5">
        <FaQuoteRight />
      </span>
      <div className="text-2xl font-bold">{name}</div>
      <div className="font-light">{designation}</div>
      <br />

      <div className="text-ellipsis text-sm text-zinc-500 text-center">
        {testimonial}
      </div>
    </div>
  );
};

const cards = [
  {
    name: "Taha",
    designation: "CEO @ByteMates",
    testimonial:
      "lorem ipsum hehehehe lorem ipsum huhuhuuhuh lorem ipsum hihihihih lorem ipsum heheheheeh lorem ipsum heheheheeh lorem ipsum ahahahahha",
  },
  {
    name: "Taha",
    designation: "CEO @ByteMates",
    testimonial:
      "lorem ipsum hehehehe lorem ipsum huhuhuuhuh lorem ipsum hihihihih lorem ipsum heheheheeh lorem ipsum heheheheeh lorem ipsum ahahahahha",
  },
  {
    name: "Taha",
    designation: "CEO @ByteMates",
    testimonial:
      "lorem ipsum hehehehe lorem ipsum huhuhuuhuh lorem ipsum hihihihih lorem ipsum heheheheeh lorem ipsum heheheheeh lorem ipsum ahahahahha",
  },
  {
    name: "Taha",
    designation: "CEO @ByteMates",
    testimonial:
      "lorem ipsum hehehehe lorem ipsum huhuhuuhuh lorem ipsum hihihihih lorem ipsum heheheheeh lorem ipsum heheheheeh lorem ipsum ahahahahha",
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
        minima? Amet deserunt et saepe tempora dolorem a corrupti. Quia,
        possimus impedit qui at porro voluptate nisi expedita consequatur
        consequuntur aliquid?
      </p>
    </>
  );
};

export default Testimonials;
