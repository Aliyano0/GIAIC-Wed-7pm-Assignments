import Section2 from "./SectionComponents/Section2";
import { TsectionTexts } from "./WorkManagement";

const sectionText: TsectionTexts = {
  heading: "Use as Extension",
  paragraph:
    "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
  btnText: "Let's Go",
  heroBtn: false,
};

const Extension = () => {
  return (
    <>
      <div className="w-[1920px] h-[759px] bg-[#043873] py-[140px] px-[220px] flex gap-[98px] items-center">
        <Section2 extension={true} sectionTexts={sectionText} />
      </div>
    </>
  );
};

export default Extension;
