import React from "react";
import { FaArrowDown } from "react-icons/fa";
import FancyButton from "./FancyButton";
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 flex justify-between gap-3 header">
      <div className="text-black-700 font-semibold text-xl flex-1 items-center flex">
        Muhammad Nameer.
      </div>
      <div className="nav-items flex gap-6 items-center flex-1 justify-center font-semibold">
        <div className=" cursor-pointer">Skills</div>
        <div className=" cursor-pointer">Experience</div>
        <div className=" cursor-pointer">Work</div>
        <div className=" cursor-pointer">Achievements</div>
        <div className=" cursor-pointer">Contact</div>
      </div>
      <div className="flex-1 justify-end flex">
        {/* <div className="flex gap-2 items-center w-max font-semibold py-3 px-8 rounded bg-black text-white hover:opacity-75 cursor-pointer">
          <div> Resume</div>
          <span>
            <FaArrowDown />
          </span>
        </div> */}
        <FancyButton />
      </div>
    </div>
  );
};

export default Header;
