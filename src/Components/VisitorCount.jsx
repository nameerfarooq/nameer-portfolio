import axios from "axios";
import { useEffect, useRef, useState } from "react";
import eyegif from "../assets/images/eye.gif";
const VisitorCount = () => {
  const [count, setCount] = useState(0);
  const hasCalledAPI = useRef(false);
  const fetchVisitorCount = async () => {
    await axios
      .get("https://portfolio-visitor-count.onrender.com/api/visitor")
      .then((res) => {
        console.log(res);
        setCount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (!hasCalledAPI.current) {
      fetchVisitorCount();
      hasCalledAPI.current = true;
    }
  }, []);
  return (
    <>
      {count > 0 && (
        <div className="py-3 px-6 mx-auto mt-4 bg-white text-black flex flex-col gap-4 items-center justify-center">
          <img src={eyegif} alt="eye gif" />
          <div>
            <span className="font-bold"> {count}</span> people visited
          </div>
        </div>
      )}
    </>
  );
};

export default VisitorCount;
