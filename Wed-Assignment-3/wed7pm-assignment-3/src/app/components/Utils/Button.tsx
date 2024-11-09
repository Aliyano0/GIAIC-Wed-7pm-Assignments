import Image from "next/image";
import arrow from "@/app/assets/images/hero-free-trial-btn-arrow.svg";

type Btn = {
  text: string;
  hero: boolean;
};
const Button = ({ text, hero = false }: Btn) => {
  return (
    <>
      <button
        className={`rounded-lg bg-[#4F9CF9] text-white flex gap-[10px] items-center cursor-pointer  ${
          hero ? "w-[219px] h-[63px] p-5" : "px-10 py-5"
        }`}
      >
        <span className="font-medium text-lg leading-[23px] tracking-[-0.02em]">
          {text}
        </span>
        <span>
          <Image src={arrow} alt="arrow" width={10} height={10}></Image>
        </span>
      </button>
    </>
  );
};

export default Button;
