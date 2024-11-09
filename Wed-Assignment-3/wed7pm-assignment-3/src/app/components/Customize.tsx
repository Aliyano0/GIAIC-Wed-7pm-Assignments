import Section2 from "./SectionComponents/Section2";
import { TsectionTexts } from "./WorkManagement";

const sectionText: TsectionTexts = {
  heading: "Customise it to your needs",
  paragraph:
    "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
  btnText: "Let's Go",
  heroBtn: false,
};

const Customize = () => {
  return (
    <>
      <div className="h-[812.09px] flex-row-reverse w-[1920px] py-[140px] px-[220px] flex gap-[98px] items-center">
        <Section2
          extension={false}
          sectionTexts={sectionText}
        />
      </div>
    </>
  );
};

export default Customize;
