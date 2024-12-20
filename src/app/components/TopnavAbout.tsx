import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopnavAbout = () => {
  return (
    <nav className="relative w-full bg-white p-2">
      {/* Section 1 */}
      <div className="relative flex items-center justify-between">
        {/* Magnifying Glass Icon */}
        <div className="absolute left-7 top-6 cursor-pointer hover:stroke-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="stroke-[#2A254B] hover:stroke-gray-400 transition-all duration-200"
          >
            <circle cx="10" cy="10" r="7" strokeWidth="2" />
            <line x1="16" y1="16" x2="22" y2="22" strokeWidth="2" />
          </svg>
        </div>

        {/* Avion Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 opacity-9">
          <Link href={"/"}>
            <h1
              className="font-clash-display text-[#22202E] text-3xl font-normal leading-[29.52px] text-left"
              style={{ fontFamily: "Clash Display" }}
            >
              Avion
            </h1>
          </Link>
        </div>

        {/* Cart Icon */}
        <Link href={"/basket"}><div className="absolute right-20 top-6 cursor-pointer hover:opacity-50 transition-all duration-200">
          <Image
            src="/cart.svg"
            alt="Shopping Cart"
            width={20}
            height={20}
          />
        </div>
        </Link>
        {/* User Avatar Icon */}
        <div className="absolute right-10 top-6 cursor-pointer hover:opacity-50 transition-all duration-200">
          <Image
            src="/user.svg"
            alt="User Avatar"
            width={20}
            height={20}
          />
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-[1px] border-t border-[#F9F9F9] opacity-1 mt-16"></div>

      {/* Section 2 Links */}
      <div className="flex flex-wrap justify-center items-center mt-0 space-x-[44px] sm:flex hidden bg-[#F9F9F9] h-[55px]">
        {/* Link 1 */}
        <a
          href="#"
          className="w-[70px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Plant Pots
        </a>

        {/* Link 2 */}
        <a
          href="#"
          className="w-[66px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Ceramics
        </a>

        {/* Link 3 */}
        <a
          href="#"
          className="w-[44px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Tables
        </a>

        {/* Link 4 */}
        <a
          href="#"
          className="w-[45px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Chairs
        </a>

        {/* Link 5 */}
        <a
          href="#"
          className="w-[64px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Crockery
        </a>

        {/* Link 6 */}
        <a
          href="#"
          className="w-[71px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Tableware
        </a>

        {/* Link 7 */}
        <a
          href="#"
          className="w-[51px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px] hover:text-[#2A254B] hover:underline hover:underline-offset-4 hover:text-shadow-md transition-all duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Cutlery
        </a>
      </div>

    </nav>
  );
};

export default TopnavAbout;
