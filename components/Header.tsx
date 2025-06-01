"use client";

import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaCircleQuestion } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const [scroll, setScroll] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const pathname = usePathname();
  const { push } = useRouter();

  const menu = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT US",
      href: "/about",
    },
    {
      name: "PRODUCTS",
      href: "/products",
    },
    {
      name: "SPECIAL OFFERS",
      href: "/offers",
    },

    {
      name: "CONTACT",
      href: "/contact",
    },
  ];
  type menuItem = (typeof menu)[number];

  const click = (item: menuItem) => {
    push(item.href);
    setOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  React.useEffect(() => {
    const scrollHandler = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scroll) setScroll(isScrolled);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scroll]);

  return (
    <header
      className={`flex items-center justify-between w-full z-50 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-15 transition-all duration-300
            ${
              scroll
                ? "fixed bg-white shadow-md h-16 sm:h-20"
                : "absolute text-white h-24 sm:h-32"
            }`}
    >
      {scroll ? (
        <Image
          src="/logo2.png"
          width={300}
          height={60}
          alt="FreshMart Supermarket"
          className="w-32 sm:w-40 md:w-[200px] lg:w-[250px]"
        />
      ) : (
        <Image
          src="/logo.png"
          width={300}
          height={60}
          alt="FreshMart Supermarket"
          className="w-32 sm:w-40 md:w-[200px] lg:w-[300px]"
        />
      )}
      <div className="space-y-3 sm:space-y-5 hidden lg:block">
        <ul
          className={`justify-end text-sm font-medium ${
            scroll ? "hidden" : "flex flex-wrap gap-2"
          }`}
        >
          <li className="flex items-center px-2 xl:px-4   text-nowrap hover:text-gray-600 cursor-pointer">
            <BiSolidPhoneCall className="text-xl" />
            +1 (555) 123-4567
          </li>
          <li className="flex items-center gap-x-1 px-2 xl:px-4   hover:text-gray-600 cursor-pointer">
            <FaCircleQuestion />
            Store Hours
          </li>
          <li className="px-2 xl:px-4   text-nowrap hover:text-gray-600 cursor-pointer">
            Loyalty Program
          </li>
          <li className="px-2 xl:px-4   hover:text-gray-600 cursor-pointer">
            Delivery
          </li>
          <li className="px-2 xl:px-4   hover:text-gray-600 cursor-pointer">
            Careers
          </li>
          <li className="px-2">
            <input
              type="search"
              placeholder="Search products..."
              className="pl-2 text-sm font-normal rounded-md border-1 text-black bg-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500 w-32 sm:w-40"
              value={searchQuery}
              onChange={handleSearch}
            />
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center gap-2 lg:gap-6">
          {menu.map((item) => (
            <li
              key={item.name}
              className={`text-base xl:text-lg text-nowrap font-semibold flex items-center cursor-pointer hover:border-b-2
                                ${
                                  pathname === item.href && scroll
                                    ? "border-b-2 border-blue-400"
                                    : pathname === item.href && !scroll
                                    ? "border-b-2 border-blue-400"
                                    : ""
                                }`}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
          <li
            onClick={() => push("/login")}
            className="p-2 bg-blue-400 text-white text-base xl:text-lg text-nowrap font-semibold cursor-pointer rounded-b-2xl rounded-tl-2xl hover:bg-blue-500"
          >
            LOGIN/SIGNUP
          </li>
        </ul>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="py-1 px-3 border cursor-pointer border-gray-400 text-gray-400 rounded-md lg:hidden"
      >
        <IoMdMenu className="size-6 sm:size-8" />
      </button>
      {open && (
        <nav className="absolute top-0 right-0 h-screen w-64 sm:w-80 bg-gray-100 shadow-lg z-20 text-blue-400 lg:hidden">
          <button
            className="p-4 text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => setOpen(false)}
          >
            <IoClose />
          </button>
          <ul className="flex flex-col">
            {menu.map((item) => (
              <li
                key={item.name}
                className="p-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
                onClick={() => click(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
