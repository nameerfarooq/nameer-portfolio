import bulb from "../assets/images/bulb.gif";
import HeadingStyle1 from "./HeadingStyleBlack";
import { motion } from "framer-motion";
export const RevealLinks = () => {
  return (
    <section className="place-content-center gap-8 flex flex-wrap ">
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
      className="relative block overflow-hidden whitespace-nowrap font-black text-white uppercase text-3xl"
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
    <div className="w-full contact-background py-32">
      <div className="max-w-7xl mx-auto">
        <HeadingStyle1 black={true} text1={"Contact"} text2={"Me"} />

        <div className="flex mt-16 items-center gap-5 justify-center">
          <div className="flex-1 flex justify-center flex-col items-center">
            <img src={bulb} alt="" />
            <div className="text-4xl">Got a new project idea?</div>
            <div className="text-6xl font-black">let's Discuss!</div>
            <div className="mt-24 py-6 px-12  bg-black text-white rounded-lg">
              <RevealLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
