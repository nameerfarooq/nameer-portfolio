import axios from "axios";
import { useEffect, useRef, useState } from "react";
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
    <div className="rounded-lg py-3 px-6 mx-auto my-4 bg-white text-black">
      <span className="font-black"> {count}</span> people visited
    </div>
  );
};

export default VisitorCount;
