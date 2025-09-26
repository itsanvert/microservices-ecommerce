import ProductionInteraction from "@/components/ProductionInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

// TEMPORARY
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};
export const generateMetadata = ({ params }: { params: { id: string } }) => {
  // TODO:get the product from
  // TEMPORARY
  return {
    title: product.name,
    description: product.shortDescription,
  };
};
const ProductDetail = ({
  searchParams,
  params,
}: {
  searchParams: { color?: string; size?: string };
  params: { id: string };
}) => {
  const { size, color } = searchParams;
  const selectSize = size || (product.sizes[0] as string);
  const selectColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 lg:flex-row md-gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        {/* IMAGE */}
        <Image
          src={product.images?.[selectColor] || ""}
          width={500}
          height={500}
          alt={product.name}
          className="object-contain rounded-md "
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium ">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.description}</p>
        <h2 className="text-2xlxl font-medium">
          Price: ${product.price.toFixed(2)}
        </h2>
        <ProductionInteraction
          product={product}
          selectedSize={selectSize}
          selectedColor={selectColor}
        />
        {/* CART INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" width={50} height={50} alt="klarna" />
          <Image src="/cards.png" width={50} height={50} alt="cards" />
          <Image src="/stripe.png" width={50} height={50} alt="stripe" />
        </div>
        <p className="text-sm text-gray-500">
          តម្លៃនេះគឺត្រូវបានគណនីនៅក្នុងការទូទាត់។
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
