import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Events", url: "/" },
  { id: 3, name: "Create", url: "/create" },
];

const MenuMobile = ({ setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-black/[0.5] border-t text-white z-50">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="py-4 px-5 border-b">
              <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
