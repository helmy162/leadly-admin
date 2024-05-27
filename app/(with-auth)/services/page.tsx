"use client";

import AddServiceModal from "@/components/AddServiceModal";
import PlusIcon from "@/components/icons/PlusIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import Services from "@/sections/Services";
import { useState } from "react";

export default function ServicesPage() {
  const [addServiceModel, setAddServiceModel] = useState(true);
  return (
    <main className="flex h-full w-full flex-grow flex-col gap-6 pb-10 text-primary">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-black">إدارة الخدمات</h2>
        <h2 className="text-xs text-textGray">تحكم بالخدمات وأسعارها</h2>
      </div>

      <div className="flex items-center justify-between gap-[76px]">
        <button
          type="button"
          onClick={() => setAddServiceModel(true)}
          className="focus:shadow-outline flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primaryHover focus:outline-none"
        >
          <PlusIcon />
          إضافة خدمة
        </button>

        <button className="rounded-xl bg-white p-3 text-primary">
          <ServiceIcon width={24} height={24} />
        </button>
      </div>

      <Services />

      <AddServiceModal open={addServiceModel} setOpen={setAddServiceModel} />
    </main>
  );
}
