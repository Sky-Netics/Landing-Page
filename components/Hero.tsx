"use client";

import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import supermarket from "@/public/supermarket.jpg";
import { SiZendesk, SiMailchimp } from "react-icons/si";
import { IoLogoSlack } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MeetingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  });

  return (
    <section className="w-full bg-[#cee4e1]">
      <div className="w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-none">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-thin leading-tight text-gray-900/90">
                Fresh groceries delivered to your doorstep.{" "}
                <span className="font-bold text-black underline decoration-dotted underline-offset-4 decoration-blue-400">
                  Quality you can trust.
                </span>
              </h3>

              <motion.p 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
              >
                We&apos;re committed to providing the freshest produce, highest quality products, and exceptional service. 
                Shop with confidence knowing every item meets our strict quality standards.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg text-gray-700"
              >
                Ready to experience the difference? <strong className="font-bold text-gray-900">Start shopping today.</strong>
              </motion.p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 sm:gap-3 bg-blue-400 hover:bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
              >
                <span>Shop Now</span>
                <SlCalender className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            {/* Right Images */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-0 lg:order-none">
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="https://cdn.prod.website-files.com/637d2ae70bed66dfb5381fc0/637d2ae80bed66601d382041_Pattern.svg"
                  alt="Background pattern"
                  fill
                  className="object-cover"
                  quality={30}
                />
              </div>

              <div className="relative h-full flex items-end justify-end p-2 sm:p-4">
                <div className="relative w-full h-full max-w-[95%]">
                  <Image
                    src={supermarket}
                    alt="Supermarket scene"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                    quality={80}
                    priority
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -50, y: -20, rotate: -5 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 0, x: -50, y: -20, rotate: -5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.4 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
                className="absolute top-1 left-1 sm:top-4 sm:left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 p-2 sm:p-4 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] cursor-pointer"
              >
                <h2 className="text-xs sm:text-sm font-semibold text-gray-900 text-center border-b border-gray-200 pb-1 sm:pb-2 mb-2 sm:mb-3">
                  Popular Categories
                </h2>
                <div className="space-y-1 sm:space-y-2">
                  {[
                    { icon: <SiZendesk className="text-purple-600 text-xs sm:text-sm" />, name: "Fresh Produce", bg: "bg-purple-100", delay: 0.7 },
                    { icon: <SiMailchimp className="text-yellow-600 text-xs sm:text-sm" />, name: "Bakery", bg: "bg-yellow-100", delay: 0.9 },
                    { icon: <IoLogoSlack className="text-purple-600 text-xs sm:text-sm" />, name: "Dairy", bg: "bg-purple-100", delay: 1.1 },
                  ].map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        delay: item.delay 
                      }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 ${item.bg} rounded-md sm:rounded-lg flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-800 truncate">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, y: 20, rotate: 5 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 0, x: 50, y: 20, rotate: 5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.5 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotate: -1,
                  transition: { duration: 0.2 }
                }}
                className="absolute bottom-1 right-1 sm:bottom-4 sm:right-4 z-30 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 p-2 sm:p-4 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] cursor-pointer"
              >
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Store Statistics
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  {[
                    { label: "Daily Customers", value: "2,500+", delay: 0.8 },
                    { label: "Products Available", value: "10,000+", delay: 1.0 },
                    { label: "Customer Rating", value: "4.8/5", delay: 1.2 },
                  ].map((metric) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        delay: metric.delay 
                      }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xs text-gray-600">{metric.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-400">
                        {metric.value}
                      </span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ 
                      delay: 1.4, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 origin-left"
                  >
                    <div className="bg-blue-400 h-full rounded-full w-[85%]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}