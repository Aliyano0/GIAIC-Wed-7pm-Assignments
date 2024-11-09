import Image from "next/image";
import logo from "@/app/assets/images/Logo.png";
import FooterLists from "./FooterLists";

const Footer = () => {
  return (
    <>
      <footer className="w-[1920px] h-[461px] pt-[140px] pb-8 px-[220px] bg-[#043873]">
        <div className="footer-content w-[1480px] h-[289px] flex flex-col gap-[100px]">
          <div className="info w-[1480px] h-[169px] flex gap-[100px]">
            <div className="desc w-[295px] h-[169]">
              <Image src={logo} alt="Logo" width={191} height={34}></Image>
              <p className="w-[240px] h-[120px] text-lg leading-[30px] tracking-[-2%] text-[#F7F7EE] mt-[15px]">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <FooterLists
              yellow={true}
              heading="Product"
              list1="Overview"
              list2="Pricing"
              list3="Customer stories"
            />
            <FooterLists
              heading="Resources"
              list1="Blog"
              list2="Guides & tutorials"
              list3="Help center"
            />
            <FooterLists
              heading="Company"
              list1="About us"
              list2="Careers"
              list3="Media kit"
            />
          </div>
          <div className="mt-[-16px]">
            <div className="line h-[1px] w-[1480px] bg-[#2E4E73] "></div>
            <div className="footer-btm w-[1480px] h-5 flex justify-center mt-4">
              <p className="w-[169px] h-5 leading-[20px] tracking-[-2%] text-white">
                &copy;2021 Whitepace LLC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
