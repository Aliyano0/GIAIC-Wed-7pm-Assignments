import Section from "./SectionComponents/Section1";

export type TsectionTexts = {
  heading: string;
  paragraph: string;
  btnText: string;
  heroBtn: boolean;
};

const firstSection: TsectionTexts = {
  heading: "Project Management",
  paragraph:
    "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
  btnText: "Get Started",
  heroBtn: false,
};
const secondSection: TsectionTexts = {
  heading: "Work together",
  paragraph:
    "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
  btnText: "Get Started",
  heroBtn: false,
};

const WorkManagement = () => {
  return (
    <>
      <div className="w-[1920px] h-[1588px] px-[220px] py-[140px] flex flex-col gap-[100px]">
        <Section hero={false} workChart={false} sectionTexts={firstSection} />
        <Section hero={false} workChart={true} sectionTexts={secondSection} />
      </div>
    </>
  );
};

export default WorkManagement;
