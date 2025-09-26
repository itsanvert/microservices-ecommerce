"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

// 🟢 Schema & Type
export const shippingFormSchema = z.object({
  name: z.string().min(2, "សូមបញ្ចូលឈ្មោះយ៉ាងតិច 2 តួអក្សរ"),
  email: z.string().email("អ៊ីមែលមិនត្រឹមត្រូវ"),
  phone: z
    .string()
    .regex(/^[0-9]{8,12}$/, "លេខទូរស័ព្ទត្រូវមានចន្លោះ 8–12 ខ្ទង់"),
  address: z.string().min(5, "សូមបញ្ចូលអាសយដ្ឋានត្រឹមត្រូវ"),
  city: z.string().min(2, "សូមបញ្ចូលទីក្រុង ឬ ខេត្ត"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();
  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
    // TODO: save to state or call API
  };
  return (
    <form
      onSubmit={handleSubmit(handleShippingForm)}
      className="flex flex-col gap-4 w-full"
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          ឈ្មោះ
        </label>
        <input
          id="name"
          type="text"
          placeholder="វើត"
          {...register("name")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          អ៊ីមែល
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          {...register("email")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          លេខទូរសព្ទ
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="012345678"
          {...register("phone")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          អាសយដ្ឋាន
        </label>
        <input
          id="address"
          type="text"
          placeholder="ផ្លូវ 123, ភូមិ/សង្កាត់"
          {...register("address")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.address && (
          <p className="text-red-500 text-xs">{errors.address.message}</p>
        )}
      </div>

      {/* City */}
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          ទីក្រុង / ខេត្ត
        </label>
        <input
          id="city"
          type="text"
          placeholder="ភ្នំពេញ"
          {...register("city")}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none text-sm"
        />
        {errors.city && (
          <p className="text-red-500 text-xs">{errors.city.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
      >
        បន្តទៅជំហានបន្ទាប់
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ShippingForm;
