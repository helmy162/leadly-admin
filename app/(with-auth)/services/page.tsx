"use client";

import AddServiceModal from "@/sections/AddServiceModal";
import PlusIcon from "@/components/icons/PlusIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import Services from "@/sections/Services";
import { useEffect, useState } from "react";
import ConfirmationModal from "@/sections/ConfirmationModal";
import FilterMenu from "@/components/FilterMenu";
import { ALL_CATEGORIES } from "@/mockups/categories";
import { services } from "@/mockups/services";
import Empty from "@/sections/Empty";

export default function ServicesPage() {
  const [addServiceModal, setAddServiceModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    console.log("categoryFilter", categoryFilter);
    let filtered = services;

    if (categoryFilter) {
      filtered = filtered.filter((service) =>
        service.categories?.includes(categoryFilter),
      );
    }

    setFilteredServices(filtered);
  }, [categoryFilter]);

  const hasServices = filteredServices.length > 0;

  return (
    <main className="flex h-full w-full flex-grow flex-col gap-6 pb-10 text-primary">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-black">إدارة الخدمات</h2>
        <h2 className="text-xs text-textGray">تحكم بالخدمات وأسعارها</h2>
      </div>

      <div className="flex items-center justify-between gap-5">
        <button
          type="button"
          onClick={() => setAddServiceModal(true)}
          className="focus:shadow-outline flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primaryHover focus:outline-none"
        >
          <PlusIcon />
          إضافة خدمة
        </button>

        <FilterMenu
          name="التصنيفات"
          options={ALL_CATEGORIES.map((e) => e.name)}
          onChange={setCategoryFilter}
        />
      </div>

      {hasServices ? (
        <Services services={filteredServices} />
      ) : (
        <Empty message="لا توجد خدمات" />
      )}

      <AddServiceModal
        open={addServiceModal}
        setOpen={setAddServiceModal}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تمت إضافة الخدمة بنجاح"
      />
    </main>
  );
}
