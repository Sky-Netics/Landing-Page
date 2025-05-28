import Link from "next/link"
import Image from "next/image"
import { GiBrain } from "react-icons/gi"
import { VscLaw } from "react-icons/vsc"
import { TfiCrown } from "react-icons/tfi"
import { TfiMedall } from "react-icons/tfi"
import { LuListTodo } from "react-icons/lu"
import { BiDonateHeart } from "react-icons/bi"
import { FaChevronRight } from "react-icons/fa"
import { IoSnowOutline } from "react-icons/io5"
import { RiArrowDropRightLine } from "react-icons/ri"
import basket from '../../public/Untitled2.png'

export default function AboutUs() {
  return (
    <>
      <section className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="/supermarket3.jpg"
          alt="FreshMart Supermarket"
          fill
          className="object-cover object-[30%_70%] opacity-80 brightness-50 hover:brightness-65 transform-all duration-400"
        />
        <Image
          src="https://www.actindo.com/hubfs/Divider-wave-speed-light.svg"
          alt="Divider wave"
          width={1440}
          height={100}
          className="w-full absolute bottom-0"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ABOUT US</h1>
      </section>
      <section className="my-8 sm:my-12 md:my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-4 lg:px-5">
        <div className="text-center text-[#2E7D32] place-items-center space-y-2 sm:space-y-2.5">
          <h6 className="text-3xl sm:text-4xl font-black">9,437</h6>
          <h4 className="font-extrabold text-lg sm:text-xl">Global customers</h4>
          <p className="text-black text-sm sm:text-base">
            Thousands of customers around the world trust FreshMart for their daily grocery needs, enjoying quality products and exceptional service.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-green-700 text-sm sm:text-base">
            Customer Stories <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#2E7D32] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">4.2B</h6>
          <h4 className="font-extrabold text-xl">Daily Transactions</h4>
          <p className="text-black">
            Together, FreshMart customers make over 4.2 billion transactions annually, with millions of products sold each day across our stores.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-green-700">
            Shop Now <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#2E7D32] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">2,416</h6>
          <h4 className="font-extrabold text-xl">Product Categories</h4>
          <p className="text-black">
            Find everything you need from our extensive range of products, from fresh produce to household essentials, all at competitive prices.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-green-700">
            Browse Products <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 mx-3 sm:mx-4 px-3 sm:px-4 space-y-6 sm:space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-[#2E7D32]">MEET OUR</span> LEADERSHIP
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Every employee matters at FreshMart. Meet the team that ensures quality service and fresh products for our customers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">LEADERSHIP TEAM</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our experienced retail professionals lead FreshMart with a focus on quality, customer service, and innovation in the grocery industry.
              </p>
              <button className="bg-[#2E7D32] hover:bg-green-700 text-white text-sm sm:text-base font-medium rounded-full px-4 sm:px-6 py-2 sm:py-3 transition">
                MEET THE TEAM
              </button>
            </div>
            <div className="lg:order-last">
              <Image
                src="/leadership.png"
                alt="Leadership team"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <Image
                src="/supermarket2.jpg"
                alt="Our store"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">BOARD OF DIRECTORS</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Thanks to the guidance of our board, FreshMart continues to expand and serve customers with the highest quality products and service.
              </p>
              <button className="bg-[#2E7D32] hover:bg-green-700 text-white text-sm sm:text-base font-medium rounded-full px-4 sm:px-6 py-2 sm:py-3 transition">
                MEET THE TEAM
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">OUR VALUES</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Our values represent who we are, at our best. We seek to exhibit these values every day in serving our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 mt-8 sm:mt-12">
          {[
            { icon: <TfiCrown />, title: "Quality First" },
            { icon: <VscLaw />, title: "Customer Focus" },
            { icon: <GiBrain />, title: "Innovation" },
            { icon: <TfiMedall />, title: "Excellence" },
            { icon: <LuListTodo />, title: "Efficiency" },
            { icon: <BiDonateHeart />, title: "Community" },
            { icon: <IoSnowOutline />, title: "Sustainability" },
            { icon: <TfiCrown />, title: "Freshness" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 sm:p-6 text-center space-y-3 sm:space-y-4 hover:shadow-md transition"
            >
              <div className="bg-[#2E7D32] inline-flex items-center justify-center rounded-full w-12 h-12 sm:w-16 sm:h-16 text-white text-xl sm:text-2xl mx-auto">
                {item.icon}
              </div>
              <h6 className="font-semibold text-sm sm:text-base">{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-10 sm:space-y-20 mb-10 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">OUR STORES</h2>
        <div className="flex flex-col sm:flex-row px-4 sm:px-5 space-y-6 sm:space-y-0 sm:space-x-5 items-center max-w-[1000px] mx-auto">
          <div className="space-y-3 w-full sm:w-1/2">
            <h4 className="text-lg sm:text-xl font-bold">FRESHMART ACROSS THE CITY</h4>
            <p className="text-sm sm:text-base">We&apos;re a growing supermarket chain with multiple locations throughout the city, making it convenient for you to shop for fresh groceries and household essentials.</p>
            <button className="bg-[#2E7D32] text-white text-xs sm:text-sm font-semibold rounded-full py-2 sm:py-3 px-4 sm:px-5 cursor-pointer hover:bg-green-700">
              FIND NEAREST STORE
            </button>
          </div>
          <Image
            src="/supermarket.jpg"
            alt="Store locations"
            width={600}
            height={300}
            className="rounded-xl shadow-2xl w-full sm:w-1/2 h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
          />
        </div>
      </section>
      <section className="px-3 sm:px-4 lg:px-15 xl:px-25 relative">
        <Image 
          width={1440} 
          height={300} 
          src="/supermarket.png" 
          alt="FreshMart Store Front" 
          className="h-64 object-cover object-[50%_80%] brightness-65"
        />
        <h6 className="text-white text-3xl absolute top-1/4 left-1/4">YOUR ONE-STOP SHOPPING DESTINATION</h6>
      </section>
      <section className="px-3 sm:px-4 lg:px-15 xl:px-25 my-4 sm:my-6 md:my-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/4 mb-4 sm:mb-6 md:mb-0 relative before:absolute before:top-[-15px] before:left-[-15px] before:border-t-20 before:border-l-6 before:border-gray-200 after:absolute after:top-[-15px] after:left-[-15px] after:border-t-6 after:border-l-20 after:border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">
              Our
              <br />
              Services
            </h2>
          </div>
          <div className="w-full sm:w-3/4 space-y-6 sm:space-y-10">
            <div>
              <div className="flex justify-between items-center text-orange-400 mb-3 sm:mb-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-10 sm:h-12">Home Delivery</h3>
                <RiArrowDropRightLine className="text-3xl sm:text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-500 text-base sm:text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-xl sm:text-2xl"/>
                  <span>Same Day Delivery</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-xl sm:text-2xl"/>
                  <span>Scheduled Delivery</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-xl sm:text-2xl"/>
                  <span>Express Delivery</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center text-green-700 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Special Services</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Gift Cards</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Loyalty Program</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Catering Services</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Customer Support</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="px-3 sm:px-4 lg:px-12 sm:px-25 mb-6 sm:mb-10 md:mb-16">
      <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 w-full p-6 sm:p-10 sm:pl-32 space-y-4 sm:space-y-5 relative">
            <Image
            src={basket}
            alt="Shopping Basket" 
            width={250} 
            height={250} 
            className="absolute -left-25 -top-5 hidden sm:block rounded-lg"
          />
          <h4 className="text-xl sm:text-3xl font-semibold">Need Groceries Delivered?</h4>
          <p className="text-gray-500 text-sm sm:text-base">Experience the convenience of our home delivery service. Fresh groceries delivered right to your doorstep.</p>
          <button className="border-b-2 cursor-pointer text-green-600 hover:text-green-800 text-sm sm:text-base">Order Now</button>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                Why Choose FreshMart?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At FreshMart, we&apos;re committed to providing the freshest products, competitive prices, and exceptional service. Our wide selection of groceries, convenient locations, and innovative services make us your preferred shopping destination.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-slate-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="space-y-6">
                <div className="relative bg-gray-100 p-6 rounded-lg">
                    <div className="absolute -top-1 -right-1 w-8 h-8">
                    <div className="absolute top-0 right-0 w-8 h-2 bg-black"></div>
                    <div className="absolute top-0 right-0 w-2 h-8 bg-black"></div>
                    </div>
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">
                      Products Available
                        </h3>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-slate-800">
                      10,000+
                        </span>
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
                      Daily
                      <br />
                      Customers
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-green-500">
                      5,000+
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
                      Store
                      <br />
                      Locations
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-yellow-500">
                      15+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-48 sm:h-60 md:h-72 bg-[#1B5E20] content-center">
        <div className="flex max-w-[1000px] mx-auto items-center flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold flex">OUR COMMITMENTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full px-3">
            <div className="bg-white rounded space-y-2 sm:space-y-3 p-4 sm:p-8 border-b-4 sm:border-b-6 border-[#2E7D32]">
              <h4 className="text-lg sm:text-xl font-semibold">
                Quality Assurance
              </h4>
              <button className="flex items-center gap-x-2 text-[#2E7D32] text-xs sm:text-sm font-semibold cursor-pointer hover:text-green-700">
                Read More <FaChevronRight />
              </button>
            </div>
            <div className="bg-white rounded space-y-2 sm:space-y-3 p-4 sm:p-8 border-b-4 sm:border-b-6 border-[#2E7D32]">
              <h4 className="text-lg sm:text-xl font-semibold">
                Customer Satisfaction
              </h4>
              <button className="flex items-center gap-x-2 text-[#2E7D32] text-xs sm:text-sm font-semibold cursor-pointer hover:text-green-700">
                Read More <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}