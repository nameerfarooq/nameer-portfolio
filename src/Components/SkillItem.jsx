import React from "react";

const SkillItem = ({ name, image }) => {
  return (
    <div className="skill-item flex flex-col gap-4 p-1 rounded w-24 h-32 sm:w-32 sm:h-40 border-b-8 transition-all ease-in-out duration-300 cursor-pointer hover:bg-black hover:text-white  border-2 border-black items-center justify-center">
      <img className="w-8 h-8 sm:w-20 sm:h-20 object-contain" src={image} alt="" />
      <p className="text-center">{name}</p>
    </div>
  );
};

export default SkillItem;
