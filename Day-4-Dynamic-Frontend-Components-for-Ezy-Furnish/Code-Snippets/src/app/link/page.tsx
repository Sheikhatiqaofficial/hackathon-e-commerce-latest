import React from "react";
import Feature from "../components/Feature";
import Signup from "../components/Signup";
import CeramicAbout from "../components/CeramicAbout";
import Topnav from "../components/Topnav";
import Banner from "../components/Banner";

const Collection = () => {
  return (
    <>
      <Banner />
      <Topnav />
      <div className="w-full h-auto md:h-[759px] px-[55px] opacity-1 bg-white flex flex-col md:flex-row mt-[65px] mb-[50px] sm:mb-[80px]">
        {/* Left Image Section */}
        <div
          className="w-full md:w-[50%] h-[400px] md:h-[759px] bg-cover bg-center opacity-1 sm:h-[500px] object-cover"
          style={{ backgroundImage: "url('/chair3.jpg')" }}
        ></div>

        {/* Right Section */}
        <div className="relative w-full md:w-[50%] h-auto flex flex-col gap-13 opacity-1 md:pl-[30px] sm:px-[20px]">
          {/* Heading */}
          <div className="w-full h-auto md:w-[281px] h-[89px] mt-[30px] md:mt-[70px] gap-[13px] opacity-1 ml-[25px]">
            <h1 className="w-full text-[#2A254B] text-[36px] font-normal leading-[44.28px] text-left opacity-1 md:ml-[60px]">
              The Dandy Chair
            </h1>
            <div className="w-full text-[#2A254B] text-[24px] font-normal leading-[32.4px] text-left opacity-1 md:ml-[60px]">
              £250
            </div>
          </div>

          {/* Description Section */}
          <div className="w-full md:w-[602px] h-auto md:h-[251px] mt-[30px] px-[10px] md:px-[100px] py-[40px] gap-[16px] opacity-1">
            <div className="w-full md:w-[522px] h-auto gap-[16px] opacity-1">
              <div className="w-full h-[20px] opacity-1">
                <h2 className="font-clash-display text-[19px] text-[#2A254B]">Description</h2>
              </div>

              <div className="w-full h-auto gap-[20px] opacity-1">
                <p className="font-satoshi text-[16px] text-[#2A254B] mt-[25px]">
                  A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className="font-satoshi text-[16px] text-[#2A254B] mt-[25px] px-[20px] md:px-0">
                  <li> ◼️ Premium material</li>
                  <li> ◼️ Handmade upholstery</li>
                  <li> ◼️ Quality timeless classic</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dimensions Section */}
          <div className="w-full md:w-[241px] h-auto md:h-[99px] mt-[25px] md:mt-[70px] gap-[28px] opacity-1 ml-[45px]">
            <h3 className="text-[#2A254B] font-clash-display text-[18px]">Dimensions</h3>

            {/* Flex container for dimensions */}
            <div className="flex flex-row justify-between gap-[20px] opacity-1 mt-[25px]">
              {/* Dimensions in one row on all screens */}
              <div className="w-[30%] h-[51px]">
                <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Height</p>
                <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">110cm</p>
              </div>

              <div className="w-[30%] h-[51px]">
                <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Width</p>
                <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">75cm</p>
              </div>

              <div className="w-[30%] h-[51px]">
                <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Depth</p>
                <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">50cm</p>
              </div>
            </div>
          </div>

          {/* Add to Cart & Amount Counter Section */}
          <div className="w-full md:w-[602px] h-auto mt-[50px] md:mt-[70px] px-[20px] md:px-[105px] py-[32px] opacity-1">
            <div className="flex flex-col md:flex-row justify-between items-center">

              <div className="w-full md:w-[209px] h-auto flex gap-[22px] opacity-1">
                <div className="w-[65px] h-[20px] font-clash-display text-[18px] text-[#2A254B] mt-[8px]">Amount</div>

                <div className="w-[122px] h-[46px] flex justify-between items-center px-[16px] opacity-1" style={{ backgroundColor: '#F9F9F9' }}>
                  <button className="text-[#CAC6DA] text-[16px]">-</button>
                  <span className="text-[#2A254B] text-[16px]">1</span>
                  <button className="text-[#CAC6DA] text-[16px]">+</button>
                </div>
              </div>

              <button className="w-full md:w-[143px] h-[56px] bg-[#2A254B] text-white text-[16px] font-medium leading-[24px] opacity-1 mt-[20px] md:mt-0 
  hover:bg-[#F9F9F9] hover:text-[#2A254B] transform hover:scale-105 transition-all duration-300">
                Add to Cart
              </button>


            </div>
          </div>
        </div>

      </div>
      <CeramicAbout />
      <Feature />
      <Signup />
    </>
  );

}

export default Collection;
