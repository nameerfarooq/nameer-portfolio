/* eslint-disable react/prop-types */

import readMore from "../assets/icons/readmore.png";
import Card from "./TiltCard";
const Project = ({ data, id, reversed }) => {
  const { image, title, description, link } = data;
  return (
    <div
      className={`max-w-full md:max-w-7xl justify-center mx-auto my-[80px] ${
        reversed
          ? "flex flex-row-reverse flex-wrap md:flex-nowrap"
          : "flex flex-wrap md:flex-nowrap"
      } gap-12 flex items-center p-2 sm:p-0 `}
    >
      <div className="rounded-3xl  h-auto p-3 w-full md:w-6/12">
        <a href={link} target="_blank">
          <Card image={image} />
        </a>
      </div>
      <div className="flex flex-col  gap-6 p-3 w-full md:w-6/122">
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
