"use client";
import WorkingHoursInput from "@/components/WorkingHoursInput";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import MapIcon from "@/components/icons/MapIcon";
import { english_font } from "@/fonts";
import { business } from "@/mockups/business";
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
  const [editBusinessModal, setEditBusinessModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const onWorkingHoursChange = (day:string, data: dayType) => {
    // day is Friday | Saturday | Sunday | Monday | Tuesday | Wednesday | Thursday
    // data is {day: string, from: string, to: string}
  }
  return (
    <>
      <main className="flex h-full w-full flex-grow flex-col gap-4 pb-10 text-black">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-4 pb-10">
          <button
            className="w-[100px] rounded-lg border border-borderGray p-2 text-xs font-bold leading-5"
            onClick={() => setEditBusinessModal(true)}
          >
            تحرير البيانات
          </button>
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
          <h2 className="text-sm font-bold">معلومات المنظمة</h2>
          <h3 className="text-sm font-medium text-[#94A3B8]">
            وصف مختصر عن المنظمة..
          </h3>
          <hr className="mb-2 mt-5 border-[#F1F5F9]" />
          <div className="flex flex-col gap-4">
            {info.map(({ value, icon }, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="flex size-6 items-center justify-center">
                  {icon}
                </div>
                <bdi
                  className={`${english_font.className} text-left text-sm font-medium`}
                >
                  {value}
                </bdi>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 rounded-xl bg-white px-4 py-[22px]">
            <h2 className="text-sm font-bold">أيام وأوقات العمل</h2>

            {days.map((day) => (
              <WorkingHoursInput
                key={day.value}
                name={day.value}
                label={day.name}
                intialValue={business?.days && day.value in business?.days! ? business?.days[day.value as keyof typeof business.days] : null}
                onChange={(data: dayType) => onWorkingHoursChange(day.value, data)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 rounded-xl bg-white px-4 py-[22px]">
            <h2 className="text-sm font-bold">التقييمات</h2>
            <Link href="/testimonials" className="text-sm font-medium text-primary">
              الذهاب إلى التقييمات
            </Link>

          </div>
          
        </div>
      </main>
      <EditBusinessModal
        open={editBusinessModal}
        setOpen={setEditBusinessModal}
        onSuccess={() => setConfirmModal(true)}
        data = {business}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات المنشأة بنجاح"
      />
    </>
  );
}

const info = [
  {
    value: "2972 Westheimer Rd.",
    icon: <MapIcon className="text-[#94A3B8]" width={24} height={24} />,
  },
  {
    value: "Binford Ltd.",
    icon: <BriefcaseIcon className="text-[#94A3B8]" width={18} height={17} />,
  },
  {
    value: "September 24, 2017",
    icon: <CalendarIcon className="text-[#94A3B8]" width={24} height={24} />,
  },
  {
    value: "dribbble.com/Angela",
    icon: <LinkIcon className="text-[#94A3B8]" width={16} height={16} />,
  },
];

const days = [
  { name: "السبت", value: "Saturday" },
  { name: "الأحد", value: "Sunday" },
  { name: "الإثنين", value: "Monday" },
  { name: "الثلاثاء", value: "Tuesday" },
  { name: "الأربعاء", value: "Wednesday" },
  { name: "الخميس", value: "Thursday" },
  { name: "الجمعة", value: "Friday" },
];
