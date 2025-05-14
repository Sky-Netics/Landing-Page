import Image from "next/image"
import SideBar from "@/components/SideBar"

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <Image src="/supermarket2.jpg" width={1600} height={850} alt="Ship" className="brightness-50 h-[350px] object-cover"/>
            <div className="flex gap-x-5 p-5">
                <div className="w-1/5 hidden lg:block"><SideBar/></div>
                <section className="lg:w-4/5 w-full">{children}</section>
            </div>
        </>
    )
}