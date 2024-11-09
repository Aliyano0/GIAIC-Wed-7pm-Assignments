type FooterProps = {
  yellow?: boolean;
  heading: string;
  list1: string;
  list2: string;
  list3: string;
};

const FooterLists = ({
  yellow = false,
  heading,
  list1,
  list2,
  list3,
}: FooterProps) => {
  return (
    <>
      <div className={`w-[295px] ${yellow ? "h-[127px]" : "h-[130px]"}`}>
        <ul
          className={`text-white flex flex-col ${
            yellow ? "gap-[15px]" : "gap-4"
          }`}
        >
          <li className="font-bold h-[22px] text-lg leading-[21.78px] tracking-[-2%] ">
            {heading}
          </li>
          <li className="h-[20px] text-base leading-[20px] tracking-[-2%] hover:text-[#FFE492] cursor-pointer">
            {list1}
          </li>
          <li className="h-[20px] text-base leading-[20px] tracking-[-2%] hover:text-[#FFE492] cursor-pointer">
            {list2}
          </li>
          <li className="h-[20px] text-base leading-[20px] tracking-[-2%] hover:text-[#FFE492] cursor-pointer">
            {list3}
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLists;
