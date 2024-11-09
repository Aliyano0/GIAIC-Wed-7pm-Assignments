import Image from "next/image";
import logo from "@/app/assets/images/Logo.png";

const Navbar = () => {
  return (
    <>
      <header className="w-[1920px] h-[92px] bg-[#043873] py-4 px-[220px] flex items-center justify-between">
        <div className="header-logo w-[191px] h-[34px]">
          <Image src={logo} alt="Brand Logo"></Image>
        </div>
        <div className="w-[737.5px] h-[60px] flex gap-[60px] items-center justify-between">
          <nav className="w-[549px] h-[23px]">
            <ul className="nav-list flex gap-[32px] text-lg leading-[23px] text-white font-medium font-[#043873]">
              <li className="cursor-pointer hover:text-[#FFE492]">Products</li>
              <li className="cursor-pointer hover:text-[#FFE492]">Solutions</li>
              <li className="cursor-pointer hover:text-[#FFE492]">Resources</li>
              <li className="cursor-pointer hover:text-[#FFE492]">Pricing</li>
            </ul>
          </nav>
          <div className="login-btn w-[126px] h-[60px]">
            <button className="nav-login-btn rounded-lg py-4 px-10 bg-[#FFE492] text-lg leading-[23px] font-medium tracking-[-2%]">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
