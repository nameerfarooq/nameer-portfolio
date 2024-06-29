import Project from "./Project";
import imageforProject from "../assets/images/a.jpeg";
const projectsArray = [
  {
    image: imageforProject,
    title: "Bytemates",
    description:
      "Bytemates is a software house, I have developed their website using wordpress, Elementor, slider revolution, and my photoShop skills.",
    link: "https://bytemates.com/",
  },
  {
    image: imageforProject,
    title: "Greener Pakistan",
    description: "Greener Pakistan is a team of Solar energy specialists, They provide all kind of solar solutions",
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
  );
};

export default Work;
