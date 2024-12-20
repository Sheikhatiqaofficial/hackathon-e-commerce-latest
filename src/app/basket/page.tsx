import React from "react";
import Image from "next/image";
import Topnav from "../components/Topnav";

const ShoppingBasket = () => {
  return (
    <>
      <Topnav />
      <div className="relative w-full h-[749px] bg-[#F9F9F9] mt-[20px]">
        {/* Header Section */}
        <div className="absolute top-[64px] left-0 sm:left-[188px] w-full sm:w-[328px] h-[50px] text-[#2A254B] px-4 sm:px-0">
          <h1 className="text-[36px] font-normal leading-[50.4px] text-left">
            Your shopping cart
          </h1>
        </div>

        {/* Product Header - Hide on mobile screens */}
        <div className="absolute top-[169px] left-0 sm:left-[188px] w-[55px] h-[20px] text-[#2A254B] sm:block hidden px-4">
          <h6 className="text-[18px] font-normal leading-[19.6px]">Product</h6>
        </div>
        <div className="absolute top-[162px] left-0 sm:left-[838px] w-[57px] h-[20px] text-[#2A254B] sm:block hidden">
          <h6 className="text-[18px] font-normal leading-[19.6px]">Quantity</h6>
        </div>
        <div className="absolute top-[162px] left-0 sm:left-[1212px] w-[34px] h-[20px] text-[#2A254B] sm:block hidden">
          <h6 className="text-[18px] font-normal leading-[19.6px]">Total</h6>
        </div>

        {/* Dividers Below Header and Products (Hide on Mobile) */}
        <div className="absolute top-[201px] left-[188px] w-[1064px] h-[1px] border-t border-[#EBE8F4] hidden sm:block" />
        <div className="absolute top-[544px] left-[188px] w-[1064px] h-[1px] border-t border-[#EBE8F4] hidden sm:block" />

        {/* Product 1 Section */}
        <div className="absolute top-[228px] left-0 sm:left-[188px] w-full sm:w-[309px] h-[134px] flex gap-[21px] px-4 sm:px-0 hover:cursor-pointer">
          <div className="w-[109px] h-[134px] opacity-1">
            <Image
              src="/Productvase.jpg"
              alt="Product Vase"
              width={109}
              height={134}
              className="object-cover"
            />
          </div>
          <div className="w-[179px] h-[110px] opacity-1 flex flex-col gap-[8px]">
            <h4 className="text-[20px] font-normal leading-[28px] text-[#2A254B]">Graystone vase</h4>
            <p className="text-[14px] font-normal leading-[21px] text-[#2A254B]">
              A timeless ceramic vase with a tri color grey glaze.
            </p>
            <p className="text-[16px] font-normal leading-[24px] text-[#2A254B]">£85</p>
          </div>
        </div>

        {/* Stepper Below Product 1 Price - Only on Mobile (Move to Right) */}
        <div className="absolute top-[298px] left-[271px] sm:left-[838px] w-[100px] sm:w-[122px] h-[46px] flex justify-between items-center p-[12px_16px] bg-[#F9F9F9] opacity-1 right-0">
          <span className="text-[16px] font-normal text-[#2A254B]">-</span>
          <span className="text-[16px] font-normal text-[#2A254B]">1</span>
          <span className="text-[16px] font-normal text-[#2A254B]">+</span>
        </div>

        {/* Product 2 Section */}
        <div className="absolute top-[380px] left-0 sm:left-[188px] w-full sm:w-[309px] h-[134px] flex gap-[21px] px-4 sm:px-0 hover:cursor-pointer">
          <div className="w-[109px] h-[134px] opacity-1">
            <Image
              src="/Productpot.jpg"
              alt="Product Pot"
              width={109}
              height={134}
              className="object-cover"
            />
          </div>
          <div className="w-[179px] h-[110px] opacity-1 flex flex-col gap-[8px]">
            <h4 className="text-[20px] font-normal leading-[28px] text-[#2A254B]">Basic white vase</h4>
            <p className="text-[14px] font-normal leading-[21px] text-[#2A254B]">
              Beautiful and simple this is one for the classics.
            </p>
            <p className="text-[16px] font-normal leading-[24px] text-[#2A254B]">£125</p>
          </div>
        </div>

        {/* Stepper Below Product 2 Price - Only on Mobile (Move to Right) */}
        <div className="absolute top-[443px] left-[265px] sm:left-[838px] w-[100px] sm:w-[122px] h-[46px] flex justify-between items-center p-[12px_16px] bg-[#F9F9F9] opacity-1 right-0">
          <span className="text-[16px] font-normal text-[#2A254B]">-</span>
          <span className="text-[16px] font-normal text-[#2A254B]">1</span>
          <span className="text-[16px] font-normal text-[#2A254B]">+</span>
        </div>

        {/* Price Total */}
        <div className="absolute top-[295px] left-[1212px] w-[33px] h-[27px] text-[#2A254B] hidden sm:block">
          <p className="text-[18px] font-normal leading-[27px]">£85</p>
        </div>
        <div className="absolute top-[450px] left-[1212px] w-[38px] h-[27px] text-[#2A254B] hidden sm:block">
          <p className="text-[18px] font-normal leading-[27px]">£125</p>
        </div>

        {/* Checkout Section (Right-aligned below Total Column on large screens) */}
        <div className="absolute top-[564px] right-[188px] w-[392px] h-[67px] flex flex-col gap-[12px] opacity-1 hidden sm:flex">
          <div className="flex justify-between items-center w-[150px] h-[34px]">
            <h4 className="text-[20px] font-normal leading-[28px] text-[#4E4D93]">Subtotal</h4>
            <p className="text-[24px] font-normal leading-[33.6px] text-[#2A254B]">£210</p>
          </div>
          <p className="w-[382px] text-[14px] font-normal leading-[21px] text-[#4E4D93]">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="w-[100%] sm:w-[172px] h-[56px] bg-[#2A254B] text-[#FFFFFF] text-[16px] font-normal leading-[55px]">
            Go to checkout
          </button>
        </div>

        {/* For smaller screens: Checkout section centered */}
        <div className="absolute top-[562px] left-[5%] w-[90%] h-[67px] flex flex-col gap-[12px] sm:hidden">
          <div className="flex justify-between items-center w-[150px] h-[34px]">
            <h4 className="text-[20px] font-normal leading-[28px] text-[#4E4D93]">Subtotal</h4>
            <p className="text-[24px] font-normal leading-[33.6px] text-[#2A254B]">£210</p>
          </div>
          <p className="w-[382px] text-[14px] font-normal leading-[21px] text-[#4E4D93]">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="w-[100%] sm:w-[172px] h-[56px] bg-[#2A254B] text-[#FFFFFF] text-[16px] font-normal leading-[55px]">
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingBasket;
