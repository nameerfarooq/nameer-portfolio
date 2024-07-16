import { FaDownLong } from "react-icons/fa6";
import bulb from "../assets/images/bulb.gif";
import HeadingStyle1 from "./HeadingStyleBlack";
import { motion } from "framer-motion";
import VisitorCount from "./VisitorCount";
export const RevealLinks = () => {
  return (
    <section className="place-content-center gap-4 flex flex-wrap sm:flex-row flex-col items-center justify-center">
      <FlipLink href="https://www.linkedin.com/in/muhammad-nameer/">
        Linkedin
      </FlipLink>
      <FlipLink href="https://github.com/nameerfarooq">Github</FlipLink>
      <FlipLink href="mailto:nameerfarooq18@gmail.com">Email</FlipLink>
      <FlipLink href="https://wa.me/+923352418380">WhatsApp</FlipLink>
      <FlipLink href="https://x.com/NameerFarooq18">X (Twitter)</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap font-black text-black uppercase text-3xl"
      style={{
        lineHeight: 0.95,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
const Contact = () => {
  return (
    <div id="contact" className="w-full contact-background py-12 sm:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <HeadingStyle1 black={false} text1={"Contact"} text2={"Me"} />

        <div className=" text-white mt-16 flex gap-6 sm:gap-10 justify-center flex-col items-center">
          <img src={bulb} alt="" className="invert" />
          <div>
            <div className="text-2xl sm:text-4xl text-center">
              Got a new project idea?
            </div>
            <div className="text-4xl sm:text-6xl font-black text-center">
              let's Discuss!
            </div>
          </div>
          <FaDownLong size={40} />
          <div className="py-6 px-12  bg-white rounded-lg">
            <RevealLinks />
          </div>
          <VisitorCount />
        </div>
      </div>
    </div>
  );
};

export default Contact;
