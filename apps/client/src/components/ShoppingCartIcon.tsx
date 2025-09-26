"use client";

import useCartStore from "@/app/stores/cartStore";
import { ShoppingCart } from "lucide-react";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-400" />
      {totalItems > 0 && (
        <span className="absolute -top-3 -right-3 bg-yellow-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
