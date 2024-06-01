"use client";

import AddTestimonialModal from "@/sections/AddTestimonialModal";
import PlusIcon from "@/components/icons/PlusIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { useState } from "react";
import ConfirmationModal from "@/sections/ConfirmationModal";
import Testimonials from "@/sections/Testimonials";

export default function TestimonialsPage() {
  const [addTestimonialModal, setAddTestimonialModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <main className="flex h-full w-full flex-grow flex-col gap-6 pb-10 text-primary">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-black">إدارة التقييمات</h2>
        <h2 className="text-xs text-textGray">تحكم بالتقييمات</h2>
      </div>

      <div className="flex items-center justify-between gap-[76px]">
        <button
          type="button"
          onClick={() => setAddTestimonialModal(true)}
          className="focus:shadow-outline flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primaryHover focus:outline-none"
        >
          <PlusIcon />
          إضافة تقييم
        </button>

        <button className="rounded-xl bg-white p-3 text-primary">
          <ServiceIcon width={24} height={24} />
        </button>
      </div>

      <Testimonials />

      <AddTestimonialModal
        open={addTestimonialModal}
        setOpen={setAddTestimonialModal}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تمت إضافة التقييم بنجاح"
      />
    </main>
  );
}
