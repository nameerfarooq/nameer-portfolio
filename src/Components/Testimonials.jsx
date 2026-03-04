/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import shineblack from "../assets/icons/shineblack.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import HeadingStyle1 from "./HeadingStyleBlack";
const Example = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["2%", "-92%"] : ["1%", "-80%"]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
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
    <div className=" transition-all ease-in-out duration-300 hover:cursor-pointer relative h-[520px] w-[270px] sm:h-[550px] sm:w-[450px]  p-4 bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      <span className="absolute top-5 left-5">
        <FaQuoteLeft />
      </span>
      <span className="absolute bottom-5 right-5">
        <FaQuoteRight />
      </span>
      <div className="text-xl sm:text-2xl font-bold text-center">{name}</div>
      <div className="font-light text-sm sm:text-lg text-center">
        {designation}
      </div>
      <br />
      <div className="text-clip text-sm sm:text-base text-zinc-500 text-center">
        {testimonial}
      </div>
    </div>
  );
};

const cards = [
  {
    name: "Maaz Jawaid",
    designation: "COO @ Hashcore",
    testimonial:
      "If you’re looking for a developer who 'gets it,' Nameer is your guy. He’s been with us almost from the start and has proven to be incredibly reliable, especially when the stakes are high. Nameer is a competitive, top-tier talent and comes with my highest recommendation.",
  },
  {
    name: "Taha Siddiqui",
    designation: "CEO @ BYTE MATES",
    testimonial:
      "I am extremely pleased to share my positive feedback regarding the services provided by Mr. Nameer for the development and design of my software company's website. From the very beginning, Mr. Nameer showcased his expertise and professionalism, ensuring that all my requirements were understood and incorporated into the project.",
  },
  {
    name: "Shahzaib Habib",
    designation: "CTO @ Hashcore",
    testimonial:
      "I have worked with Nameer for over two years. Throughout the professional journey, I found him to take true ownership of the projects. He goes beyond just translating product requirements into a great user experience; he provides valuable feedback that helps evolve the UX for the best possible consumer journey. One thing I really like about him is that he understands the product requirements very quickly & demands very little communication to get the job done. His commitment to the work & ownership is what sets him apart & positions him to be a great team player to work with.",
  },

  {
    name: "Talha iftikhar",
    designation: "Manufacturing Associate @ Northvolt",
    testimonial:
      "I am delighted to recommend Nameer for his outstanding work in developing and managing the website for my business, Encirkel. His expertise in web development is truly impressive, and his attention to detail ensures that our site not only looks great but also functions seamlessly.",
  },
  {
    name: "Usama Zuberi",
    designation: "Sr Software Engineer @ Hashcore",
    testimonial:
      "Highly professional, detail-oriented, and a fantastic problem-solver. Nameer, made a significant impact on our projects, and any team would be lucky to have them.",
  },
  {
    name: "Nuala Allen",
    designation: "Certified Therapist",
    testimonial:
      "I highly recommend Mr. Nameer for his outstanding work creating website that can help the business in getting appointment from the customers. Mr. Nameer has helped out in every way to provide the responsive and adaptive website. I would highly recommend him for future work.",
  },
  {
    name: "Abdul Mannan",
    designation: "Blockchain Engineer @ Hashcore",
    testimonial:
      "Muhammad Nameer is someone you can genuinely rely on. He cares about what he builds and it shows in his work. His skills help him turn complex ideas into clean, scalable solutions without overcomplicating things. What I respect most about him is his drive to keep growing whether that’s exploring Web3 or mentoring others along the way. He’s skilled, focused, and easy to work with. Any team would benefit from having him.",
  },
  {
    name: "Ahmed Samir",
    designation: "President of NIC",
    testimonial:
      "I am pleased to offer my enthusiastic endorsement of Mr. Nameer in light of his exceptional contributions to the development of our website for www.thenic.se, an esteemed Islamic society in Sweden. Based on the exemplary results demonstrated in this collaborative project, I wholeheartedly recommend Mr. Nameer for prospective engagements. His professionalism, expertise, and commitment to delivering high-quality outcomes are truly commendable. ",
  },
  {
    name: "Tarik Abouali",
    designation: "CEO @ VoixLabs LLC",
    testimonial:
      "Nameer is an exceptional young man, and he is an asset to any business. Were extremely pleased with the results. He delivered as he said he would, and was very attentive to us. We have hired him to work on an ongoing basis, and I urge anyone who is considering him to go ahead and do it. you will not be disappointed.",
  },
  {
    name: "Arisha",
    designation: "Marketing Lead",
    testimonial:
      "I hired Muhammad N. for the website development work, he provided personalised experience, and delivered quality work timely. Really appreciate his efforts.",
  },
  {
    name: "Bilal",
    designation: "CEO @ Greener Pakistan",
    testimonial:
      "Nameer did a great job with our website, delivering on time and meeting all our needs. Highly professional and easy to work with.",
  },
  {
    name: "Syed Daniyal Zaidi",
    designation: "Python Developer @ NextGenI",
    testimonial:
      "I had the pleasure of working with Nameer on several projects, and I found him to be a highly organized professional. His communication and time management skills are exceptional.",
  },
  {
    name: "Usama Ali",
    designation: "Backend Developer @ KNYSYS",
    testimonial:
      "I had the pleasure of working with Muhammad Nameer on our Final Year Project, where he excelled as the front-end engineer. Muhammad's exceptional technical skills, innovative thinking, and dedication to continuous learning greatly contributed to our project's success. His proactive approach and excellent communication foster a positive work environment. I recommend him for opportunities.",
  },
];
const Testimonials = () => {
  return (
    <>
      <div className="w-full sm:max-w-7xl mx-auto mt-28 sm:mt-40">
        <HeadingStyle1 black={true} text2={"Testimonials"} />
      </div>
      <Example />
      <br />
      <br />
      <br />
    </>
  );
};

export default Testimonials;
