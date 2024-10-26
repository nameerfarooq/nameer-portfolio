import { useState, useEffect } from "react";
import { FaUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top when icon is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <a href="#top" onClick={scrollToTop}>
          <div className="fixed bottom-10 right-10 bg-black text-white  cursor-pointer border-2 border-white w-[50px] h-[60px] flex items-center justify-center">
            <FaUpLong size={25} />
          </div>
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
