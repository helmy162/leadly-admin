import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/Modal";
import MultiSelectInput from "@/components/MultiSelectInput";
import TextInput from "@/components/TextInput";
import SelectInput from "@/components/SelectInput";
import { periods } from "@/mockups/periods";
import { services } from "@/mockups/services";
import { Option } from "@/lib/types";
import DatePicker from "@/components/DatePicker";
import { useEffect, useState } from "react";
import { times } from "@/mockups/times";
import { employees } from "@/mockups/employees";

export default function ReservationModal({
  open,
  setOpen,
  appointment,
  onSuccess,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  appointment?: {
    clientName: string;
    services: string[];
    employees: string[];
    time: string;
    date: string;
    phoneNumber: string;
  };
  onSuccess: Function;
}) {
  const [reservedServices, setReservedServices] = useState<Option[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<Option[]>([]);
  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Reservation data:", data);

    if (appointment) {
      // Update the appointment
    } else {
      // Create a new appointment
    }

    setOpen(false); // close the modal
    onSuccess();
  };
  useEffect(() => {
    if (appointment) {
      // Set the initial services by filtering "all" services array
      setReservedServices(
        services
          .filter((service) => appointment.services.includes(service.name))
          .map((service) => ({
            label: service.name,
            value: service.name,
          })),
      );

      // Set the initial employee by filtering "all" employees array
      setSelectedEmployees(
        employees
          .filter((employee) => appointment.employees.includes(employee.name))
          .map((employee) => ({
            label: employee.name,
            value: employee.name,
          })),
      );
    }
  }, [appointment]);
  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 p-7"
        onSubmit={handleReservation}
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            {appointment ? "تعديل" : "حجز"} موعد
          </h2>
          <CloseIcon
            onClick={() => setOpen(false)}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <MultiSelectInput
          name="service"
          label="الخدمة"
          options={services}
          value={reservedServices}
          setValue={setReservedServices}
          tooltip="اختر الخدمات المناسبة للمستخدم"
        />
        <MultiSelectInput
          name="doctor"
          label="الدكتور"
          options={employees}
          value={selectedEmployees}
          setValue={setSelectedEmployees}
          tooltip="اختر الدكاترة المختصين بالخدمة"
        />
        <TextInput
          name="name"
          label="الاسم"
          placeholder="الاسم هنا..."
          intialValue={appointment?.clientName}
          tooltip="أدخل اسم المستخدم هنا"
        />
        <TextInput
          name="phone"
          label="رقم الجوال"
          placeholder="05xxxxxxxx"
          type="tel"
          intialValue={appointment?.phoneNumber}
          tooltip="أدخل رقم جوال المستخدم هنا"
        />
        <DatePicker intialValue={appointment?.date} />
        <SelectInput
          name="time"
          label="الوقت"
          options={times.map((time) => ({ name: time }))}
          placeholder={appointment?.time}
          tooltip="اختر الفترة المناسبة للمستخدم"
        />
        <button
          className="rounded-lg border-2 bg-primary px-6 py-3 font-bold text-white"
          type="submit"
        >
          {appointment ? "تعديل الحجز" : "حجز"}
        </button>
      </form>
    </Modal>
  );
}
