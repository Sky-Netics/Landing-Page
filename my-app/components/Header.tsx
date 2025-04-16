"use client"

import React from "react"
import Image from "next/image"
import { BiSolidPhoneCall } from "react-icons/bi"
import { FaCircleQuestion } from "react-icons/fa6"

export const Header: React.FC= () =>{
    const [active, setActive] = React.useState('HOME');

    const menu= [
        "HOME",
        "ABOUT",
        "COLLECTION",
        "SHOP",
        "RECYCLE SOLUTION",
        "CONTACT US"
    ]
    
    return(
        <header className="h-32 flex items-center justify-between absolute top-0 w-full z-10 px-10">
            <Image src="/logo.png" width={170} height={51} alt="Logo"/>
            <div className="text-white space-y-8">
                <ul className="flex justify-end">
                    <li className="flex items-center px-2 border-r border-r-white hover:text-black cursor-pointer">
                        <BiSolidPhoneCall/>+49 (0) 5363 - 810 3 750
                    </li>
                    <li className="flex items-center px-2 border-r border-r-white hover:text-black cursor-pointer">
                        <FaCircleQuestion/>FAQ
                    </li>
                    <li className="px-2 border-r border-r-white hover:text-black cursor-pointer">PORTAL 360</li>
                    <li className="px-2 border-r border-r-white hover:text-black cursor-pointer">REGULATIONS</li>
                    <li className="px-2 border-r border-r-white hover:text-black cursor-pointer">CAREERS</li>
                    <li className="px-2">
                        <input type="search" placeholder="Search" className="text-sm font-normal pl-2 text-black max-w-44 w-full bg-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
                    </li>
                </ul>
                <ul className="flex text-white justify-center">
                    {menu.map((item) => (
                        <li key={item} className={`text-lg font-semibold flex items-center cursor-pointer mx-4 hover:border-b-2 ${active === item ? "border-b-2 border-white" : ""}`}onClick={() => setActive(item)}>
                            {item}
                        </li>
                    ))}
                    <li className="p-2 bg-yellow-500 text-lg font-semibold cursor-pointer rounded-b-2xl rounded-tl-2xl hover:bg-yellow-700">
                        ONE CLICK PICKUP
                    </li>
                </ul>
            </div>
        </header>
    )
}