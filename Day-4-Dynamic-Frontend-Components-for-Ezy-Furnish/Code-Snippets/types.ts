// // src/app/types.ts (or src/types.ts)
// export type Product = {
//     _id: string;
//     name: string;
//     image: {
//       asset: {
//         url: string;
//       };
//     };
//     price: number;
//     description: string;
//     tags: string[];
//     features: string[];
//     dimensions: {
//       height: string;
//       width: string;
//       depth: string;
//     };
//   };
  
  // src/app/types.ts (or src/types.ts)
// export type Product = {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       url: string; // The URL of the image
//     };
//   };
//   price: number;
//   description: string;
//   tags: string[];
//   features: string[];
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   slug: {
//     current: string; // The slug for the product
//   };
// };
// types.ts
export type Category = {
  _id: string;
  name: string;
};

export type Product = {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string; // The URL of the image
    };
  };
  price: number;
  description: string;
  tags: string[];
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  category:Category ;
  
  slug: {
    current: string; // The slug for the product
  };
  quantity:number;
};
