// src/app/products/[slug]/ProductDetailServer.tsx

import { client } from "../../../../scripts/sanityClient";
import imageUrlBuilder from '@sanity/image-url';
import { Product } from "../../../../types";
import ProductDetailClient from "./ProductDetailClient";



const builder = imageUrlBuilder(client);

// Function to generate image URL
export function urlFor(source: any) :string{  
  return builder.image(source).width(700).height(700).url() as string; // Adjust the size if needed
}

const ProductDetailServer = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch the product data by slug
  const productData: Product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      image,
      price,
      description,
      dimensions,
      features,
      tags,
      slug,
      category->{
        _id,
        name
      }
    }`,
    { slug }
  );

  if (!productData) {
    return <div>Product not found</div>;
  }

  // Pass fetched data to the Client Component
  return <ProductDetailClient productData={productData} />;
};

export default ProductDetailServer;
