import ExperienceTabs from "./ExperienceTabs";
import HeadingStyle1 from "./HeadingStyleBlack";

const Experience = () => {
  return (
    <div id="experience" className="max-w-7xl mx-auto my-12 mt-32">
      <HeadingStyle1 black={true} text1={"My"} text2={"Experience"} />
      <div className="mt-8 sm:mt-16">
        <ExperienceTabs />
      </div>
    </div>
  );
};

export default Experience;
