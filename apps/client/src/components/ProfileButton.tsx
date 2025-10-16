"use client";

import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileButton = () => {
  const router = useRouter();
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action
          label="See Orders"
          labelIcon={<ShoppingCart className="w-4 h-4" />}
          onClick={() => router.push("/orders")}
        />
      </UserButton.MenuItems>
    </UserButton>
  );
};
export default ProfileButton;
