import FancyButton from "./FancyButton";
import resume from "../assets/Nameer (React Js + MERN).pdf";
const Header = () => {
  return (
    <div
      id="top"
      className="max-w-7xl mx-auto p-3 flex justify-between gap-3 header"
    >
      <div className="text-black-700 font-semibold text-xl flex-1 items-center flex">
        Muhammad Nameer.
      </div>
      <div className="nav-items flex gap-6 items-center flex-1 justify-center font-semibold">
        <div className=" cursor-pointer">
          <a href="#skills">Skills</a>
        </div>
        <div className=" cursor-pointer">
          {" "}
          <a href="#experience"> Experience</a>
        </div>
        <div className=" cursor-pointer">
          {" "}
          <a href="#work">Work</a>
        </div>
        <div className=" cursor-pointer">
          {" "}
          <a href="#achievements">Achievements</a>
        </div>
        <div className=" cursor-pointer">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="flex-1 justify-end flex">
        {/* <div className="flex gap-2 items-center w-max font-semibold py-3 px-8 rounded bg-black text-white hover:opacity-75 cursor-pointer">
          <div> Resume</div>
          <span>
            <FaArrowDown />
          </span>
        </div> */}
        <a href={resume} target="_blank" download>
          <FancyButton />
        </a>
      </div>
    </div>
  );
};

export default Header;
