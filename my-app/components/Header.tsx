import Image from "next/image"
import { IoIosArrowDown, IoIosSearch } from "react-icons/io"
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"
import { MdOutlineShoppingCart, MdPhoneInTalk, MdOutlineMenu } from "react-icons/md"

export const Header: React.FC= () =>{
    return(
        <header className="md:h-32 py-1 flex justify-between items-center px-2 absolute top-0 z-10 w-full md:bg-transparent lg:border-b border-b-gray-400">
            <Image src="/logo.png" width={170} height={51} alt="Logo"/>
            <div className="flex gap-x-2 text-white">
                <div className="p-2 rounded-full bg-gray-400 opacity-50 cursor-pointer hover:opacity-90">
                    <FaTwitter/>
                </div>
                <div className="p-2 rounded-full bg-gray-400 opacity-50 cursor-pointer hover:opacity-90">
                    <FaFacebook/>
                </div>
                <div className="p-2 rounded-full bg-gray-400 opacity-50 cursor-pointer hover:opacity-90">
                    <FaInstagram/>
                </div>
                <div className="p-2 rounded-full bg-gray-400 opacity-50 cursor-pointer hover:opacity-90">
                    <FaPinterest/>
                </div>
            </div>
            <ul className="hidden items-center gap-x-10 text-white lg:flex lg:gap-x-5 xl:gap-x-10">
                <li className="flex items-center gap-x-0.5">Home <IoIosArrowDown className="text-sm"/></li>
                <li>About</li>
                <li className="flex items-center gap-x-0.5">Services <IoIosArrowDown className="text-sm"/></li>
                <li className="flex items-center gap-x-0.5">Projects <IoIosArrowDown className="text-sm"/></li>
                <li className="flex items-center gap-x-0.5">News <IoIosArrowDown className="text-sm"/></li>
                <li className="flex items-center gap-x-0.5">Shop <IoIosArrowDown className="text-sm"/></li>
                <li>Contact</li>
            </ul>
            <div className="text-white text-2xl sm:flex items-center hidden sm:gap-x-5 border-l-2 border-l-gray-400 pl-5">
                <IoIosSearch/>
                <div className="relative">
                    <MdOutlineShoppingCart/>
                    <span className="bg-green-500 text-xl rounded-full absolute top-[-5px] right-[-5px] size-4 flex justify-center items-center">0</span>
                </div>
                <MdPhoneInTalk className="text-yellow-500 text-3xl border-2 border-yellow-500 p-1 rounded-full"/>
            </div>
            <div className="bg-white text-2xl rounded-md cursor-pointer sm:hidden hover:bg-black hover:text-white">
                <MdOutlineMenu/>
            </div>
        </header>
    )
}