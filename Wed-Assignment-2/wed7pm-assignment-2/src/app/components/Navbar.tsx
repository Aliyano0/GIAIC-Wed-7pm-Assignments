import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", id: 1 },
    { name: "Products", id: 2 },
    { name: "Pricing", id: 3 },
    { name: "Contact", id: 4 },
  ];
  return (
    <div className="sticky top-0 z-10 bg-[#252B42]">
      <header className="w-[1322px] h-[91px] px-[136px] mx-auto flex items-center gap-[30px]">
        <div className="navbar-brand">
          <h3 className="text-2xl font-bold ">BrandName</h3>
        </div>
        <nav className="flex items-center ml-[65px] justify-between w-[815px]">
          <ul className="flex items-center gap-[21px] font-bold text-sm">
            {navLinks.map((data) => {
              return (
                <li key={data.id} className="hover:text-[#23A6F0]">
                  <Link href={"#"}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-items flex items-center gap-[45px]">
            <div className="nav-item font-bold text-sm hover:text-[#23A6F0]">
              <Link href={"#"}>Login</Link>
            </div>
            <button className="font-bold text-sm bg-[#23A6F0] px-6 py-[15px] rounded-[5px] hover:bg-[#0b1954]">
              JOIN US
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
