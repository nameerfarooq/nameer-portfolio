/* eslint-disable react/prop-types */

import readMore from "../assets/icons/readmore.png";
import Card from "./TiltCard";
const Project = ({ data, id, reversed }) => {
  const { image, title, description, link } = data;
  return (
    <div
      className={`max-w-6xl mx-auto my-[80px] ${
        reversed ? "flex flex-row-reverse" : "flex"
      } gap-12 flex items-center p-4 sm:p-0 `}
    >
      <div className="rounded-3xl  h-auto w-6/12">
        <a href={link} target="_blank">
          <Card image={image} />
        </a>
      </div>
      <div className="flex flex-col  gap-6 w-6/12">
        <div className="font-sora font-bold text-5xl">
          {id < 10 ? 0 : null}
          {id ? id : null}
        </div>
        <div className="font-sora font-bold text-4xl">
          {title ? title : null}
        </div>
        <div className="text-zinc-500">{description ? description : null}</div>
        {link ? (
          <a href={link} target="_blank" className="flex gap-3 items-center">
            <div className="underline">Live Link</div>
            <img
              src={readMore}
              alt="Read More"
              className="w-5 h-5 cursor-pointer"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
