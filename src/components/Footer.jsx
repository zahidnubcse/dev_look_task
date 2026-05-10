import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  const socials = [
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaInstagram,
  ];

  return (
    <footer className="px-3 pb-3 mt-25">
      <div className="bg-black text-white rounded-[35px] px-6 sm:px-10 lg:px-14 py-14 overflow-hidden">
        
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 border-white/10">
          
          {/* LEFT */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-5xl font-semibold leading-tight max-w-[650px]">
              Stay updated with Rise news
            </h2>

            {/* INPUT */}
            <div className="mt-10 relative max-w-[620px]">
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-full bg-[#171717] border border-white/5 rounded-full h-[90px] px-8 text-2xl outline-none placeholder:text-[#8d8d8d]"
              />

              <button className="absolute top-1/2 -translate-y-1/2 right-3 w-[68px] h-[68px] rounded-full bg-[#B8FFE7] text-black text-3xl flex items-center justify-center hover:rotate-45 transition-transform duration-300">
                ↗
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-2 mt-8">
              {socials.map((Icon, index) => (
                <button
                  key={index}
                  className="group bg-white text-black rounded-full px-4 h-[38px] flex items-center gap-3 hover:bg-[#B8FFE7] transition-all duration-300"
                >
                  <Icon className="text-sm" />

                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-2 gap-10">
            
            {/* COL 1 */}
            <div className="border-l border-white/10 pl-6">
              <ul className="space-y-4 text-2xl font-medium">
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Services
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Work
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  About
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Culture
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Meet The Risers
                </li>
              </ul>
            </div>

            {/* COL 2 */}
            <div className="border-l border-white/10 pl-6">
              <ul className="space-y-4 text-2xl font-medium">
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Testimonials
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Blog & Resources
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Webinars
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Careers
                </li>
              </ul>
            </div>

            {/* COL 3 */}
            <div className="border-l border-white/10 pl-6">
              <ul className="space-y-4 text-2xl font-medium">
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Sheffield
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Manchester
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  London
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  New York
                </li>
                <li className="hover:text-[#B8FFE7] transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* HUGE LOGO */}
        <div className="mt-24">
          <h1 className="text-[80px] sm:text-[140px] lg:text-[230px] leading-none font-semibold tracking-tight">
            Rise at Seven
          </h1>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-10 text-sm text-white/80">
          
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span>•</span>
            <span>Company Number 11955187</span>
            <span>•</span>
            <span>VAT Registered GB 322402945</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms & conditions</span>
          </div>

          <div>
            Website MadeByShape
          </div>
        </div>
      </div>
    </footer>
  );
}