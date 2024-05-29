"use client";

import AddEmployeeModal from "@/sections/AddEmployeeModal";
import PlusIcon from "@/components/icons/PlusIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { useState } from "react";
import Employees from "@/sections/Employees";
import ConfirmationModal from "@/sections/ConfirmationModal";

export default function EmployeesPage() {
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <>
      <main className="flex h-full w-full flex-grow flex-col gap-6 pb-10 text-primary">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-black">إدارة الموظفين</h2>
          <h2 className="text-xs text-textGray">تحكم بالموظفين</h2>
        </div>

        <div className="flex items-center justify-between gap-[76px]">
          <button
            type="button"
            onClick={() => setAddEmployeeModal(true)}
            className="focus:shadow-outline flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primaryHover focus:outline-none"
          >
            <PlusIcon />
            إضافة موظف
          </button>

          <button className="rounded-xl bg-white p-3 text-primary">
            <ServiceIcon width={24} height={24} />
          </button>
        </div>

        <Employees />
      </main>
      <AddEmployeeModal
        open={addEmployeeModal}
        setOpen={setAddEmployeeModal}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تمت إضافة الموظف بنجاح"
      />
    </>
  );
}
