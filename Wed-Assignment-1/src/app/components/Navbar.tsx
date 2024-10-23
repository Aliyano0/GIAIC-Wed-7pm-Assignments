"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Jobs", path: "/jobs" },
    { id: 5, name: "Engineering", path: "/jobs/engineering" },
  ];

  return (
    <div>
      <header className="w-full h-28 bg-indigo-500 flex justify-between items-center px-7">
        <div className="logo w-[23%] text-white">
          <h1 className="font-bold text-4xl">GIAIC ASSIGNMENT-1</h1>
        </div>
        <nav className="w-[50%]">
          <ul className="flex justify-evenly items-center text-2xl font-bold lg:gap-0 gap-3">
            {navLinks.map((data) => {
              return (
                <li
                  key={data.id}
                  className={`hover:cursor-pointer hover:text-orange-400 ${
                    isActive(data.path) ? "text-orange-400" : "text-white"
                  }`}
                >
                  <Link href={data.path}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
