import Image from "next/image";
import { GiBrain } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { TfiCrown } from "react-icons/tfi";
import { TfiMedall } from "react-icons/tfi";
import { LuListTodo } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5";
import home from "@/public/home.png";

export default function AboutUs() {
  return (
    <>
      <div className=""></div>
      <div className=" ">
        <section className="relative   md:w-full ">
          <div className=" inset-0 z-10 opacity-80  ">
            <Image
              src={home}
              alt="Snowflake Logo"
              width={1440}
              height={350}
              className="h-[750px] object-fit  border-b border-blue shadow-xl  brightness-50 hover:brightness-65 transform-all duration-400 "
            />
          </div>
          <div className="absolute top-[602px] w-full  ">
            <Image
              src="https://www.actindo.com/hubfs/Divider-wave-speed-light.svg"
              alt="Divider wave"
              width={1440} // Set appropriate width
              height={100} // Set appropriate height
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="text-white text-bold text-center space-y-5 wrap max-w-[800px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="text-4xl font-bold mx-auto">ABOUT US</h1>
          </div>
        </section>
        <section className="space-y-10"></section>
      </div>

      <section className="flex  my-20 grid grid-cols-3 gap-x-10 px-10">
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

      {/* Values Section */}
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
  );
}
