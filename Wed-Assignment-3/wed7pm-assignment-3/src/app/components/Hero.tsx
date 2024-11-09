import Section from "./SectionComponents/Section1";
import { TsectionTexts } from "./WorkManagement";

const sectionText: TsectionTexts = {
  heading: "Get More Done with whitepace",
  paragraph:
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
  btnText: "Try Whitepace free",
  heroBtn: true,
};

const Hero = () => {
  return (
    <>
      <div className="w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#043873] flex items-center">
        <Section hero={true} workChart={false} sectionTexts={sectionText} />
      </div>
    </>
  );
};

export default Hero;
