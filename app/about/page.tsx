import Link from "next/link"
import Image from "next/image"
import home from "@/public/supermarket.png"
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
      <section className="relative">
        <Image
          src={home}
          alt="RENA Logo"
          width={1440}
          height={350}
          className="w-full max-h-screen object-cover object-[30%_70%] opacity-80 brightness-50 hover:brightness-65 transform-all duration-400"
        />
        <Image
          src="https://www.actindo.com/hubfs/Divider-wave-speed-light.svg"
          alt="Divider wave"
          width={1440}
          height={100}
          className="w-full absolute bottom-0"
        />
        <h1 className="text-4xl text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">درباره ما</h1>
      </section>
      <section className="my-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">34</h6>
          <h4 className="font-extrabold text-xl">سال تجربه طلایی</h4>
          <p className="text-black">
            شرکت رنا با 34 سال سابقه درخشان در زمینه واردات و صادرات، یکی از معتبرترین پل‌های تجاری میان ارمنستان و ایران شناخته می‌شود.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            داستان موفقیت <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">7+</h6>
          <h4 className="font-extrabold text-xl">کشورهای همکار</h4>
          <p className="text-black">
            رنا نقش مؤثری در بازارهای ارمنستان، ایران، روسیه، اوکراین، گرجستان، لهستان و سایر کشورها ایفا کرده است.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            شبکه بین‌المللی <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">15+</h6>
          <h4 className="font-extrabold text-xl">محصولات تخصصی</h4>
          <p className="text-black">
            تأمین کننده تخصصی محصولات با کیفیت در حوزه‌های ساختمانی، صنایع غذایی، تولیدی و شیمیایی.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            محصولات ما <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
      </section>
      <section className="py-20 mx-4 px-4 space-y-20">
        {/* Leadership Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="text-[#249EDC]">تیم مدیریت</span> رنا
          </h2>
          <p className="text-lg text-gray-600 ">
            با تیم حرفه‌ای و با تجربه رنا آشنا شوید که با رهبری دوراندیشانه، این شرکت را به یکی از معتبرترین شرکت‌های بازرگانی تبدیل کرده‌اند.
          </p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Leadership Team - Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">تیم اجرایی</h3>
              <p className="text-gray-600">
                جناب آقای رضا نافذی، مدیرعامل شرکت رنا و تیم اجرایی ایشان، با سال‌ها تجربه در زمینه بازرگانی بین‌المللی، هدایت این شرکت را بر عهده دارند.
              </p>
              <button className="bg-[#249EDC] hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition">
                آشنایی با تیم
              </button>
            </div>
            <div className="lg:order-last">
              <Image
                src="/leadership.png"
                alt="تیم مدیریت رنا"
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
                alt="نمایندگان شرکت رنا"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">نمایندگی‌های بین‌المللی</h3>
              <p className="text-gray-600">
                شرکت رنا به عنوان نماینده رسمی معتبرترین شرکت‌های بزرگ ایرانی در ارمنستان، آماده همکاری مطمئن و سودآور با تمامی شرکای تجاری می‌باشد.
              </p>
              <button className="bg-[#249EDC] hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition">
                اطلاعات تماس
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-4xl font-bold">ارزش‌های ما</h2>
          <p className="text-lg text-gray-600">
            ارزش‌های شرکت رنا نشان‌دهنده هویت و اصول ماست که در تمام تعاملات تجاری رعایت می‌کنیم.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-12">
          {[
            { icon: <TfiCrown />, title: "کیفیت بی‌نظیر" },
            { icon: <VscLaw />, title: "رعایت استانداردها" },
            { icon: <GiBrain />, title: "تفکر استراتژیک" },
            { icon: <TfiMedall />, title: "تخصص و تجربه" },
            { icon: <LuListTodo />, title: "تعهد به انجام کار" },
            { icon: <BiDonateHeart />, title: "مسئولیت‌پذیری" },
            { icon: <IoSnowOutline />, title: "تنوع محصولات" },
            { icon: <TfiCrown />, title: "تمرکز بر مشتری" },
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
        <h2 className="text-3xl font-bold text-center">دفاتر ما</h2>
        <div className="flex px-5 space-x-5 items-center max-w-[1000px] mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-bold">شرکت بین‌المللی رنا</h4>
            <p>شرکت با مسئولیت محدود "رنا" با کد مالیاتی ۰۱۸۲۸۲۷۸ در ارمنستان، ایروان، منطقه داوتاشن، خیابان آ. میکویان، پلاک ۲۲/۱، کد پستی ۰۰۵۴ مستقر است.</p>
            <button className="bg-[#249EDC] text-white text-sm font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-blue-600">
              مشاهده آدرس
            </button>
          </div>
          <Image
            src="/office.png"
            alt="دفتر مرکزی رنا"
            width={600}
            height={300}
            className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
          />
        </div>
      </section>
      <section className="px-5 lg:px-15 xl:px-25 relative">
        <Image width={1440} height={300} src="/armenia1.webp" alt="" className="h-64 object-cover object-[50%_80%] brightness-65"/>
        <h6 className="text-white text-3xl absolute top-1/4 left-1/4">مرکز تجارت بین‌المللی در ارمنستان</h6>
      </section>
      <section className="px-5 lg:px-15 xl:px-25 my-10">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/4 mb-6 md:mb-0 relative before:absolute before:top-[-15px] before:left-[-15px] before:border-t-20 before:border-l-6 before:border-gray-200 after:absolute after:top-[-15px] after:left-[-15px] after:border-t-6 after:border-l-20 after:border-gray-200">
            <h2 className="text-4xl font-bold tracking-wider">
              محصولات
              <br />
              ما
            </h2>
          </div>
          <div className="w-full sm:w-3/4 space-y-10">
            <div>
              <div className="flex justify-between items-center text-orange-400 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">محصولات لبنی</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>کره مرغوب</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>پودر شیر با کیفیت</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>خامه شیر</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center text-green-700 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">محصولات صنعتی</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>دیگ‌های بخار صنعتی</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>سیستم‌های تبرید</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>تانکرهای استیل</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">مواد ساختمانی</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>ایزوگام استاندارد</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>پانل‌های ساندویچی</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>آجر نسوز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="px-12 sm:px-25 mb-20">
      <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 w-full p-10 sm:pl-32 space-y-5 relative">
        <Image src="/Untitled2.png" alt="محصولات رنا" width={250} height={250} className="absolute -left-25 -top-5 hidden sm:block"/>
        <h4 className="text-3xl font-semibold">نیاز به محصولات باکیفیت دارید؟</h4>
        <p className="text-gray-500">شرکت رنا با 34 سال تجربه در زمینه واردات و صادرات، آماده ارائه بهترین محصولات با کیفیت عالی و قیمت رقابتی می‌باشد.</p>
        <button className="border-b-2 cursor-pointer text-green-600 hover:text-green-800">اطلاعات بیشتر</button>
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
              فرآیند همکاری با رنا چگونه است؟
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
                    تماس اولیه
                  </h3>
                  <p className="text-gray-300 text-sm">
                    از طریق تلفن، واتساپ یا ایمیل با ما در ارتباط باشید.
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
                    مذاکره و توافق
                  </h3>
                  <p className="text-gray-300 text-sm">
                    بررسی نیازهای شما و ارائه پیشنهاد مناسب توسط کارشناسان ما.
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
                    عقد قرارداد
                  </h3>
                  <p className="text-gray-300 text-sm">
                    انعقاد قرارداد رسمی با شرایط شفاف و تضمین کیفیت.
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
                    تحویل محصول
                  </h3>
                  <p className="text-gray-300 text-sm">
                    تحویل به موقع محصولات با کیفیت تضمین شده.
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
                    تماس اولیه
                  </h3>
                  <p className="text-gray-300 text-sm">
                    از طریق تلفن، واتساپ یا ایمیل با ما در ارتباط باشید.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    مذاکره و توافق
                  </h3>
                  <p className="text-gray-300 text-sm">
                    بررسی نیازهای شما و ارائه پیشنهاد مناسب توسط کارشناسان ما.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    عقد قرارداد
                  </h3>
                  <p className="text-gray-300 text-sm">
                    انعقاد قرارداد رسمی با شرایط شفاف و تضمین کیفیت.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    تحویل محصول
                  </h3>
                  <p className="text-gray-300 text-sm">
                    تحویل به موقع محصولات با کیفیت تضمین شده.
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
                شرکت رنا کیست؟
              </h2>
              <p className="text-slate-600 leading-relaxed">
                شرکت بازرگانی بین‌المللی "رنا" با 34 سال تجربه طلایی در عرصه تجارت، از سال ۱۹۹۱ تاکنون با گام‌های استوار در مسیر توسعه و پیشرفت حرکت کرده و امروز به عنوان یکی از معتبرترین پل‌های تجاری میان ارمنستان و ایران شناخته می‌شود. ما تأمین‌کننده تخصصی محصولات با کیفیت در حوزه‌های ساختمانی، صنایع غذایی، تولیدی و شیمیایی هستیم.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
                >
                  بیشتر بدانید
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
                        سال تجربه
                        </h3>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-slate-800">
                        34+
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
                      همکاران
                      <br />
                      بین‌المللی
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-green-500">
                      7+
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
                      محصولات
                      <br />
                      تخصصی
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
      <section className="h-80 bg-[#11567F] content-center">
        <div className="flex max-w-[1000px] mx-auto items-center flex-col gap-y-10">
          <h2 className="text-white text-3xl font-semibold flex">اطلاعات تماس</h2>
          <div className="grid sm:grid-cols-2 space-x-10 w-full">
            <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
              <h4 className="text-xl font-semibold">
                تماس با ما
              </h4>
              <p className="text-gray-600">تلفن: ‪700066  11  (374) +‬</p>
              <p className="text-gray-600">واتساپ: 155145 44  (374) +</p>
              <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">
                اطلاعات بیشتر <FaChevronRight />
              </button>
            </div>
            <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
              <h4 className="text-xl font-semibold">
                آدرس دفتر مرکزی
              </h4>
              <p className="text-gray-600">ایروان، خیابان آ. میکویان، پلاک 22/1</p>
              <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">
                مشاهده روی نقشه <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}