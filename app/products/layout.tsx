import Image from "next/image"
import SideBar from "@/components/SideBar"

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
                <aside className="w-full lg:w-1/5 lg:block">
                    <div className="lg:hidden mb-4">
                        <button className="w-full p-2 bg-black text-white rounded-lg">
                            Filter Products
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <SideBar/>
                    </div>
                </aside>
                <section className="w-full lg:w-4/5">{children}</section>
            </div>
        </>
    )
}