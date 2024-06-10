"use client";
import WorkingHoursInput from "@/components/WorkingHoursInput";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import MapIcon from "@/components/icons/MapIcon";
import { english_font } from "@/fonts";
import { business } from "@/mockups/business";
import { business_options } from "@/mockups/business_options";
import ConfirmationModal from "@/sections/ConfirmationModal";
import EditBusinessModal from "@/sections/EditBusinessModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type dayType = {
  from: string;
  to: string;
  active: boolean;
};

export default function BusinessInfoPage() {
  const [editBusinessModal, setEditBusinessModal] = useState(0);
  const [confirmModal, setConfirmModal] = useState(false);

  const onWorkingHoursChange = (day: string, data: dayType) => {
    // day is Friday | Saturday | Sunday | Monday | Tuesday | Wednesday | Thursday
    // data is {day: string, from: string, to: string}
  };
  return (
    <>
      <main className="flex h-full w-full flex-grow flex-col gap-4 pb-10 text-black">
        <div className="flex flex-col gap-7 rounded-xl bg-white px-4 pb-10 py-14">
          <div className="flex flex-col items-center gap-4">
            <div className="flex size-24 items-center justify-center rounded-full border-2 border-[#FBFBFB] p-4">
              <Image
                src="/logo.svg"
                alt="lifeway"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-[22px] font-bold">عيادة مجمع الحياة الطبي</h1>
              <h1
                className={`${english_font.className} text-sm font-medium text-textGray`}
              >
                lifeway
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-white px-4 py-[22px]">
          {business_options.map((option, index) => (
            <div
              key={option.step}
              className="flex flex-col gap-6 rounded-2xl bg-bgGray p-4"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">{option.name}</h2>
                <p className="text-sm text-[#94A3B8]">{option.description}</p>
              </div>
              <button
                className="h-12 w-full rounded-xl bg-primary p-2 font-bold text-white"
                onClick={() => setEditBusinessModal(option.step)}
              >
                تحرير
              </button>
            </div>
          ))}

          <div className="flex flex-col gap-6 rounded-2xl bg-bgGray p-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">إدارة التقييمات</h2>
              <p className="text-sm text-[#94A3B8]">إضافة التقييمات وتعديلها</p>
            </div>
            <Link
              href="/testimonials"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-primary p-2 font-bold text-white"
            >
              تحرير
            </Link>
          </div>
        </div>
      </main>
      <EditBusinessModal
        open={!!editBusinessModal}
        setOpen={setEditBusinessModal}
        onSuccess={() => setConfirmModal(true)}
        data={business}
        step={editBusinessModal}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات المنشأة بنجاح"
      />
    </>
  );
}