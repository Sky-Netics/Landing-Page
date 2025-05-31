import Image from "next/image"
import SideBar from "@/components/SideBar"
import { IoSearchOutline } from "react-icons/io5"

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <Image
                alt="Ship"
                width={1440}
                height={350}
                src="/supermarket2.jpg"
                className="brightness-50 w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
            />
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 p-4 sm:p-5">
                <aside className="w-1/5 hidden space-y-5 lg:block">
                    <div className="flex px-4 py-3 gap-x-1.5 rounded-lg border text-gray-600 border-gray-300 hover:border-gray-500">
                        <IoSearchOutline className="mt-1"/>
                        <input type="search" placeholder="What are you looking for?" className="outline-none bg-transparent"/>
                    </div>
                    <SideBar/>
                </aside>
                <section className="w-full lg:w-4/5">{children}</section>
            </div>
        </>
    )
}