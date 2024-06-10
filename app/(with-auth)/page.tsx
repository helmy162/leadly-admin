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
// import { services } from "@/mockups/services";
import { statuses } from "@/mockups/statuses";
import CalendarModal, { RangeDate } from "@/sections/CalendarModal";
import CloseIcon from "@/components/icons/CloseIcon";
import ChevronDown from "@/components/icons/ChevronDown";

export default function Home() {
  // const [day, setDay] = useState<string | null>(null);
  const [range, setRange] = useState<RangeDate>([null, null]);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [calendarModal, setCalendarModal] = useState(false);

  const [employeesFilter, setEmployeesFilter] = useState<string>("");
  // const [servicesFilter, setServicesFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);

  useEffect(() => {
    const date = new Date();
    setRange([date, date]);
  }, []);

  useEffect(() => {
    let filtered = appointments;

    if (range[0] && range[1]) {
      filtered = filtered.filter((appointment) => {
        // check if it's on the same day of the start date or the end date. Or it's between them
        const appointmentDate = new Date(appointment.date);
        const startDate = range[0]
        const endDate = range[1]

        return (
          appointmentDate.toDateString() == startDate?.toDateString() ||
          appointmentDate.toDateString() == endDate?.toDateString() ||
          (appointmentDate > startDate! && appointmentDate < endDate!)
        );
        
      });
    }

    if (employeesFilter) {
      filtered = filtered.filter((appointment) =>
        appointment.employees?.includes(employeesFilter),
      );
    }

    // if (servicesFilter) {
    //   filtered = filtered.filter((appointment) =>
    //     appointment.services?.includes(servicesFilter),
    //   );
    // }

    if (statusFilter) {
      const statusValue = statuses.find((s) => s.name == statusFilter)?.value;
      console.log(statusValue);
      filtered = filtered.filter(
        (appointment) => appointment.status == statusValue,
      );
    }

    filtered.sort((a, b) => {
      const aDate = (new Date(a.date)).getTime();
      const bDate = new Date(b.date).getTime();
      return aDate - bDate;
    });

    setFilteredAppointments(filtered);
  }, [employeesFilter, statusFilter, range]);

  // get today's date
  const fullTodayDate = new Date();
  const todayDay = fullTodayDate.toLocaleDateString("en-US", {
    day: "numeric",
  });
  const todayMonth = fullTodayDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const todayYear = fullTodayDate.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const today = `${todayDay} ${todayMonth}, ${todayYear}`;

  const hasAppointments = filteredAppointments.length > 0;

  // DD Month, YYYY formating
  const startDay = range[0]
    ? `${range[0].getDate()} ${range[0].toLocaleDateString("en-US", {
        month: "long",
      })}, ${range[0].getFullYear()}`
    : null;
  const endDay = range[1]
    ? `${range[1].getDate()} ${range[1].toLocaleDateString("en-US", {
        month: "long",
      })}, ${range[1].getFullYear()}`
    : null;

  const isToday = startDay
    ? startDay == today && (endDay == today || !endDay)
    : true;

  return (
    <main className="flex h-full w-full flex-grow flex-col gap-4 pb-10 text-primary">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-black">أهلًا سلطان</h2>
          <h2 className="text-xs text-textGray">لديك اليوم ٥ حجوزات</h2>
          <div className="flex items-center gap-2">
            <button
              className={`${english_font.className} text-right font-bold text-black`}
              onClick={() => setCalendarModal(true)}
            >
              {isToday ? (
                <bdi>
                  {today} <span className={arabic_font.className}>اليوم</span>
                </bdi>
              ) : (
                <>
                  <h2 className={arabic_font.className}>الفترة</h2>
                  <bdi>
                    {startDay} - {endDay}
                    <span className={arabic_font.className}></span>
                  </bdi>
                </>
              )}
            </button>
            {isToday ? (
              <button onClick={() => setCalendarModal(true)}>
                <ChevronDown className="relative bottom-[4px] text-black" />
              </button>
            ) : (
              <button
                className="self-end"
                onClick={() => setRange([fullTodayDate, fullTodayDate])}
              >
                <CloseIcon className="text-[#D00000]" />
              </button>
            )}
          </div>
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

      {/* <DaysFilter day={startDay} setDay={setStartDay} /> */}

      <div className="flex gap-5">
        <FilterMenu
          name="الموظفين"
          options={employees.map((e) => e.name)}
          onChange={setEmployeesFilter}
        />
        {/* <FilterMenu
          name="الخدمات"
          options={services.map((s) => s.name)}
          onChange={setServicesFilter}
        /> */}
        <FilterMenu
          name="حالات الحجز"
          options={statuses.map((s) => s.name)}
          onChange={setStatusFilter}
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

      <CalendarModal
        open={calendarModal}
        setOpen={setCalendarModal}
        range={range}
        setRange={setRange}
      />
    </main>
  );
}
