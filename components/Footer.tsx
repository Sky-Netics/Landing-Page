import React from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-right">
          راهکارهای تخصصی در صنعت<br/> لبنیات و مواد غذایی<br/> با ۳۴ سال تجربه
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-right">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors">
                شرکت رنا
              </Link>
            </h2>
            <p className="text-white/60 mb-4">
              ارمنستان، ایروان، منطقه داوتاشن<br/>
              خیابان آ. میکویان، پلاک ۲۲/۱<br/>
              کد پستی: ۰۰۵۴
            </p>
            <div className="flex gap-4 mt-8 justify-end">
              <Link href="https://wa.me/37444155145" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://t.me/renagroup" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/rena_group" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/company/rena-group" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="mailto:rena_eas2015@yahoo.com" target="_blank" rel="noopener noreferrer">
                <MdEmail className="text-xl hover:text-white/80 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="border-r border-white/30 pr-6 text-right">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/products" className="hover:text-white/80 transition-colors">
                محصولات
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/butter" className="text-white/60 hover:text-white/80 transition-colors">
                  کره مرغوب
                </Link>
              </li>
              <li>
                <Link href="/products/cream" className="text-white/60 hover:text-white/80 transition-colors">
                  خامه شیر
                </Link>
              </li>
              <li>
                <Link href="/products/milk-powder" className="text-white/60 hover:text-white/80 transition-colors">
                  پودر شیر
                </Link>
              </li>
              <li>
                <Link href="/products/industrial" className="text-white/60 hover:text-white/80 transition-colors">
                  تجهیزات صنعتی
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-r border-white/30 pr-6 text-right">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/services" className="hover:text-white/80 transition-colors">
                خدمات
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/import" className="text-white/60 hover:text-white/80 transition-colors">
                  واردات تخصصی
                </Link>
              </li>
              <li>
                <Link href="/services/quality-control" className="text-white/60 hover:text-white/80 transition-colors">
                  کنترل کیفیت
                </Link>
              </li>
              <li>
                <Link href="/services/customs" className="text-white/60 hover:text-white/80 transition-colors">
                  خدمات گمرکی
                </Link>
              </li>
              <li>
                <Link href="/services/logistics" className="text-white/60 hover:text-white/80 transition-colors">
                  لجستیک و حمل
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-r border-white/30 pr-6 text-right">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/about" className="hover:text-white/80 transition-colors">
                درباره ما
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/history" className="text-white/60 hover:text-white/80 transition-colors">
                  تاریخچه شرکت
                </Link>
              </li>
              <li>
                <Link href="/about/certificates" className="text-white/60 hover:text-white/80 transition-colors">
                  گواهینامه‌ها
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-white/60 hover:text-white/80 transition-colors">
                  شرکای تجاری
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white/80 transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 text-white/60 text-sm text-right">
          <p>© کلیه حقوق این وبسایت متعلق به شرکت رنا می‌باشد - ۱۴۰۳</p>
          <p className="mt-4">
            شرکت بازرگانی بین‌المللی رنا با ۳۴ سال سابقه درخشان، ارائه‌دهنده محصولات با کیفیت در حوزه‌های غذایی، صنعتی و ساختمانی با تضمین کیفیت و قیمت مناسب
          </p>
          <p className="mt-2">
            کد مالیاتی: ۰۱۸۲۸۲۷۸ | شماره تماس: ‪700066 11 (374)+‬ | واتساپ: 155145 44 (374)+
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-end">
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              شرایط استفاده
            </Link>
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/rules" className="hover:text-white/80 transition-colors">
              قوانین و مقررات
            </Link>
            <Link href="/export-policy" className="hover:text-white/80 transition-colors">
              سیاست‌های صادرات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;