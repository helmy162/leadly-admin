"use client";

import AddCategoryModal from "@/sections/AddCategoryModal";
import PlusIcon from "@/components/icons/PlusIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { useState } from "react";
import Categories from "@/sections/Categories";
import ConfirmationModal from "@/sections/ConfirmationModal";

export default function CategoriesPage() {
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <main className="flex h-full w-full flex-grow flex-col gap-6 pb-10 text-primary">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-black">إدارة التصنيفات</h2>
        <h2 className="text-xs text-textGray">تحكم بالتصنيفات</h2>
      </div>

      <div className="flex items-center justify-between gap-[76px]">
        <button
          type="button"
          onClick={() => setAddCategoryModal(true)}
          className="focus:shadow-outline flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primaryHover focus:outline-none"
        >
          <PlusIcon />
          إضافة تصنيف
        </button>

        <button className="rounded-xl bg-white p-3 text-primary">
          <ServiceIcon width={24} height={24} />
        </button>
      </div>

      <Categories />

      <AddCategoryModal
        open={addCategoryModal}
        setOpen={setAddCategoryModal}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تمت إضافة التصنيف بنجاح"
      />
    </main>
  );
}
