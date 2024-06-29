/* eslint-disable react/prop-types */

import readMore from "../assets/icons/readmore.png";
import Card from "./TiltCard";
const Project = ({ data, id, reversed }) => {
  const { image, title, description, link } = data;
  return (
    <div
      className={`max-w-6xl mx-auto ${
        reversed ? "flex flex-row-reverse" : "flex"
      } gap-12 max-md:flex-wrap items-center p-4 `}
    >
      <div className="rounded-3xl  h-auto md:flex-1">
        <Card image={image} />
      </div>
      <div className="flex flex-col  gap-6 md:flex-1">
        <div className="font-sora font-extrabold text-5xl">
          {id ? id : null}
        </div>
        <div className="font-sora font-bold text-4xl">
          {title ? title : null}
        </div>
        <div className="text-zinc-500">{description ? description : null}</div>
        {link ? (
          <a href="https://facebook.com" target="_blank">
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
