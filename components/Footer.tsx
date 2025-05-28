import React from "react";
import Link from "next/link";
import { FaInstagram, FaApple, FaGooglePlay, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-900 text-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          FreshMart Supermarket<br/> Your One-Stop Shop for<br/> Quality Groceries
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors">
                FreshMart
              </Link>
            </h2>
            <p className="text-white/60 mb-4">Download our app for exclusive deals and easy shopping!</p>
            <div className="flex gap-4 mt-8">
              <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <FaApple className="text-2xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <FaGooglePlay className="text-2xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-white/80 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="border-l border-white/30 pl-6">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/shop" className="hover:text-white/80 transition-colors">
                Shop
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/fresh-produce" className="text-white/60 hover:text-white/80 transition-colors">
                  Fresh Produce
                </Link>
              </li>
              <li>
                <Link href="/shop/bakery" className="text-white/60 hover:text-white/80 transition-colors">
                  Bakery
                </Link>
              </li>
              <li>
                <Link href="/shop/dairy" className="text-white/60 hover:text-white/80 transition-colors">
                  Dairy & Eggs
                </Link>
              </li>
              <li>
                <Link href="/shop/meat-seafood" className="text-white/60 hover:text-white/80 transition-colors">
                  Meat & Seafood
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l border-white/30 pl-6">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/services" className="hover:text-white/80 transition-colors">
                Services
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/delivery" className="text-white/60 hover:text-white/80 transition-colors">
                  Home Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/catering" className="text-white/60 hover:text-white/80 transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/services/loyalty" className="text-white/60 hover:text-white/80 transition-colors">
                  Loyalty Program
                </Link>
              </li>
              <li>
                <Link href="/services/gift-cards" className="text-white/60 hover:text-white/80 transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l border-white/30 pl-6">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/about" className="hover:text-white/80 transition-colors">
                About Us
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/careers" className="text-white/60 hover:text-white/80 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about/recipes" className="text-white/60 hover:text-white/80 transition-colors">
                  Recipes & Tips
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="text-white/60 hover:text-white/80 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about/community" className="text-white/60 hover:text-white/80 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 text-white/60 text-sm">
          <p>© 2024 FreshMart Supermarket. All rights reserved.</p>
          <p className="mt-4">
            FreshMart is committed to providing the highest quality groceries and exceptional customer service. 
            Our stores are open 7 days a week, offering a wide selection of fresh produce, quality meats, 
            and household essentials.
          </p>
          <p className="mt-2">
            Store Hours: Monday-Saturday 7:00 AM - 10:00 PM, Sunday 8:00 AM - 9:00 PM
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white/80 transition-colors">
              Accessibility
            </Link>
            <Link href="/returns" className="hover:text-white/80 transition-colors">
              Returns Policy
            </Link>
            <Link href="/faq" className="hover:text-white/80 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white/80 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;