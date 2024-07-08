/* eslint-disable react/prop-types */
import shineblack from "../assets/icons/shineblack.png";
import shinewhite from "../assets/icons/shinewhite.png";
const HeadingStyle1 = ({ black, text1, text2 }) => {
  return (
    <div
      className={`text-2xl sm:text-4xl my-12 text-center flex gap-2 items-center justify-center ${
        black ? "text-black" : "text-white"
      }`}
    >
      <img
        className="w-[35px] h-[35px] object-contain"
        src={`${black ? shineblack : shinewhite}`}
        alt=""
      />
      <p className="flex gap-2">
        {text1}
        <span className="font-extrabold">{text2}</span>
      </p>
    </div>
  );
};

export default HeadingStyle1;
