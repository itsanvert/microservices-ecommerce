"use client";

import { Suspense } from "react";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { ShippingFormInputs } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import useCartStore from "../stores/cartStore";

// TEMPORARY DEMO DATA
// const cartItems: CartItemsType = [
//   {
//     id: 1,
//     name: "អាវ Adidas CoreFit",
//     shortDescription: "អាវកីឡា ស្រួលស្រាល និងបែបម៉ូត។",
//     description: "អាវកីឡា មានគុណភាពខ្ពស់ សាកសមសម្រាប់ប្រើប្រាស់ប្រចាំថ្ងៃ។",
//     price: 39.9,
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["ប្រផេះ", "ស្វាយ", "បៃតង"],
//     images: {
//       ប្រផេះ: "/products/1g.png",
//       ស្វាយ: "/products/1p.png",
//       បៃតង: "/products/1gr.png",
//     },
//     quantity: 1,
//     selectSize: "M",
//     selectColor: "ប្រផេះ",
//   },
//   {
//     id: 2,
//     name: "អាវក្រៅ Puma Ultra Warm",
//     shortDescription: "អាវក្រៅក្តៅសមរម្យសម្រាប់រដូវត្រជាក់។",
//     description: "មានរចនាបទស្អាត ក្តៅ និងងាយស្រួលពាក់។",
//     price: 59.9,
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["ប្រផេះ", "បៃតង"],
//     images: { ប្រផេះ: "/products/2g.png", បៃតង: "/products/2gr.png" },
//     quantity: 1,
//     selectSize: "L",
//     selectColor: "ប្រផេះ",
//   },
//   {
//     id: 3,
//     name: "អាវ Nike Air Essentials",
//     shortDescription: "អាវពូលឡូវ័រ សំរាប់ប្រើប្រាស់កំសាន្ត និងហាត់ប្រាណ។",
//     description: "ស្រាល ត្រជាក់ មានរចនាបទទំនើប។",
//     price: 69.9,
//     sizes: ["S", "M", "L"],
//     colors: ["បៃតង", "ខៀវ", "ខ្មៅ"],
//     images: {
//       បៃតង: "/products/3gr.png",
//       ខៀវ: "/products/3b.png",
//       ខ្មៅ: "/products/3bl.png",
//     },
//     quantity: 1,
//     selectSize: "L",
//     selectColor: "បៃតង",
//   },
// ];

const steps = [
  { id: 1, title: "កន្សោមទំនិញ" },
  { id: 2, title: "អាសយដ្ឋានដឹកជញ្ជូន" },
  { id: 3, title: "វិធីបង់ប្រាក់" },
];

const CartPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");
  const { cart, removeFromCart } = useCartStore();

  // គណនាតម្លៃ
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1; // 10% បញ្ចុះតម្លៃ
  const shippingFee = 10;
  const total = subtotal - discount + shippingFee;

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12 px-4">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold">កន្សោមទំនិញរបស់អ្នក</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-300"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 &&
            cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center justify-between gap-6"
              >
                {/* IMAGE */}
                <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={item.images?.[item.selectedColor] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    បរិមាណ: {item.quantity} | ទំហំ: {item.selectedSize} | ពណ៌:{" "}
                    {item.selectedColor}
                  </p>
                  <p className="text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* DELETE */}
                <button className="w-8 h-8 bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-500 rounded-full flex items-center justify-center">
                  <Trash2
                    className="w-3 h-3"
                    onClick={() => removeFromCart(item)}
                  />
                </button>
              </div>
            ))}

          {activeStep === 2 && (
            <ShippingForm setShippingForm={setShippingForm} />
          )}
          {activeStep === 3 && shippingForm && <PaymentForm />}
          {activeStep === 3 && !shippingForm && (
            <p className="text-sm text-gray-500">
              សូមបំពេញអាសយដ្ឋានដឹកជញ្ជូនមុនពេលបន្តទៅបង់ប្រាក់។
            </p>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-6">
          <h2 className="font-semibold text-lg">សង្ខេបការទិញ</h2>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">តម្លៃសរុប</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">បញ្ចុះតម្លៃ (10%)</p>
              <p className="font-medium">- ${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">ថ្លៃដឹកជញ្ជូន</p>
              <p className="font-medium">${shippingFee.toFixed(2)}</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-base font-semibold">
              <p>តម្លៃចុងក្រោយ</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>

          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
            >
              បន្តទៅជំហានបន្ទាប់
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CartPage() {
  return (
    <Suspense>
      <CartPageContent />
    </Suspense>
  );
}
