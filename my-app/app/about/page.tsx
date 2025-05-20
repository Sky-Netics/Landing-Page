import Link from "next/link"
import Image from "next/image"
import home from "@/public/home.png"
import { GiBrain } from "react-icons/gi"
import { VscLaw } from "react-icons/vsc"
import { TfiCrown } from "react-icons/tfi"
import { TfiMedall } from "react-icons/tfi"
import { LuListTodo } from "react-icons/lu"
import { BiDonateHeart } from "react-icons/bi"
import { FaChevronRight } from "react-icons/fa"
import { IoSnowOutline } from "react-icons/io5"
import { RiArrowDropRightLine } from "react-icons/ri"

export default function AboutUs() {
  return (
    <>
      <section className="relative mb-50">
        <Image
          src={home}
          alt="Snowflake Logo"
          width={1440}
          height={350}
          className="w-full max-h-screen opacity-80 brightness-50 hover:brightness-65 transform-all duration-400"
        />
        <Image
          src="https://www.actindo.com/hubfs/Divider-wave-speed-light.svg"
          alt="Divider wave"
          width={1440}
          height={100}
          className="w-full absolute bottom-0"
        />
        <div className="text-white text-bold text-center space-y-5 wrap max-w-[800px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <h1 className="text-4xl font-bold mx-auto">ABOUT US</h1>
        </div>
      </section>
      <section className="my-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">9,437</h6>
          <h6 className="font-extrabold text-xl">Global customers</h6>
          <p className="text-black">
            Thousands of organizations around the world rely on Snowflake to
            unite siloed data, discover and securely share data and execute
            diverse workloads.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            Customer Stories <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">4.2B</h6>
          <h6 className="font-extrabold text-xl">Daily Queries</h6>
          <p className="text-black">
            Together, Snowflake customers have more than 4.2 B of data queries
            on the Data Cloud, with more than 515 million data workloads that
            run each day.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            Snowflake Platform <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">2,416</h6>
          <h6 className="font-extrabold text-xl">Marketplace Listings</h6>
          <p className="text-black">
            Find, try and buy ready-to-use data and applications from the
            Snowflake Marketplace to enhance your data and power innovative
            business solutions.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            Snowflake Marketplace <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
      </section>
      <section className="py-20 mx-4 px-4 space-y-20">
        {/* Leadership Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="text-[#249EDC]">MEET OUR</span> LEADERSHIP
          </h2>
          <p className="text-lg text-gray-600 ">
            Every employee matters at Snowflake. Meet the team that harnesses
            all that talent and passion.
          </p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Leadership Team - Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">LEADERSHIP TEAM</h3>
              <p className="text-gray-600">
                Snowflake CEO Sridhar Ramaswamy and the rest of our executive
                team are seasoned experts.
              </p>
              <button className="bg-[#249EDC] hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition">
                MEET THE TEAM
              </button>
            </div>
            <div className="lg:order-last">
              <Image
                src="/leadership.png"
                alt="Leadership team"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover  brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
          </div>

          {/* Board of Directors - Image Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/board.png"
                alt="Board of directors"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">BOARD OF DIRECTORS</h3>
              <p className="text-gray-600">
                Thanks to the guidance of our board, Snowflake continues to
                serve customers worldwide.
              </p>
              <button className="bg-[#249EDC] hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition">
                MEET THE TEAM
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-4xl font-bold">OUR VALUES</h2>
          <p className="text-lg text-gray-600">
            Our values represent who we are, at our best. We seek to exhibit
            these values every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-12">
          {[
            { icon: <TfiCrown />, title: "Integrity Always" },
            { icon: <VscLaw />, title: "Put Customers First" },
            { icon: <GiBrain />, title: "Think Big" },
            { icon: <TfiMedall />, title: "Be Excellent" },
            { icon: <LuListTodo />, title: "Get It Done" },
            { icon: <BiDonateHeart />, title: "Own It" },
            { icon: <IoSnowOutline />, title: "Embrace Differences" },
            { icon: <TfiCrown />, title: "Customer Focus" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center space-y-4 hover:shadow-md transition"
            >
              <div className="bg-[#249EDC] inline-flex items-center justify-center rounded-full w-16 h-16 text-white text-2xl mx-auto">
                {item.icon}
              </div>
              <h6 className="font-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-20 mb-20">
        <h2 className="text-3xl font-bold text-center">OUR OFFICES</h2>
        <div className="flex px-5 space-x-5 items-center max-w-[1000px] mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-bold">SNOWFLAKE SPANS THE GLOBE</h4>
            <p>{`We're globally-distributed enterprise, with more than 6,780+ employees working in over 40+ offices worldwide (as of October 2023).`}</p>
            <button className="bg-[#249EDC] text-white text-sm font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-blue-600">
              SEE OUR LOCATIONS
            </button>
          </div>
          <Image
            src="/office.png"
            alt="Leadership team"
            width={600}
            height={300}
            className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
          />
        </div>
      </section>
      <section className="px-5 lg:px-15 xl:px-25 my-10">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/4 mb-6 md:mb-0 relative before:absolute before:top-[-15px] before:left-[-15px] before:border-t-20 before:border-l-6 before:border-gray-200 after:absolute after:top-[-15px] after:left-[-15px] after:border-t-6 after:border-l-20 after:border-gray-200">
            <h2 className="text-4xl font-bold tracking-wider">
              Our
              <br />
              Services
            </h2>
          </div>
          <div className="w-full sm:w-3/4 space-y-10">
            <div>
              <div className="flex justify-between items-center text-orange-400 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Waste Management</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>UCO Collecting</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Collect Request</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Fresh Pickups</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center text-green-700 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">International Waste Trade</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>UCO Collecting</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Collect Request</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Fresh Pickups</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Oit & Fat Processing</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="px-12 sm:px-25 mb-20">
      <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 w-full p-10 pl-32 space-y-5 relative">
        <Image src="/perfume.png" alt="Perfume" width={150} height={150} className="absolute left-[-40px] top-[-40px]"/>
        <h4 className="text-3xl font-semibold">Need to trade your International Waste?</h4>
        <p className="text-gray-500">We are here for you to offer Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        <button className="text-green-700 border-b-2 cursor-pointer hover:text-green-800">Read More Here</button>
      </div>
    </section>
      <section className="md:space-x-4 space-y-4">
        <div className="relative w-full py-8 px-5 md:px-8 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/armenia2.jpg"
              alt="City background"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center opacity-60"
              style={{ filter: "blur(3px)" }}
            />
          </div>

          <div className="absolute inset-0 bg-[#1a2234] opacity-70 brightness-20"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-10">
              How UCO collection works?
            </h2>

            <div className="md:hidden space-y-6 space-x-16">
              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">01</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Schedule
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Schedule your desired time via website, app, or phone.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">02</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Contract and Bin Delivery
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Our representative will arrive at the agreed time for
                    contract signing and bin handover.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">03</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Rewards & Fresh Pickups
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Cash, bank transfers, or a wide range of competitively
                    priced fresh products.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">04</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Regular Collection Day
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Routine visits for oil collection at scheduled intervals or
                    based on your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">01</div>
                  </div>
                </div>

                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">02</div>
                  </div>
                </div>

                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">03</div>
                  </div>
                </div>

                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">04</div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Schedule
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Schedule your desired time via website, app, or phone.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Contract and Bin Delivery
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Our representative will arrive at the agreed time for
                    contract signing and bin handover.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Rewards & Fresh Pickups
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Cash, bank transfers, or a wide range of competitively
                    priced fresh products.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Regular Collection Day
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Routine visits for oil collection at scheduled intervals or
                    based on your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div className=" space-x-2 space-y-16">
              <h2 className="text-3xl md:text-3xl  font-bold text-slate-800">
                Who we are?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
               
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div>

              
                <div className="relative bg-gray-100 p-6 rounded-lg">
                    <div className="absolute -top-1 -right-1 w-8 h-8">
                    <div className="absolute top-0 right-0 w-8 h-2 bg-black"></div>
                    <div className="absolute top-0 right-0 w-2 h-8 bg-black"></div>
                    </div>
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">
                        Vans & Drivers
                        </h3>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-slate-800">
                        230+
                        </span>
                    </div>
                    </div>
                </div>
              </div>

              <div className="relative bg-gray-100 p-6 rounded-sm">
                <div className="absolute -top-1 -left-1 w-8 h-8">
                  <div className="absolute top-0 left-0 w-8 h-2 bg-green-500"></div>
                  <div className="absolute top-0 left-0 w-2 h-8 bg-green-500"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      International
                      <br />
                      Clients
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-green-500">
                      230+
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-100 p-6 rounded-sm">
                <div className="absolute -bottom-1 -right-1 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-8 h-2 bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-8 bg-yellow-500"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      UCO
                      <br />
                      Collection
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-yellow-500">
                      230+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-80 bg-[#11567F] content-center">
        <div className="flex max-w-[1000px] mx-auto items-center flex-col gap-y-10">
          <h2 className="text-white text-3xl font-semibold flex">POLICES</h2>
          <div className="grid sm:grid-cols-2 space-x-10 w-full">
            <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
              <h4 className="text-xl font-semibold">
                Global Code of Conduct and Ethics
              </h4>
              <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">
                Read More <FaChevronRight />
              </button>
            </div>
            <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
              <h4 className="text-xl font-semibold">
                Business Partner Standards of Conduct
              </h4>
              <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">
                Read More <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}