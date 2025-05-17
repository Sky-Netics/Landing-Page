"use client"

import Image from "next/image"
import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import { Input } from "@/components/Input"
import { FaPhoneAlt } from "react-icons/fa"
import { TextArea } from "@/components/Textarea"
import { MdEmail, MdLocationPin  } from "react-icons/md"

const MapContainer= dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer= dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)

export default function AboutUs() {
  const position= [48.2082, 16.3738]

  return (
    <main className="space-y-10 pb-10">
      <section className="place-items-center content-end text-center h-[350px] relative">
        <Image 
          src="/supermarket3.jpg" 
          width={1920} 
          height={1080} 
          alt="Ship" 
          className="brightness-50 absolute top-0 h-[350px] object-cover"
        />
        <div className="bg-white text-blue-500 py-1.5 px-3 rounded-lg">WRITE TO US</div>
        <h2 className="text-4xl">Get In Touch</h2>
      </section>
      <section className="flex flex-col sm:flex-row justify-center px-5 lg:px-0 gap-y-10 gap-x-5 md:gap-x-10 xl:gap-x-20">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold tracking-wider">Contacts</h2>
          <span className="flex flex-wrap gap-y-5 justify-between items-center">
            <div className="flex items-center gap-x-2.5">
              <FaPhoneAlt/>
              <div>
                <h4 className="text-sm">Call us</h4>
                <h6 className="font-bold text-sm">+374 10 73 12 62</h6>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5">
              <MdEmail className="text-xl"/>
              <div>
                <h4 className="text-sm">Write to us</h4>
                <h6 className="font-bold text-sm">info@mariannadairy.com</h6>
              </div>
            </div>
          </span>
          <span className="flex items-center gap-x-2.5">
            <MdLocationPin className="text-xl"/>
            <h6 className="text-sm font-bold">Legal address: Haghtanak district, 6/17, Yerevan, Armenia, 0081</h6>
          </span>
          <span className="flex items-center gap-x-2.5">
            <MdLocationPin className="text-xl"/>
            <h6 className="text-sm font-bold">Activity address: Haghtanak district, 6/17, Yerevan, Armenia, 0081</h6>
          </span>
          <div className="h-[300px]">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-bold tracking-wider">Write us!</h2>
          <p className="text-gray-500">Get in touch with us using the enquriry form or contact details below.</p>
          <form className="space-y-5">
            <Input label="Name"/>
            <Input label="Email"/>
            <Input label="Subject"/>
            <TextArea label="Message"/>
            <button className="text-white rounded py-2 px-6 mb-20 font-medium cursor-pointer bg-blue-500 hover:bg-blue-700">Send</button>
          </form>
        </div>
      </section>
    </main>
  )
}