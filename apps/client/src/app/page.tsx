import ProductList from "@/components/ProductList";
import Image from "next/image";
const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/featured.png"
          alt="Featured Product"
          fill
          className="object-cover"
        />
      </div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default Homepage;
