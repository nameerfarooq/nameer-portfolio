import { FaUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  return (
    <a href="#top">
      <div className="fixed bottom-10 right-10 bg-black text-white rounded-md cursor-pointer border-2 border-white w-[50px] h-[60px] flex items-center justify-center">
        {" "}
        <FaUpLong size={25} />
      </div>
    </a>
  );
};

export default ScrollToTop;
