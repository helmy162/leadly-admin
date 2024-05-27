import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/Modal";
import MultiSelectInput from "@/components/MultiSelectInput";
import TextInput from "@/components/TextInput";
import SelectInput from "@/components/SelectInput";
import { periods } from "@/mockups/periods";
import { services } from "@/mockups/services";
import { Option } from "@/lib/types";
import DatePicker from "@/components/DatePicker";
import { useState } from "react";

export default function ReservationModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [reservedServices, setReservedServices] = useState<Option[]>([]);
  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Reservation data:", data); // handle the data here

    setOpen(false); // close the modal
  };
  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 p-7"
        onSubmit={handleReservation}
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold text-black">حجز موعد</h2>
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
        />
        <TextInput name="name" label="الاسم" placeholder="الاسم هنا..." />
        <TextInput
          name="phone"
          label="رقم الجوال"
          placeholder="05xxxxxxxx"
          type="tel"
        />
        <DatePicker />
        <SelectInput name="period" label="الفترة" options={periods} />
        <h3 className="text-lightGray text-sm font-normal">
          يمكنك الآن حجز موعدك من خلال الضغط على الزر أدناه
        </h3>
        <button
          className="rounded-lg border-2 bg-primary px-6 py-3 font-bold text-white"
          type="submit"
        >
          حجز
        </button>
      </form>
    </Modal>
  );
}
