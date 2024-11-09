import Button from "../Utils/Button";
import { TsectionTexts } from "../WorkManagement";

type SectionProps2 = {
  extension: boolean;
  sectionTexts: TsectionTexts;
};

const Section2 = ({ extension = false, sectionTexts }: SectionProps2) => {
  const { paragraph, heading, btnText, heroBtn } = sectionTexts;
  return (
    <>
      <div
        className={`heading-container ${
          extension ? "w-[697px] h-[294px]" : "w-[669px] h-[411px]"
        }`}
      >
        <div
          className={`text-container ${
            extension ? "w-[697px] h-[171px]" : "w-[669px] h-[288px]"
          } mb-[60px]`}
        >
          <h1
            className={`${
              extension
                ? "h-[87px] w-[697px] text-white"
                : "h-[174px] w-[669px] text-[#212529]"
            } text-[72px] leading-[87.14px] tracking-[-2%] font-bold mb-6`}
          >
            {heading}
          </h1>
          <p
            className={`${
              extension
                ? "h-[60px] w-[697px] text-white"
                : "w-[669px] h-[90px] text-[#212529]"
            } text-lg leading-[30px] tracking-[-2%]`}
          >
            {paragraph}
          </p>
        </div>
        <Button text={btnText} hero={heroBtn}></Button>
      </div>
      <div
        className={`image-container ${
          extension ? "w-[686px] h-[479px]" : "w-[714px] h-[532.09px]"
        } bg-[#C4DEFD]`}
      ></div>
    </>
  );
};

export default Section2;
