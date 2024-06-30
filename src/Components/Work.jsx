import Project from "./Project";
import imageforProject from "../assets/images/a.jpeg";
const projectsArray = [
  {
    image: imageforProject,
    title: "Bytemates",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
    link: "https://bytemates.com/",
  },
  {
    image: imageforProject,
    title: "Greener Pakistan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
    link: "greener.com.pk",
  },
  {
    image: imageforProject,
    title: "Real Estate App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "greener.com.pk",
  },
  {
    image: imageforProject,
    title: "Artizia.io",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "greener.com.pk",
  },
  {
    image: imageforProject,
    title: "Zero Swap",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "swap.zeroliquid.xyz",
  },
  {
    image: imageforProject,
    title: "The NIC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "https://thenic.se/",
  },
  {
    image: imageforProject,
    title: "FYP Manager",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "https://thenic.se/",
  },
  {
    image: imageforProject,
    title: "Tradepedia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",

    link: "https://tradepedia.io/",
  },
  {
    image: imageforProject,
    title: "Encirkel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "Noori Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "TFC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "News Monkey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
  },
  {
    image: imageforProject,
    title: "Reservations Dashboard UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates aspernatur tenetur facilis neque explicabo libero, molestias debitis error obcaecati perferendis numquam at provident animi sequi consequuntur odio, assumenda illo!",
    link: "https://reservation-dashboard.netlify.app/",
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
