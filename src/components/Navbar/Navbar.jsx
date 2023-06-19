import React from "react";
import { useNavbar } from "./hook/useNavbar";
import { menuLinks } from "../consonets/Sidebar/menuLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { time } = useNavbar();
  return (
    <>
      <div className="bg-[#0071c5]  border-gray-200 dark:bg-gray-900 flex h-10 justify-center w-auto items-center md:justify-around">
        <h1 className="text-white  font-bold text-center text-2xl">Food App</h1>
        <nav>
          <ul className="flex  justify-center items-start text-white text-2xl gap-6">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.path} className="">
                  {item.tittle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <div className="hidden justify-center items-center gap-2 text-2xl text-white   md:flex">
          <span>{dayName}</span>
          <span>{monthName}</span>
          <span>{date}</span>
          <span>{year}</span>
        </div> */}
        <div className="hidden text-2xl text-white lg:block">
          <span>{time}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
