"use client"

import React from "react"
import Image from "next/image"
import { IoMdMenu } from "react-icons/io"
import { BiSolidPhoneCall } from "react-icons/bi"
import { FaCircleQuestion } from "react-icons/fa6"

export const Header: React.FC= () =>{
    const [scroll, setScroll] = React.useState<boolean>(false);
    const [active, setActive] = React.useState<string>("HOME");

    const menu= [
        "HOME",
        "ABOUT",
        "COLLECTION",
        "SHOP",
        "RECYCLE SOLUTION",
        "CONTACT US"
    ]

    React.useEffect(() =>{
        const scrollHandler= () =>{
          const isScrolled= window.scrollY> 100
          if (isScrolled !== scroll) setScroll(isScrolled)
        }

        window.addEventListener("scroll", scrollHandler)
        return () =>{
          window.removeEventListener("scroll", scrollHandler)
        }
      }, [scroll])
    
    return(
        <header className={`flex items-center justify-between w-full z-50 px-20 transition-all duration-300 ${
            scroll ? "fixed bg-white shadow-md text-green-700 h-20" : "absolute text-white h-32"
          }`}>
            {scroll ? 
                <Image src="/logo2.png" width={300} height={60} alt="Logo" className="w-1/2 sm:w-[250px]"/>
                : 
                <Image src="/logo.png" width={300} height={60} alt="Logo" className="w-1/2 sm:w-[300px]"/>
            }
            <div className="space-y-5 hidden lg:block">
                <ul className={`justify-end text-sm font-medium ${scroll ? "hidden" : " flex"}`}>
                    <li className="flex items-center px-2 xl:px-4 border-r border-r-white text-nowrap hover:text-black cursor-pointer">
                        <BiSolidPhoneCall className="text-xl"/>+49 (0) 5363 - 810 3 750
                    </li>
                    <li className="flex items-center gap-x-1 px-2 xl:px-4 border-r border-r-white hover:text-black cursor-pointer">
                        <FaCircleQuestion/>FAQ
                    </li>
                    <li className="px-2 xl:px-4 border-r border-r-white text-nowrap hover:text-black cursor-pointer">PORTAL 360</li>
                    <li className="px-2 xl:px-4 border-r border-r-white hover:text-black cursor-pointer">REGULATIONS</li>
                    <li className="px-2 xl:px-4 border-r border-r-white hover:text-black cursor-pointer">CAREERS</li>
                    <li className="px-2">
                        <input type="search" placeholder="Search"
                            className="text-sm font-normal pl-2 text-black max-w-44 w-full bg-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        />
                    </li>
                </ul>
                <ul className="flex justify-center">
                    {menu.map((item) =>(
                        <li key={item} onClick={() => setActive(item)}
                            className={`xl:text-lg text-nowrap font-semibold flex items-center cursor-pointer lg:mx-2 xl:mx-4 hover:border-b-2
                                ${active=== item ? "border-b-2 border-white" : ""}`
                            }
                        >
                            {item}
                        </li>
                    ))}
                    <li className="p-2 bg-yellow-500 text-white xl:text-lg text-nowrap font-semibold cursor-pointer rounded-b-2xl rounded-tl-2xl hover:border-b-2 border-b-gray-300">
                        ONE CLICK PICKUP
                    </li>
                </ul>
            </div>
            <button className="py-1 px-3 border cursor-pointer border-gray-400 text-gray-400 rounded-md lg:hidden">
                <IoMdMenu className="size-8"/>
            </button>
        </header>
    )
}