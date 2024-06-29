import Project from "./Project";
import imageforProject from "../assets/images/a.jpeg";
const projectsArray = [
  {
    image: imageforProject,
    title: "Real Estate App",
    description: "lorem ipsum ehehehehhehe",
    link: "greener.com.pk",
  },
  {
    image: imageforProject,
    title: "Real Estate App",
    description: "lorem ipsum ehehehehhehe",
    link: "greener.com.pk",
  },
];
const Work = () => {
  return (
    <div className="mx-auto my-12 mt-32 bg-black py-24 text-white">
      <p className="text-4xl mt-16 mb-32 text-center text-white">
        My <span className="font-extrabold">Work</span>
      </p>
      <div className="flex flex-col gap-28 items-center">
        {projectsArray.length > 0 &&
          projectsArray.map((project, id) => (
            <Project
              data={project}
              key={id}
              id={id + 1}
              reversed={id % 2 !== 0}
            />
          ))}
      </div>
    </div>
  );
};

export default Work;
