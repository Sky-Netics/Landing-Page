import React from "react";
import Link from "next/link";
import { FaInstagram, FaApple, FaGooglePlay, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Benefits you and<br/> your employees<br/> will love using
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Kota
              </Link>
            </h2>
            <div className="flex gap-4 mt-48">
              <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <FaApple className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <FaGooglePlay className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-white/80 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="border-l border-white/30 pl-6">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/solutions" className="hover:text-white/80 transition-colors">
                Solution
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/health-insurance" className="text-white/60 hover:text-white/80 transition-colors">
                  Health insurance
                </Link>
              </li>
              <li>
                <Link href="/solutions/pension-contribution" className="text-white/60 hover:text-white/80 transition-colors">
                  Pension contribution
                </Link>
              </li>
              <li>
                <Link href="/solutions/life-assurance" className="text-white/60 hover:text-white/80 transition-colors">
                  Life assurance
                </Link>
              </li>
              <li>
                <Link href="/solutions/flexible-benefits" className="text-white/60 hover:text-white/80 transition-colors">
                  Flexible benefits
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l border-white/30 pl-6">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/company" className="hover:text-white/80 transition-colors">
                Company
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-white/60 hover:text-white/80 transition-colors">
                  Careers (We are hiring!)
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-white/60 hover:text-white/80 transition-colors">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="/trust-center" className="text-white/60 hover:text-white/80 transition-colors">
                  Trust Centre
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-white/60 hover:text-white/80 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l border-white/30 pl-6">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/resources" className="hover:text-white/80 transition-colors">
                Resources
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/europe-benefits-report" className="text-white/60 hover:text-white/80 transition-colors">
                  Employee benefits in Europe report
                </Link>
              </li>
              <li>
                <Link href="/resources/ireland-enrolment-guide" className="text-white/60 hover:text-white/80 transition-colors">
                  Auto Enrolment Ireland 2025 Guide
                </Link>
              </li>
              <li>
                <Link href="/resources/global-benefits" className="text-white/60 hover:text-white/80 transition-colors">
                  Global employee benefits
                </Link>
              </li>
              <li>
                <Link href="/resources/ireland-pension" className="text-white/60 hover:text-white/80 transition-colors">
                  Occupational pension in Ireland
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 text-white/60 text-sm">
          <p>© Copyright 2025 - Built with love from Europe ©</p>
          <p className="mt-4">
            Source: Sustainable Limited, including the focus on sustainable non-canonical food of Ireland. Consumer Information: The Fellow Registered Office 2019 Digital Print Listed Code No. 1, 2020 Digital Print List.
          </p>
          <p className="mt-2">
            Source: Financial, Environmental, and Social Media, Inc., representing the largest global of Finnish Filled Lifestyle (Filled) products for sustainable non-canonical food and food industry.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/terms-of-service" className="hover:text-white/80 transition-colors">
              Terms of service
            </Link>
            <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms-of-business" className="hover:text-white/80 transition-colors">
              Terms of business
            </Link>
            <Link href="/fees-charges" className="hover:text-white/80 transition-colors">
              Schedule of fees and charges
            </Link>
            <Link href="/remuneration" className="hover:text-white/80 transition-colors">
              Remuneration
            </Link>
            <Link href="/regulatory-info" className="hover:text-white/80 transition-colors">
              Regulatory information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;