// // app/products/[slug]/page.tsx
// import { client } from '../../../../scripts/sanityClient';
// import imageUrlBuilder from '@sanity/image-url'; // Image builder


// const builder = imageUrlBuilder(client);

// // Function to generate image URL
// function urlFor(source: any) {
//   return builder.image(source).width(305).height(375).url(); // Adjust image size as needed
// }

// const ProductDetail = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = params; // Extract slug from the URL parameter

//   // Fetch the product data using the slug
//   const productData = await client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id, name, image, price, description, tags, features, dimensions
//     }`,
//     { slug }
//   );

//   if (!productData) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{productData.name}</h1>
//       <img src={urlFor(productData.image).toString()} alt={productData.name} />
//       <p>{productData.description}</p>
//       <p>Price: £{productData.price}</p>
//       {/* Render other product details like tags, features, dimensions */}
//     </div>
//   );
// };

// export default ProductDetail;
// src/app/products/[slug]/page.tsx
//src/app/products/[slug]/page.tsx


// import React from "react";
// import { client } from "../../../../scripts/sanityClient";
// import imageUrlBuilder from '@sanity/image-url';
// import { Product } from "../../../../types";
// import CeramicAbout from "@/app/components/CeramicAbout";
// import Feature from "@/app/components/Feature";
// import Signup from "@/app/components/Signup";
// import Banner from "@/app/components/Banner";
// import Topnav from "@/app/components/Topnav";

// const builder = imageUrlBuilder(client);

// // Function to generate image URL
// function urlFor(source: any) {
   
//   return builder.image(source).width(700).height(700).url(); // Adjust the size if needed
// }

// const ProductDetail = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;

//   // Fetch the product data by slug
//   const productData: Product = await client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       name,
//       image,
//       price,
//       description,
//       dimensions,
//       features
//     }`,
//     { slug }
//   );

//   if (!productData) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <>
//     <Banner/>
//     <Topnav/>
//       <div className="w-full h-auto md:h-[759px] px-[55px] opacity-1 bg-white flex flex-col md:flex-row mt-[65px] mb-[50px] sm:mb-[80px]">
//         {/* Left Image Section */}
//         <div
//           className="w-full md:w-[50%] h-[400px] md:h-[759px] bg-cover bg-center opacity-1 sm:h-[500px] object-cover"
//           style={{ backgroundImage: `url(${urlFor(productData.image)})` }}
//         ></div>

//         {/* Right Section */}
//         <div className="relative w-full md:w-[50%] h-auto flex flex-col gap-13 opacity-1 md:pl-[30px] sm:px-[20px]">
//           {/* Heading */}
//           <div className="w-full h-auto md:w-[281px] h-[89px] mt-[30px] md:mt-[70px] gap-[13px] opacity-1 ml-[25px]">
//             <h1 className="w-full text-[#2A254B] text-[36px] font-normal leading-[44.28px] text-left opacity-1 md:ml-[60px]">
//               {productData.name}
//             </h1>
//             <div className="w-full text-[#2A254B] text-[24px] font-normal leading-[32.4px] text-left opacity-1 md:ml-[60px]">
//               £{productData.price}
//             </div>
//           </div>

//           {/* Description Section */}
//           <div className="w-full md:w-[602px] h-auto md:h-[251px] mt-[30px] px-[10px] md:px-[100px] py-[40px] gap-[16px] opacity-1">
//             <div className="w-full md:w-[522px] h-auto gap-[16px] opacity-1">
//               <div className="w-full h-[20px] opacity-1">
//                 <h2 className="font-clash-display text-[19px] text-[#2A254B]">Description</h2>
//               </div>

//               <div className="w-full h-auto gap-[20px] opacity-1">
//                 <p className="font-satoshi text-[16px] text-[#2A254B] mt-[25px]">
//                   {productData.description}
//                 </p>
//                 <ul className="font-satoshi text-[16px] text-[#2A254B] mt-[25px] px-[20px] md:px-0">
//                   {productData.features.map((feature: string, index: number) => (
//                     <li key={index}> ◼️ {feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Dimensions Section */}
//           <div className="w-full md:w-[241px] h-auto md:h-[99px] mt-[25px] md:mt-[70px] gap-[28px] opacity-1 ml-[45px]">
//             <h3 className="text-[#2A254B] font-clash-display text-[18px]">Dimensions</h3>

//             {/* Flex container for dimensions */}
//             <div className="flex flex-row justify-between gap-[20px] opacity-1 mt-[25px]">
//               <div className="w-[30%] h-[51px]">
//                 <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Height</p>
//                 <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">{productData.dimensions.height}</p>
//               </div>

//               <div className="w-[30%] h-[51px]">
//                 <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Width</p>
//                 <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">{productData.dimensions.width}</p>
//               </div>

//               <div className="w-[30%] h-[51px]">
//                 <p className="w-[43px] h-[17px] font-clash-display text-[14px] text-[#2A254B]">Depth</p>
//                 <p className="w-[44px] h-[22px] font-satoshi text-[16px] text-[#2A254B] mt-3">{productData.dimensions.depth}</p>
//               </div>
//             </div>
//           </div>

//           {/* Add to Cart & Amount Counter Section */}
//           <div className="w-full md:w-[602px] h-auto mt-[50px] md:mt-[70px] px-[20px] md:px-[105px] py-[32px] opacity-1">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="w-full md:w-[209px] h-auto flex gap-[22px] opacity-1">
//                 <div className="w-[65px] h-[20px] font-clash-display text-[18px] text-[#2A254B] mt-[8px]">Amount</div>
//                 <div className="w-[122px] h-[46px] flex justify-between items-center px-[16px] opacity-1" style={{ backgroundColor: '#F9F9F9' }}>
//                   <button className="text-[black] text-[16px]">-</button>
//                   <span className="text-[#2A254B] text-[16px]">1</span>
//                   <button className="text-[black] text-[16px]">+</button>
//                 </div>
//               </div>

//               <button className="w-full md:w-[143px] h-[56px] bg-[#2A254B] text-white text-[16px] font-medium leading-[24px] opacity-1 mt-[20px] md:mt-0 hover:bg-[#F9F9F9] hover:text-[#2A254B] transform hover:scale-105 transition-all duration-300">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <CeramicAbout/>
//       <Feature/>
//       <Signup/>
//     </>
//   );
// };
// export default ProductDetail;
// src/app/product/[slug]/page.tsx
import ProductDetailServer from './ProductDetailServer';

export default ProductDetailServer;
