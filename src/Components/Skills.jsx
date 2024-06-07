import React from "react";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto mt-28">
      <p className="text-4xl my-12 text-center">
        My <span className="font-extrabold">Skills</span>
      </p>
      <div className="flex gap-8 flex-wrap justify-center">
        <div className="flex flex-col gap-3 p-3 rounded w-28 h-28 border-b-8 transition-all ease-in-out duration-300 cursor-pointer hover:bg-black hover:text-white  border-2 border-black items-center justify-center">
          HTML
        </div>
      </div>
    </div>
  );
};

export default Skills;
