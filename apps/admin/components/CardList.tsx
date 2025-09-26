// components/CardList.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import {
  popularProducts,
  latestTransactions,
  popularContent,
} from "@/lib/data";
import { ProductItem, TransactionItem, ContentItem } from "@/lib/data";

// Updated props to accept items and title separately
interface CardListProps {
  title: string;
  items?: ProductItem[] | TransactionItem[] | ContentItem[];
  type?: "products" | "transactions" | "content";
}

// Fallback for when no items are passed
const getItems = (type?: string, items?: any[]) => {
  if (items) return items;

  switch (type) {
    case "products":
      return popularProducts;
    case "transactions":
      return latestTransactions;
    case "content":
      return popularContent;
    default:
      return popularProducts;
  }
};

const CardList = ({ title, items, type }: CardListProps) => {
  const dataItems = getItems(type, items);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {dataItems.map((item) => {
          // Product Item
          if ("price" in item && "shortDescription" in item) {
            const productItem = item as ProductItem;
            return (
              <Card
                key={productItem.id}
                className="flex flex-row items-center justify-between gap-4 p-2"
              >
                {/* Image */}
                <div className="w-12 h-12 rounded-sm relative overflow-hidden shrink-0">
                  <Image
                    src={
                      Object.values(productItem.images)[0] ||
                      "/fallback-image.png"
                    }
                    alt={productItem.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {productItem.name}
                  </CardTitle>
                  <p className="text-xs text-gray-500">
                    {productItem.shortDescription}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-0">
                  <div className="text-sm font-medium">
                    ${productItem.price.toFixed(2)}
                  </div>
                </CardFooter>
              </Card>
            );
          }

          // Transaction Item
          if ("count" in item && "badge" in item) {
            const transactionItem = item as TransactionItem;
            return (
              <Card
                key={transactionItem.id}
                className="flex flex-row items-center justify-between gap-4 p-2"
              >
                {/* Image */}
                <div className="w-12 h-12 rounded-sm relative overflow-hidden shrink-0">
                  <Image
                    src={transactionItem.image || "/fallback-image.png"}
                    alt={transactionItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {transactionItem.title}
                  </CardTitle>
                  <p className="text-xs text-gray-500">
                    {transactionItem.badge}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-0">
                  <div className="text-sm font-medium">
                    ${transactionItem.count.toFixed(2)}
                  </div>
                </CardFooter>
              </Card>
            );
          }

          // Content Item
          if ("views" in item && "description" in item) {
            const contentItem = item as ContentItem;
            return (
              <Card
                key={contentItem.id}
                className="flex flex-row items-center justify-between gap-4 p-2"
              >
                {/* Image */}
                <div className="w-12 h-12 rounded-sm relative overflow-hidden shrink-0">
                  <Image
                    src={contentItem.image || "/fallback-image.png"}
                    alt={contentItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {contentItem.title}
                  </CardTitle>
                  <p className="text-xs text-gray-500">
                    {contentItem.description}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-0">
                  <div className="text-sm font-medium">
                    {contentItem.views.toLocaleString()} views
                  </div>
                </CardFooter>
              </Card>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default CardList;
