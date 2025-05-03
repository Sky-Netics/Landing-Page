import Image from "next/image"
import { Input } from "@/components/Input"
import { TextArea } from "@/components/Textarea"
import { MdOutlineMailOutline } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function AboutUs() {
    return (
        <div className="bg-white">
            <div className="h-60 bg-blue-500 content-end place-items-center space-y-3 text-center pb-10 mb-10">
                <div className="bg-white text-blue-500 py-1.5 px-3 rounded-lg">WRITE TO US</div>
                <h2 className="text-white text-4xl">Get In Touch</h2>
            </div>
            <section className="max-w-[1000px] mx-auto grid grid-cols-2 gap-x-10">
                <div className="space-y-5">
                    <h2 className="text-3xl">Lets Talk!</h2>
                    <p className="text-gray-500">Get in touch with us using the enquriry form or contact details below.</p>
                    <hr className="text-gray-300"/>
                    <div className="flex gap-x-5">
                        <Input label="First Name"/>
                        <Input label="Last Name"/>
                    </div>
                    <Input label="Email"/>
                    <TextArea label="Message"/>
                    <label className="flex items-center gap-x-2">
                        <input type="checkbox" className="size-4"/>
                        I agree to receive other communication messages.<span className="text-red-500 text-xl">*</span>
                    </label>
                    <label className="flex items-center gap-x-2">
                        <input type="checkbox" className="size-4"/>
                        I give my consent to ROI4Presenter to store my data.<span className="text-red-500 text-xl">*</span>
                    </label>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore eligendi quisquam porro voluptatum soluta neque praesentium mollitia qui perspiciatis eos quasi iste culpa ipsam beatae, ipsa voluptas. Voluptatum, omnis?</p>
                    <button className="text-white rounded py-2 px-6 mb-20 font-medium cursor-pointer bg-blue-500 hover:bg-blue-700">Start for Free</button>
                </div>
                <div className="space-y-5">
                    <Image src="/contact.png" alt="Man" width={400} height={200}/>
                    <div className="flex items-center gap-x-2.5">
                        <div className="text-blue-500 text-2xl border border-gray-300 rounded-lg p-1.5">
                            <MdOutlineMailOutline/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Quick Contact</h4>
                            <h6 className="text-gray-400">Email: info@roi4presenter.com</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                        <div className="text-blue-500 text-2xl border border-gray-300 rounded-lg p-1.5">
                            <FiPhone/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Phone Number</h4>
                            <h6 className="text-gray-400">Austria +43 (664) 6376611</h6>
                            <h6 className="text-gray-400">Email: info@roi4presenter.com</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                        <div className="text-blue-500 text-2xl border border-gray-300 rounded-lg p-1.5">
                            <MdOutlineMailOutline/>
                        </div>
                        <div>
                            <h4 className="font-semibold">HeadQuarter</h4>
                            <h6 className="text-gray-400">Wallgasse 13/PF42 1060 Vienna. Austria</h6>
                        </div>
                    </div>
                    <h3 className="text-3xl font-semibold">Follow us</h3>
                    <div className="text-white flex gap-x-3">
                        <div className="bg-blue-500 rounded p-1.5 inline-block cursor-pointer hover:bg-blue-700">
                            <FaFacebookF/>
                        </div>
                        <div className="bg-blue-500 rounded p-1.5 inline-block cursor-pointer hover:bg-blue-700">
                            <FaTwitter/>
                        </div>
                        <div className="bg-blue-500 rounded p-1.5 inline-block cursor-pointer hover:bg-blue-700">
                            <FaInstagram/>
                        </div>
                        <div className="bg-blue-500 rounded p-1.5 inline-block cursor-pointer hover:bg-blue-700">
                            <FaLinkedin/>
                        </div>
                        <div className="bg-blue-500 rounded p-1.5 inline-block cursor-pointer hover:bg-blue-700">
                            <FaYoutube/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}