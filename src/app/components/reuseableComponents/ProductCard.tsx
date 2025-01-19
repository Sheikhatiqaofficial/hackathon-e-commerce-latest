"use client";
import { CardProps } from "@/app/types/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard: React.FC<CardProps> = ({ image, heading, price, id }) => {

  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const newItem = { id, image, heading, price };
    localStorage.setItem("cart", JSON.stringify([...cartItems, newItem]));

    // Set popup message with the product name
    setPopupMessage(`${heading} has been added to your cart! ✅✨`);
    setTimeout(() => setPopupMessage(null), 2000); // Hide popup after 2 seconds
  };

  return (
    <div
      key={id}
      className="relative w-[163px] h-[288px] xs:w-[250px] sm:w-[305px] xs:h-[375px] flex  flex-col gap-[10px] product-card"
    >
      <Image
        src={`/images/${image}.png`}
        alt={image}
        width={200}
        height={200}
        className="w-[163px] h-[201px] xs:w-[305px] sm:w-[305px] xs:h-[375px] sm:h-[375px] img bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
      />

      <div className="flex flex-col gap-[8px]">
        <h4 className="font-clash font-normal leading-7 text-darkPrimary xs:text-xl sm:text-xl text-[1rem]">
          {heading}
        </h4>
        <p className="font-satoshi font-normal leading-[27px] text-darkPrimary xs:text-xl  sm:text-xl">
        &#163;{price}
        </p>
      </div>

      <div className="flex justify-between items-center gap-2 mt-2">
        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="w-[120px] xs:w-[120px] sm:w-[120px] rounded px-4 py-2 bg-black/70 text-white hover:bg-gray-900"
        >
          Add to Cart
        </button>

        {/* See Details Button */}
        <Link
          href={`/products/id${id}`}
          className="w-[120px] xs:w-[120px] sm:w-[120px] rounded px-4 py-2 bg-gray-200 text-black hover:bg-gray-400"
        >
          See Details
        </Link>
      </div>

     {/* Popup for Add to Cart */}
      {popupMessage && (
        <div className="absolute top-12 right-4 bg-gray-900/60 text-white px-4 py-2 rounded-md shadow-md">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ProductCard;