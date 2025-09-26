"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { PaymentFormInputs, paymentFormSchema } from "@/types";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    console.log("📦 Payment Data:", data);
    // TODO: save to state or call API
    router.push("/order-confirmation"); // example redirect
  };

  return (
    <form
      onSubmit={handleSubmit(handlePaymentForm)}
      className="flex flex-col gap-4 w-full"
    >
      {/* Card Holder */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          ឈ្មោះ នៅលើកាត
        </label>
        <input
          id="cardHolder"
          type="text"
          placeholder="វើត សឹម"
          {...register("cardHolder")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.cardHolder && (
          <p className="text-red-500 text-xs">{errors.cardHolder.message}</p>
        )}
      </div>

      {/* Card Number */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          លេខកាត
        </label>
        <input
          id="cardNumber"
          type="text"
          placeholder="1234 5678 9012 3456"
          {...register("cardNumber")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>
        )}
      </div>

      {/* Expiry Date */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expiryDate"
          className="text-xs text-gray-500 font-medium"
        >
          ផុតកំណត់ (MM/YY)
        </label>
        <input
          id="expiryDate"
          type="text"
          placeholder="12/25"
          {...register("expirationDate")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.expirationDate && (
          <p className="text-red-500 text-xs">{errors.expirationDate.message}</p>
        )}
      </div>

      {/* CVV */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          id="cvv"
          type="text"
          placeholder="123"
          {...register("cvv")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.cvv && (
          <p className="text-red-500 text-xs">{errors.cvv.message}</p>
        )}
      </div>

      {/* Logos */}
      <div className="flex items-center gap-2 mt-4">
        <Image src="/klarna.png" width={50} height={50} alt="klarna" />
        <Image src="/cards.png" width={50} height={50} alt="cards" />
        <Image src="/stripe.png" width={50} height={50} alt="stripe" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
      >
        បន្តទៅជំហានបន្ទាប់
        <ShoppingCart className="w-4 h-4" />
      </button>
    </form>
  );
};

export default PaymentForm;
