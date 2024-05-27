"use client";
import DaysFilter from "@/sections/DaysFilter";
import { useState } from "react";
import Appointments from "@/sections/Appointments";
import { arabic_font, english_font } from "@/fonts";
import PlusIcon from "@/components/icons/PlusIcon";
import NoAppointments from "@/sections/NoAppointments";
import ReservationModal from "@/sections/ReservationModal";

export default function Home() {
  const [day, setDay] = useState(new Date().getDate());
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  const hasAppointment = true;
  return (
    <main className="flex h-full w-full flex-grow flex-col gap-4 pb-10 text-primary">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-black">أهلًا سلطان</h2>
          <h2 className="text-xs text-textGray">لديك اليوم ٥ حجوزات</h2>
          <h2
            className={`${english_font.className} text-right font-bold text-black`}
          >
            <bdi>
              19 May, 2024 <span className={arabic_font.className}>اليوم</span>
            </bdi>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setReserveModalOpen(true)}
          className="focus:shadow-outline flex h-12 w-fit items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primaryHover focus:outline-none"
        >
          <PlusIcon />
          إضافة حجز
        </button>
      </div>

      <DaysFilter day={day} setDay={setDay} />

      {hasAppointment ? <Appointments /> : <NoAppointments />}

      <ReservationModal open={reserveModalOpen} setOpen={setReserveModalOpen} />
    </main>
  );
}
