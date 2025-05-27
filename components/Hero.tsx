"use client";

import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import supermarket from "@/public/supermarket.jpg";
import { SiZendesk, SiMailchimp } from "react-icons/si";
import { IoLogoSlack } from "react-icons/io";
import { motion } from "framer-motion";

export default function MeetingSection() {
  return (
    <section className="min-h-screen px-4 py-12 sm:py-0 bg-[#cee4e1] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-none">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-thin leading-tight text-gray-900/90">
              Help your portfolio companies with strategy.{" "}
              <span className="font-bold text-black underline decoration-dotted underline-offset-4 decoration-green-700">
                Leave the vendor management to us.
              </span>
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              We'll take on the grunt work of onboarding and verifying vendors and managing benefits and deals. You help
              your portcos make smarter decisions.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700">
              Sounds too good to be true? <strong className="font-bold text-gray-900">See Proven in action.</strong>
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
            >
              <span>Book a meeting today</span>
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
                className="object-cover opacity-20"
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
              initial={{ opacity: 0, x: -30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="absolute top-1 left-1 sm:top-4 sm:left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 p-2 sm:p-4 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] cursor-pointer"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs sm:text-sm font-semibold text-gray-900 text-center border-b border-gray-200 pb-1 sm:pb-2 mb-2 sm:mb-3"
              >
                Most Popular Profiles
              </motion.h2>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { icon: <SiZendesk className="text-purple-600 text-xs sm:text-sm" />, name: "Zendesk", bg: "bg-purple-100", delay: 0.6 },
                  { icon: <SiMailchimp className="text-yellow-600 text-xs sm:text-sm" />, name: "Mailchimp", bg: "bg-yellow-100", delay: 0.8 },
                  { icon: <IoLogoSlack className="text-purple-600 text-xs sm:text-sm" />, name: "Slack", bg: "bg-purple-100", delay: 1.0 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    whileHover={{ x: 3 }}
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
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="absolute bottom-1 right-1 sm:bottom-4 sm:right-4 z-30 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 p-2 sm:p-4 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] cursor-pointer"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3"
              >
                Vendor Analytics
              </motion.h3>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { label: "Active Vendors", value: "247", delay: 0.7 },
                  { label: "Cost Savings", value: "$2.4M", delay: 0.9 },
                  { label: "Compliance Rate", value: "98%", delay: 1.1 },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: metric.delay }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-xs text-gray-600">{metric.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-green-600">
                      {metric.value}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 origin-left"
                >
                  <div className="bg-green-600 h-full rounded-full w-[85%]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}