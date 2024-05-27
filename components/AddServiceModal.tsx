import CloseIcon from "./icons/CloseIcon";
import Modal from "./Modal";
import MultiSelectInput from "./MultiSelectInput";
import TextInput from "./TextInput";
import DatePicker from "./DatePicker";
import SelectInput from "./SelectInput";
import { periods } from "@/mockups/periods";
import { services } from "@/mockups/services";
import { Option } from "@/lib/types";
import { useState } from "react";
import { ALL_CATEGORIES } from "@/mockups/categories";

export default function AddServiceModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [categories, setCategories] = useState<Option[]>([]);
  const [step, setStep] = useState(1);

  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    // // Check if reservedServices is null, and handle accordingly
    // if (!reservedServices || reservedServices.length == 0) {
    //   data = { services: [], ...data };
    // } else {
    //   data = {
    //     services: reservedServices.map((service) => service.value),
    //     ...data,
    //   };
    // }

    console.log("Reservation data:", data); // handle the data here

    setOpen(false); // close the modal
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleReservation}
      >
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">إضافة خدمة</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-bgGray p-2 text-textGray"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <hr className="border-[#F1F5F9]" />
        <div className="px-4">
          {step == 1 ? (
            <Step1 categories={categories} setCategories={setCategories} />
          ) : null}
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(2)}
              className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
            >
              التالي
            </button>
          ) : (
            <button
              type="submit"
              className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
            >
              إضافة
            </button>
          )}
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="h-14 rounded-xl bg-[#F3F3F3] p-2 font-bold text-textGray"
            >
              عودة
            </button>
          )}
        </div>
        {/* <MultiSelectInput
          name="service"
          label="الخدمة"
          options={services}
          startingValue={selectedService}
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
        </button> */}
      </form>
    </Modal>
  );
}

function Step1({
  categories,
  setCategories,
}: {
  categories: Option[];
  setCategories: React.Dispatch<React.SetStateAction<Option[]>>;
}) {
  return (
    <div className="flex flex-col gap-6">
      <TextInput
        name="name"
        label="اسم الخدمة"
        placeholder="اسم الخدمة أو العرض"
      />
      <TextInput
        multiline
        rows={4}
        name="description"
        label="وصف الخدمة"
        placeholder="خدمة مناكير يدين فقط + لون عادي وتشمل النوع الفرنسي فقط..."
      />

      <MultiSelectInput
        name="categories"
        label="تصنيف الخدمة"
        options={ALL_CATEGORIES}
        value={categories}
        setValue={setCategories}
      />

      <TextInput
        name="price"
        label="سعر الخدمة"
        placeholder="سعر الخدمة أو العرض"
      />

      <TextInput
        name="new_price"
        label="السعر بعد الخصم"
        placeholder="يترك فارغاً لإلغاء الخصم.."
      />
    </div>
  );
}
