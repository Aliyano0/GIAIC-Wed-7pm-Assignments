import Image from "next/image";
import apple from "@/app/assets/images/Apple.png";
import microsoft from "@/app/assets/images/Microsoft.png";
import google from "@/app/assets/images/Google.png";
import slack from "@/app/assets/images/Slack.png";

const Sponsor = () => {
  return (
    <>
      <div className="w-[1922px] h-[538px] px-[220px] py-[140px] flex flex-col gap-[100px] justify-center">
        <h1 className="w-[1482px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] text-center">
          Our sponsors
        </h1>
        <div className="sponsors w-[1482px] h-[71px] flex justify-between ">
          <Image src={apple} alt="Apple Logo" width={55.47} height={68}></Image>
          <Image
            src={microsoft}
            alt="Microsoft Logo"
            width={287}
            height={62}
          ></Image>
          <Image src={slack} alt="Slack Logo" width={280} height={71}></Image>
          <Image
            src={google}
            alt="Google Logo"
            width={211}
            height={69.81}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
