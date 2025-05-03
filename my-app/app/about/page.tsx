import Image from "next/image"
import { GiBrain } from "react-icons/gi"
import { VscLaw } from "react-icons/vsc"
import { TfiCrown } from "react-icons/tfi"
import { TfiMedall } from "react-icons/tfi"
import { LuListTodo } from "react-icons/lu"
import { BiDonateHeart } from "react-icons/bi"
import { FaChevronRight } from "react-icons/fa"
import { IoSnowOutline } from "react-icons/io5"

export default function AboutUs() {
    return (
        <>
            <div className="w-full h-96 bg-[#249EDC] content-center place-items-center space-y-3 text-center">
                <h4 className="text-white">ABOUT SNOWFLAKE</h4>
                <h3 className="text-6xl font-semibold">HOW IT ALL STARTED</h3>
                <p>{`In a decade, Snowflake has become a global force to help mobilize the world's data`}</p>
            </div>
            <section className="mt-[-5rem] space-y-10">
                <Image src="/twoman.png" alt="Two man" width={600} height={200} className="place-self-center"/>
                <p className="sm:px-60 text-center">{`Snowflake founders started from scratch and built a data platform that would harness the immense power of the cloud. But their vision didn't stop there. They engineered Snowflake to power the Data Cloud, where thousands of organizations have seamless access to explore, share and unlock the true value of their data.`}</p>
            </section>
            <section className="my-20 grid grid-cols-3 gap-x-10 px-10">
                <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
                    <h6 className="text-4xl font-black">9,437</h6>
                    <h6 className="font-extrabold text-xl">Global customers</h6>
                    <p className="text-black">Thousands of organizations around the world rely on Snowflake to unite siloed data, discover and securely share data and execute diverse workloads.</p>
                    <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">Customer Stories <FaChevronRight className="text-[0.750rem]"/></button>
                </div>
                <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
                    <h6 className="text-4xl font-black">4.2B</h6>
                    <h6 className="font-extrabold text-xl">Daily Queries</h6>
                    <p className="text-black">Together, Snowflake customers have more than 4.2 B of data queries on the Data Cloud, with more than 515 million data workloads that run each day.</p>
                    <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">Snowflake Platform <FaChevronRight className="text-[0.750rem]"/></button>
                </div>
                <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
                    <h6 className="text-4xl font-black">2,416</h6>
                    <h6 className="font-extrabold text-xl">Marketplace Listings</h6>
                    <p className="text-black">Find, try and buy ready-to-use data and applications from the Snowflake Marketplace to enhance your data and power innovative business solutions.</p>
                    <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">Snowflake Marketplace <FaChevronRight className="text-[0.750rem]"/></button>
                </div>
            </section>
            <section className="space-y-20">
                <div className="max-w-[700px] place-self-center text-center space-y-3">
                    <h2 className="text-3xl font-bold"><span className="text-[#249EDC]">MEET OUR</span> LEADERSHIP</h2>
                    <p>Every employee matters at Snowflake. Meet the team that harnesses all that talent and passion, so we can continue to deliver world-class technology to our customers.</p>
                </div>
                <div className="flex px-5 items-center max-w-[1000px] mx-auto">
                    <div className="space-y-3">
                        <h4 className="text-xl font-bold">LEADERSHIP TEAM</h4>
                        <p>Snowflake CEO Sridhar Ramaswamy and the rest of our executive team are seasoned experts committed to building an exceptional technology company.</p>
                        <button className="bg-[#249EDC] text-white text-sm font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-blue-600">MEET THE TEAM</button>
                    </div>
                    <Image src="/leadership.png" alt="Leadership team" width={900} height={300}/>
                </div>
                <div className="flex px-5 items-center max-w-[1000px] mx-auto gap-x-5">
                    <Image src="/board.png" alt="Board of directors" width={800} height={300}/>
                    <div className="space-y-3">
                        <h4 className="text-xl font-bold">BOARD OF DIRECTORS</h4>
                        <p>Thanks to the guidance of our board, Snowflake continue to serve customers around the world with the Data Cloud</p>
                        <button className="bg-[#249EDC] text-white text-sm font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-blue-600">MEET THE TEAM</button>
                    </div>
                </div>
            </section>
            <section className="my-20 space-y-10">
                <div className="max-w-[700px] place-self-center text-center space-y-3">
                    <h2 className="text-3xl font-bold">OUR VALUES</h2>
                    <p>{`Our values represent who we are, at our best. We seek to exhibit these values every day. We focus on doing what's right for our customers, shareholders and employees.`}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-[1000px] mx-auto">
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <TfiCrown/>
                        </div>
                        <h6 className="font-semibold">Integrity Always</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <VscLaw/>
                        </div>
                        <h6 className="font-semibold">Put Customers First</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <GiBrain/>
                        </div>
                        <h6 className="font-semibold">Think Big</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <TfiMedall/>
                        </div>
                        <h6 className="font-semibold">Be Excellent</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <LuListTodo/>
                        </div>
                        <h6 className="font-semibold">Get It Done</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <BiDonateHeart/>
                        </div>
                        <h6 className="font-semibold">Own It</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <IoSnowOutline/>
                        </div>
                        <h6 className="font-semibold text-center">{`Embrace Each Other's Differences`}</h6>
                    </div>
                    <div className="bg-white rounded-xl shadow place-items-center space-y-4 py-5">
                        <div className="bg-[#249EDC] inline-block rounded-full p-5 text-white text-2xl">
                            <TfiCrown/>
                        </div>
                        <h6 className="font-semibold">Put Customers First</h6>
                    </div>
                </div>
            </section>
            <section className="space-y-20 mb-20">
                <h2 className="text-3xl font-bold text-center">OUR OFFICES</h2>
                <div className="flex px-5 space-x-5 items-center max-w-[1000px] mx-auto">
                    <div className="space-y-3">
                        <h4 className="text-xl font-bold">SNOWFLAKE SPANS THE GLOBE</h4>
                        <p>{`We're globally-distributed enterprise, with more than 6,780+ employees working in over 40+ offices worldwide (as of October 2023).`}</p>
                        <button className="bg-[#249EDC] text-white text-sm font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-blue-600">SEE OUR LOCATIONS</button>
                    </div>
                    <Image src="/office.png" alt="Leadership team" width={600} height={300}/>
                </div>
            </section>
            <section className="h-80 bg-[#11567F] content-center">
                <div className="flex max-w-[1000px] mx-auto items-center flex-col gap-y-10">
                    <h2 className="text-white text-3xl font-semibold flex">POLICES</h2>
                    <div className="grid sm:grid-cols-2 space-x-10 w-full">
                        <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
                            <h4 className="text-xl font-semibold">Global Code of Conduct and Ethics</h4>
                            <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">Read More <FaChevronRight/></button>
                        </div>
                        <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
                            <h4 className="text-xl font-semibold">Business Partner Standards of Conduct</h4>
                            <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">Read More <FaChevronRight/></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}