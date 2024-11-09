import Image from "next/image";
import Button from "../Utils/Button";
import { TsectionTexts } from "../WorkManagement";
import workTogetherImage from "@/app/assets/images/Work Together Image.png";

export type SectionProps1 = {
  hero: boolean;
  workChart: boolean;
  sectionTexts: TsectionTexts;
};

const Section = ({
  hero = false,
  workChart = false,
  sectionTexts,
}: SectionProps1) => {
  return (
    <>
      <div
        className={`container ${
          hero
            ? "w-[656+824] h-[549px]"
            : `${
                workChart
                  ? "h-[661px] flex-row-reverse gap-[100px]"
                  : "w-[1480px] h-[547px] gap-[60px]"
              }`
        } flex items-center`}
      >
        <div
          className={`headline-section ${
            hero
              ? "w-[656px] h-[361px] "
              : `${workChart ? "w-[670px] h-[294px]" : "w-[672px] h-[411px]"}`
          } flex flex-col gap-[60px] items-start`}
        >
          <div
            className={`text-container ${
              hero
                ? "w-full h-[238px]"
                : `${workChart ? "w-[670px] h-[171px]" : "w-[672px] h-[288px]"}`
            } flex flex-col gap-6 items-start text-[#212529]`}
          >
            <h1
              className={`${
                hero
                  ? "h-[154px] text-[64px] leading-[77.45px] text-white"
                  : `${
                      workChart
                        ? "h-[87px] text-[72px] leading-[87.14px]"
                        : "h-[174px] text-[72px] leading-[87.14px]"
                    }`
              } font-bold tracking-[-2%] `}
            >
              {sectionTexts.heading}
            </h1>
            <p
              className={`${
                hero
                  ? "h-[60px] text-white"
                  : `${workChart ? "h-[60px] " : "h-[90px]"}`
              } text-lg tracking-[-2%] leading-[30px]`}
            >
              {sectionTexts.paragraph}
            </p>
          </div>
          <Button text={sectionTexts.btnText} hero={sectionTexts.heroBtn} />
        </div>

        <div
          className={`image-container ${
            hero
              ? " h-[549px] w-[824px] bg-[#C4DEFD]"
              : `${
                  workChart
                    ? "w-[710px] h-[661px]"
                    : "h-[547px] w-[748px] bg-[#C4DEFD]"
                }`
          }`}
        >
          {workChart && <Image src={workTogetherImage} alt="A diagram"></Image>}
        </div>
      </div>
    </>
  );
};

export default Section;
