import React from "react";
import {
  FaArrowDown,
  FaDownload,
  FaFileDownload,
  FaTrash,
} from "react-icons/fa";
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 flex justify-between gap-3 header">
      <div className="text-black-700 font-semibold text-xl flex-1">
        Muhammad Nameer
      </div>
      <div className=" flex gap-6 items-center flex-1 justify-center font-semibold">
        <div className="hover:opacity-70">Home</div>
        <div className="hover:opacity-70">Skills</div>
        <div className="hover:opacity-70">About</div>
        <div className="hover:opacity-70">Experience</div>
        <div className="hover:opacity-70">Work</div>
        <div className="hover:opacity-70">Contact</div>
      </div>
      <div className="flex-1 justify-end flex">
        <div className="flex gap-2 items-center w-max font-semibold py-3 px-8 rounded bg-black text-white hover:opacity-85 cursor-pointer">
          <div>Resume</div>
          <span>
            <FaArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
