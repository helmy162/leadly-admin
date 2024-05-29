"use client";
import DaysFilter from "@/sections/DaysFilter";
import { useEffect, useState } from "react";
import Appointments from "@/sections/Appointments";
import { arabic_font, english_font } from "@/fonts";
import PlusIcon from "@/components/icons/PlusIcon";
import NoAppointments from "@/sections/NoAppointments";
import ReservationModal from "@/sections/ReservationModal";
import ConfirmationModal from "@/sections/ConfirmationModal";
import { appointments } from "@/mockups/appointments";
import FilterMenu from "@/components/FilterMenu";
import { employees } from "@/mockups/employees";
import { services } from "@/mockups/services";

export default function Home() {
  const [day, setDay] = useState<string | null>(null);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const [employeesFilter, setEmployeesFilter] = useState<string>("");
  const [servicesFilter, setServicesFilter] = useState<string>("");

  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);

  useEffect(() => {
    const date = new Date();
    const todayValue = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setDay(todayValue);
  }, []);

  useEffect(() => {
    let filtered = appointments;

    if (day) {
      filtered = filtered.filter((appointment) => appointment.date === day);
    }

    if (employeesFilter) {
      filtered = filtered.filter((appointment) =>
        appointment.employees?.includes(employeesFilter),
      );
    }

    if (servicesFilter) {
      filtered = filtered.filter((appointment) =>
        appointment.services?.includes(servicesFilter),
      );
    }

    setFilteredAppointments(filtered);
  }, [day, employeesFilter, servicesFilter]);

  // get today's date
  const fullDate = new Date();
  const todayDay = fullDate.toLocaleDateString("en-US", {
    day: "numeric",
  });
  const todayMonth = fullDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const todayYear = fullDate.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const today = `${todayDay} ${todayMonth}, ${todayYear}`;

  const hasAppointments = filteredAppointments.length > 0;

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
              {today} <span className={arabic_font.className}>اليوم</span>
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

      <div className="flex gap-5">
        <FilterMenu
          name="الموظفين"
          options={employees.map((e) => e.name)}
          onChange={setEmployeesFilter}
        />
        <FilterMenu
          name="الخدمات"
          options={services.map((s) => s.name)}
          onChange={setServicesFilter}
        />
      </div>

      {hasAppointments ? (
        <Appointments appointments={filteredAppointments} />
      ) : (
        <NoAppointments />
      )}

      <ReservationModal
        open={reserveModalOpen}
        setOpen={setReserveModalOpen}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تمت إضافة الحجز بنجاح"
      />
    </main>
  );
}
