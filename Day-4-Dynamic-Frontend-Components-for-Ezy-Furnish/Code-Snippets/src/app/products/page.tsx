// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { client } from "../../../scripts/sanityClient";
// import Topnav from "../components/Topnav";

// async function products({params}:{params:{id:string} }) {

// const [data, setData] = useState<any>();

// const query = `*[_type == "product"]{
// _id,
// name,
// image,
// slug,
// description,
// price,
// quantity,
// tags,
// features,
// dimensions,
// category,
// }`;

// useEffect(()=>{
//     (async()=> {
//     const products =await client.fetch(query);
//     const index =products.findIndex((item:any) => params.id == item._id);
//    const pro = products[index];
//    setData(pro);
// })()
// }, []) 
// const [selectImage, setSelectedImage] = useState<string>(data?.image || "");

// function handleImageClick(image:string):void {
//     setSelectedImage(image);
// }
// console.log(data);

// }
// <div>
//   return (
//     <>
//     <Topnav/>
   
//       <div className="w-full">
//         {/* Background Image */}
//         <div className="w-full">
//           <Image
//             src="/bgframe.png"
//             alt="bgframe"
//             width={1440}
//             height={209}
//             className="w-full object-cover"
//           />
//         </div>


      
//         {/* Filters and Sorting */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-3 md:px-20 p-3 md:text-base sm:text-sm text-xs">
//           {/* Left Section: Filters */}
//           <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start w-full">
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Category</h1>
//               <IoMdArrowDropdown />
//             </div>
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Product type</h1>
//               <IoMdArrowDropdown />
//             </div>
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Price</h1>
//               <IoMdArrowDropdown />
//             </div>
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Brand</h1>
//               <IoMdArrowDropdown />
//             </div>
//           </div>

//           {/* Right Section: Sorting */}
//           <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-start">
//             <h1 className="font-normal cursor-pointer hover:stroke-gray-400">Sorting by:</h1>
//             <h1 className="font-normal cursor-pointer hover:stroke-gray-400">Date added</h1>
//             <IoMdArrowDropdown />
//           </div>
//         </div>

//       </div>
//   {/* Image Grid */}
//       <div className="flex flex-col sm:flex-row justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
//         {/* Image 1 */}
//         <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/chair.jpg"
//               alt="The Dandy chair"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             The Dandy chair
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£250</p>
//         </div>

//         {/* Image 2 */}
//         <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/vases.jpg"
//               alt="Rustic Vase Set"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             Rustic Vase Set
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//         </div>

//         {/* Image 3 */}
//         <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/grayvase.jpg"
//               alt="The Silky Vase"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             The Silky Vase
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//         </div>

//         {/* Image 4 */}
//         <div className="w-full sm:w-[305px] h-[462px] hidden sm:block transform transition-transform hover:translate-y-[-10px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/lamp.jpg"
//               alt="The Lucky Lamp"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             The Lucky Lamp
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£399</p>
//         </div>
//       </div>
      
//         {/* Image Grid */}
//             <div className="flex flex-col sm:flex-row justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
//               {/* Image 1 */}
//               <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//                 <div className="w-full h-[375px]">
//                   <Image
//                     src="/goldenLamp.png"
//                     alt="The Dandy chair"
//                     width={305}
//                     height={375}
//                     className="w-full h-full opacity-1"
//                   />
//                 </div>
//                 <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                   The Dandy chair
//                 </h4>
//                 <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£250</p>
//               </div>
      
//               {/* Image 2 */}
//               <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//                 <div className="w-full h-[375px]">
//                   <Image
//                     src="/smallVase.png"
//                     alt="Rustic Vase Set"
//                     width={305}
//                     height={375}
//                     className="w-full h-full opacity-1"
//                   />
//                 </div>
//                 <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                   Rustic Vase Set
//                 </h4>
//                 <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//               </div>
      
//               {/* Image 3 */}
//               <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//                 <div className="w-full h-[375px]">
//                   <Image
//                     src="/table.png"
//                     alt="The Silky Vase"
//                     width={305}
//                     height={375}
//                     className="w-full h-full opacity-1"
//                   />
//                 </div>
//                 <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                   The Silky Vase
//                 </h4>
//                 <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//               </div>
      
//               {/* Image 4 */}
//               <div className="w-full sm:w-[305px] h-[462px] hidden sm:block transform transition-transform hover:translate-y-[-10px]">
//                 <div className="w-full h-[375px]">
//                   <Image
//                     src="/3chairs.png"
//                     alt="The Lucky Lamp"
//                     width={305}
//                     height={375}
//                     className="w-full h-full opacity-1"
//                   />
//                 </div>
//                 <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                   The Lucky Lamp
//                 </h4>
//                 <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£399</p>
//               </div>
//             </div>

//               {/* Image Grid */}
//                   <div className="flex flex-col sm:flex-row justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px] mb-[20px]">
//                     {/* Image 1 */}
//                     <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//                       <div className="w-full h-[375px]">
//                         <Image
//                           src="/chair.jpg"
//                           alt="The Dandy chair"
//                           width={305}
//                           height={375}
//                           className="w-full h-full opacity-1"
//                         />
//                       </div>
//                       <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                         The Dandy chair
//                       </h4>
//                       <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£250</p>
//                     </div>
            
//                     {/* Image 2 */}
//                     <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//                       <div className="w-full h-[375px]">
//                         <Image
//                           src="/vases.jpg"
//                           alt="Rustic Vase Set"
//                           width={305}
//                           height={375}
//                           className="w-full h-full opacity-1"
//                         />
//                       </div>
//                       <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                         Rustic Vase Set
//                       </h4>
//                       <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//                     </div>
            
//                     {/* Image 3 */}
//                     <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//                       <div className="w-full h-[375px]">
//                         <Image
//                           src="/grayvase.jpg"
//                           alt="The Silky Vase"
//                           width={305}
//                           height={375}
//                           className="w-full h-full opacity-1"
//                         />
//                       </div>
//                       <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                         The Silky Vase
//                       </h4>
//                       <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//                     </div>
            
//                     {/* Image 4 */}
//                     <div className="w-full sm:w-[305px] h-[462px] hidden sm:block transform transition-transform hover:translate-y-[-10px]">
//                       <div className="w-full h-[375px]">
//                         <Image
//                           src="/lamp.jpg"
//                           alt="The Lucky Lamp"
//                           width={305}
//                           height={375}
//                           className="w-full h-full opacity-1"
//                         />
//                       </div>
//                       <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//                         The Lucky Lamp
//                       </h4>
//                       <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£399</p>
//                     </div>
//                   </div>
//                   <button className="w-full lg:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] font-normal leading-[24px] transition-all hover:bg-[#2A254B] hover:text-white flex justify-center items-center transition-all mt-[30px] lg:ml-[709px] mb-[5px]">
//         View Collection

//       </button>
//     </>
// );
//     </div>
  
  


// export default products;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { client } from "../../../scripts/sanityClient";
// import imageUrlBuilder from '@sanity/image-url'; // Import the image URL builder
// import Topnav from "../components/Topnav";

// type Product = {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   price: number;
// };

// const builder = imageUrlBuilder(client); // Create the builder instance

// // Function to generate image URL
// function urlFor(source: Product) {
//   return builder.image(source).width(305).height(375).url(); // Adjust image dimensions as needed
// }

// async function fetchProducts(query: string) {
//   try {
//     const products = await client.fetch(query);
//     return products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

// const ProductsPage = () => {
//   const [data, setData] = useState<Product[]>([]); // Store all products
//   const [selectedImage, setSelectedImage] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const query = `*[_type == "product"]{
//     _id,
//     name,
//     image,
//     slug,
//     description,
//     price,
//     quantity,
//     tags,
//     features,
//     dimensions,
//     category,
//   }`;

//   useEffect(() => {
//     const getProductData = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Reset previous errors
//       const products = await fetchProducts(query);

//       if (products.length === 0) {
//         setError("No products found.");
//       } else {
//         setData(products); // Set all products
//       }
//       setLoading(false); // Finished loading
//     };

//     getProductData();
//   });

//   const handleImageClick = (image: string) => {
//     setSelectedImage(image);
//   };

//   // If data is still loading, show a loading message
//   if (loading) return <div>Loading...</div>;

//   // If there was an error, display the error message
//   if (error) return <div>{error}</div>;

//   return (
//     <>
//       <Topnav />
//       <div className="w-full">
//         <div className="w-full">
//           <Image
//             src="/bgframe.png"
//             alt="bgframe"
//             width={1440}
//             height={209}
//             className="w-full object-cover"
//           />
//         </div>

//         {/* Filters and Sorting */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-3 md:px-20 p-3 md:text-base sm:text-sm text-xs">
//           <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start w-full">
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Category</h1>
//               <IoMdArrowDropdown />
//             </div>
          
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Price</h1>
//               <IoMdArrowDropdown />
//             </div>
//             <div className="flex items-center gap-2 cursor-pointer hover:stroke-gray-400">
//               <h1 className="font-normal">Brand</h1>
//               <IoMdArrowDropdown />
//             </div>
//           </div>

//           {/* Sorting */}
//           <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-start">
//             <h1 className="font-normal cursor-pointer hover:stroke-gray-400">Sorting by</h1>
//             <IoMdArrowDropdown className="cursor-pointer hover:stroke-gray-400" />
//           </div>
//         </div>

//         {/* Product Images */}
//         <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
//           {data.map((product: any) => (
//             <div key={product._id} className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
//               <div className="w-full h-[375px]">
//                 <Image
//                   src={urlFor(product.image).toString()} // Use the URL builder for the image
//                   alt={product.name}
//                   width={305}
//                   height={375}
//                   className="w-full h-full opacity-1 cursor-pointer"
//                   onClick={() => handleImageClick(urlFor(product.image).toString())} // Update selected image on click
//                 />
//               </div>
//               <h4 className="text-[#2A254B] text-[20px] font-normal mt-[12px]">{product.name}</h4>
//               <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£{product.price}</p>
//             </div>
//           ))}
//         </div>

        

//         {/* View Collection Button */}
//         <button className="w-full lg:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] font-normal leading-[24px] transition-all hover:bg-[#2A254B] hover:text-white flex justify-center items-center transition-all mt-[30px] lg:ml-[709px] mb-[5px]">
//           View Collection
//         </button>
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../../../scripts/sanityClient";
// import imageUrlBuilder from '@sanity/image-url';
// import Topnav from "../components/Topnav";

// import Category from "../components/Category";

// type Product = {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   slug: {
//     current: string;
//   };
//   price: number;
//   tags: string[];
// };

// const builder = imageUrlBuilder(client); // Create the builder instance

// // Function to generate image URL
// function urlFor(source: Product) {
//   return builder.image(source.image).width(305).height(375).url(); // Adjust image dimensions as needed
// }

// const ProductsPage = () => {
//   const [data, setData] = useState<Product[]>([]); // Properly typed state for the product data
//   const [filteredData, setFilteredData] = useState<Product[]>([]); // Filtered products based on search
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Store search term

//   const query = `*[_type == "product"]{
//     _id,
//     name,
//     image,
//     slug,
//     price,
//     tags,
//   }`;

//   useEffect(() => {
//     // Fetch products on component mount
//     const getProductData = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Reset previous errors
//       try {
//         const products = await client.fetch(query);
//         if (products.length === 0) {
//           setError("No products found.");
//         } else {
//           setData(products); // Set all products
//           setFilteredData(products); // Initially show all products
//         }
//       } catch {
//         setError("Error fetching products.");
//       }
//       setLoading(false); // Finished loading
//     };

//     getProductData();
//   }, [query]);

//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);

//     // Filter products by name or tags
//     const filteredProducts = data.filter((product) => {
//       return (
//         product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
//         product.tags.some((tag) =>
//           tag.toLowerCase().includes(e.target.value.toLowerCase())
//         )
//       );
//     });

//     setFilteredData(filteredProducts); // Set filtered products
//   };

//   return (
//     <>
//       <Topnav />
//       <div className="w-full">
//         <div className="w-full">
//           <Image
//             src="/bgframe.png"
//             alt="bgframe"
//             width={1440}
//             height={209}
//             className="w-full object-cover"
//           ></Image>
//         </div>

//         {/* Search Bar */}
//         <div className="flex justify-center mt-6">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search by name or tags..."
//             className="w-full max-w-lg px-4 py-2 text-sm border rounded-md"
//           />
//         </div>

//         <Category />

//         {/* Product Images */}
//         <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
//           {filteredData.length > 0 ? (
//             filteredData.map((product) => (
//               <div
//                 key={product._id}
//                 className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]"
//               >
//                 <div className="w-full h-[375px]">
//                   {/* Link to Product Detail Page */}
//                   <Link href={`/products/${product.slug.current}`}>
//                     <Image
//                       src={urlFor(product).toString()} // Use the URL builder for the image
//                       alt={product.name}
//                       width={305}
//                       height={375}
//                       className="w-full h-full opacity-1 cursor-pointer"
//                     ></Image>
//                   </Link>
//                 </div>
//                 <h4 className="text-[#2A254B] text-[20px] font-normal mt-[12px]">
//                   {product.name}
//                 </h4>
//                 <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">
//                   £{product.price}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p>No products found matching your search.</p>
//           )}
//         </div>

//         {/* View Collection Button */}
//         <Link href="/link">
//           <button className="w-full lg:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] font-normal leading-[24px] transition-all hover:bg-[#2A254B] hover:text-white flex justify-center items-center transition-all mt-[30px] lg:ml-[709px] mb-[5px]">
//             View Collection
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };

// // export default ProductsPage;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../../../scripts/sanityClient";
// import imageUrlBuilder from '@sanity/image-url';
// import Topnav from "../components/Topnav";
// import Category from "../components/Category";

// type Product = {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   slug: {
//     current: string;
//   };
//   price: number;
//   tags: string[];
// };

// const builder = imageUrlBuilder(client);

// // Function to generate image URL
// function urlFor(source: Product) {
//   return builder.image(source.image).width(305).height(375).url(); // Adjust image dimensions as needed
// }

// const ProductsPage = () => {
//   const [data, setData] = useState<Product[]>([]); // Properly typed state for the product data
//   const [filteredData, setFilteredData] = useState<Product[]>([]); // Filtered products based on search
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Store search term

//   const query = `*[_type == "product"]{
//     _id,
//     name,
//     image,
//     slug,
//     price,
//     tags,
//   }`;

//   useEffect(() => {
//     // Fetch products on component mount
//     const getProductData = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Reset previous errors
//       try {
//         const products = await client.fetch(query);
//         if (products.length === 0) {
//           setError("No products found.");
//         } else {
//           setData(products); // Set all products
//           setFilteredData(products); // Initially show all products
//         }
//       } catch {
//         setError("Error fetching products.");
//       }
//       setLoading(false); // Finished loading
//     };

//     getProductData();
//   }, [query]);

//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);

//     // Filter products by name or tags
//     const filteredProducts = data.filter((product) => {
//       return (
//         product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
//         product.tags.some((tag) =>
//           tag.toLowerCase().includes(e.target.value.toLowerCase())
//         )
//       );
//     });

//     setFilteredData(filteredProducts); // Set filtered products
//   };

//   return (
//     <>
//       <Topnav />
//       <div className="w-full">
//         {loading ? (
//           <div>Loading...</div>
//         ) : error ? (
//           <div>{error}</div>
//         ) : (
//           <>
//             <div className="w-full">
//               <Image
//                 src="/bgframe.png"
//                 alt="bgframe"
//                 width={1440}
//                 height={209}
//                 className="w-full object-cover"
//               ></Image>
//             </div>

//             <Category />

//             {/* Product Images */}
//             <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
//               {filteredData.length > 0 ? (
//                 filteredData.map((product) => (
//                   <div
//                     key={product._id}
//                     className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]"
//                   >
//                     <div className="w-full h-[375px]">
//                       {/* Link to Product Detail Page */}
//                       <Link href={`/products/${product.slug.current}`}>
//                         <Image
//                           src={urlFor(product).toString()} // Use the URL builder for the image
//                           alt={product.name}
//                           width={305}
//                           height={375}
//                           className="w-full h-full opacity-1 cursor-pointer"
//                         ></Image>
//                       </Link>
//                     </div>
//                     <h4 className="text-[#2A254B] text-[20px] font-normal mt-[12px]">
//                       {product.name}
//                     </h4>
//                     <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">
//                       £{product.price}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No products found matching your search.</p>
//               )}
//             </div>

//             {/* View Collection Button */}
//             <Link href="/link">
//               <button className="w-full lg:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] font-normal leading-[24px] transition-all hover:bg-[#2A254B] hover:text-white flex justify-center items-center transition-all mt-[30px] lg:ml-[709px] mb-[5px]">
//                 View Collection
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../scripts/sanityClient";
import imageUrlBuilder from '@sanity/image-url';
import Topnav from "../components/Topnav";
import Category from "../components/Category";

type Product = {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  price: number;
  tags: string[];
};

const builder = imageUrlBuilder(client);

// Function to generate image URL
function urlFor(source: Product) {
  return builder.image(source.image).width(305).height(375).url(); // Adjust image dimensions as needed
}

const ProductsPage = () => {
  // const [setData] = useState<Product[]>([]); // Properly typed state for the product data
  const [filteredData, setFilteredData] = useState<Product[]>([]); // Filtered products based on search
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const query = `*[_type == "product"]{
    _id,
    name,
    image,
    slug,
    price,
    tags,
  }`;

  useEffect(() => {
    // Fetch products on component mount
    const getProductData = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset previous errors
      try {
        const products = await client.fetch(query);
        if (products.length === 0) {
          setError("No products found.");
        } else {
           // Set all products
          setFilteredData(products); // Initially show all products
        }
      } catch {
        setError("Error fetching products.");
      }
      setLoading(false); // Finished loading
    };

    getProductData();
  }, [query]);

  return (
    <>
      <Topnav />
      <div className="w-full">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            <div className="w-full">
              <Image
                src="/bgframe.png"
                alt="bgframe"
                width={1440}
                height={209}
                className="w-full object-cover"
              ></Image>
            </div>

            <Category />

            {/* Product Images */}
            <div className="flex flex-wrap justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
              {filteredData.length > 0 ? (
                filteredData.map((product) => (
                  <div
                    key={product._id}
                    className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]"
                  >
                    <div className="w-full h-[375px]">
                      {/* Link to Product Detail Page */}
                      <Link href={`/products/${product.slug.current}`}>
                        <Image
                          src={urlFor(product).toString()} // Use the URL builder for the image
                          alt={product.name}
                          width={305}
                          height={375}
                          className="w-full h-full opacity-1 cursor-pointer"
                        ></Image>
                      </Link>
                    </div>
                    <h4 className="text-[#2A254B] text-[20px] font-normal mt-[12px]">
                      {product.name}
                    </h4>
                    <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">
                      £{product.price}
                    </p>
                  </div>
                ))
              ) : (
                <p>No products found matching your search.</p>
              )}
            </div>

            {/* View Collection Button */}
            <Link href="/link">
              <button className="w-full lg:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] font-normal leading-[24px] transition-all hover:bg-[#2A254B] hover:text-white flex justify-center items-center transition-all mt-[30px] lg:ml-[709px] mb-[5px]">
                View Collection
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
