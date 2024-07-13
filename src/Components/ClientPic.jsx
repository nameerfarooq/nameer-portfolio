/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ClientPic = ({ src }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <motion.div
      ref={ref}
      className="card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <img
        src={src}
        className=" grayscale hover:grayscale-0 transition-all ease-in-out duration-300 w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] object-contain cursor-pointer hover:scale-110"
        alt="Client logo"
      />
    </motion.div>
  );
};

export default ClientPic;
