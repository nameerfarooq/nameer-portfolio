import ExperienceTabs from "./ExperienceTabs";
import HeadingStyle1 from "./HeadingStyleBlack";

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 mt-32">
      <HeadingStyle1 black={true} text1={"My"} text2={"Experience"} />
      <br />
      <br />
      <br />
      <ExperienceTabs />
    </div>
  );
};

export default Experience;
