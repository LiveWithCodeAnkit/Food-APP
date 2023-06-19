import React from "react";
import { menuLinks } from "../consonets/Sidebar/menuLinks";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[#0071c5] h-[100vh] w-1/2 font-Inter text-white lg:w-1/6">
        <nav>
          <ul className="flex flex-col justify-center items-start py-28 px-10 gap-6">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <a href={item.path} className="hover:text-white">
                  {item.tittle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
