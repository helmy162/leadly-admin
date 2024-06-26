import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/Modal";
import MultiSelectInput from "@/components/MultiSelectInput";
import TextInput from "@/components/TextInput";
import SelectInput from "@/components/SelectInput";
import { Option } from "@/lib/types";
import { useEffect, useState } from "react";
import { ALL_CATEGORIES } from "@/mockups/categories";
import ImagesUpload from "@/components/ImagesUpload";
import ClockIcon from "@/components/icons/ClockIcon";
import AccountIcon from "@/components/icons/AccountIcon";
import WorkingHoursInput from "@/components/WorkingHoursInput";
import { services } from "@/mockups/services";

export default function AddServiceModal({
  open,
  setOpen,
  onSuccess,
  service,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: Function;
  service?: (typeof services)[0];
}) {
  const [categories, setCategories] = useState<Option[]>([]);
  const [hasDefinedPractitioner, setHasDefinedPractitioner] = useState(true);
  const [practitioners, setPractitioners] = useState<Option[]>([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (service) {
      setCategories(
        service.categories.map((category) => ({
          label: category,
          value: category,
        })),
      );
      if (service.practitioners && service.practitioners.length > 0) {
        setPractitioners(
          service.practitioners.map((practitioner) => ({
            label: practitioner,
            value: practitioner,
          })),
        );
      } else {
        setHasDefinedPractitioner(false);
      }
    }
  }, [service]);

  const handleAddService = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Service data:", data); // handle the data here

    // reset the form
    setCategories([]);
    setHasDefinedPractitioner(true);
    setPractitioners([]);
    setStep(1);

    setOpen(false); // close the modal
    onSuccess();
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleAddService}
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
          <Step1
            categories={categories}
            setCategories={setCategories}
            service={service}
            show={step == 1}
          />
          <Step2 service={service} show={step == 2} />
          <Step3
            hasDefinedPractitioner={hasDefinedPractitioner}
            setHasDefinedPractitioner={setHasDefinedPractitioner}
            show={step == 3}
          />
          <Step4
            practitioners={practitioners}
            setPractitioners={setPractitioners}
            service={service}
            show={step == 4}
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          {(step < 3 || (step == 3 && hasDefinedPractitioner)) && (
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
              className="h-14 basis-2/3 rounded-xl bg-primary p-2 font-bold text-white"
            >
              التالي
            </button>
          )}

          {(step == 4 || (step == 3 && !hasDefinedPractitioner)) && (
            <button
              type="submit"
              className="h-14 basis-2/3 rounded-xl bg-primary p-2 font-bold text-white"
            >
              إضافة
            </button>
          )}

          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((prev) => prev - 1)}
              className="h-14 basis-1/3 rounded-xl bg-[#F3F3F3] p-2 font-bold text-textGray"
            >
              عودة
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}

function Step1({
  categories,
  setCategories,
  service,
  show,
}: {
  categories: Option[];
  setCategories: React.Dispatch<React.SetStateAction<Option[]>>;
  service?: (typeof services)[0];
  show: boolean;
}) {
  return (
    <div className={`${show ? "flex" : "hidden"} flex-col gap-6`}>
      <TextInput
        name="name"
        label="اسم الخدمة"
        placeholder="اسم الخدمة أو العرض"
        required
        tooltip="أدخل اسم الخدمة هنا"
        intialValue={service?.name}
      />
      <TextInput
        multiline
        rows={4}
        name="description"
        label="وصف الخدمة"
        placeholder="خدمة مناكير يدين فقط + لون عادي وتشمل النوع الفرنسي فقط..."
        tooltip="أدخل وصف الخدمة هنا"
        intialValue={service?.description}
      />

      <MultiSelectInput
        name="categories"
        label="تصنيف الخدمة"
        options={ALL_CATEGORIES}
        value={categories}
        setValue={setCategories}
        required
        tooltip="اختر تصنيفات الخدمة"
      />

      <ImagesUpload
        name="صور الخدمة"
        tooltip="أضف صور للخدمة لتظهر بشكل أفضل للمستخدمين"
        intialValue={service?.images}
      />

      <TextInput
        name="price"
        label="سعر الخدمة"
        placeholder="سعر الخدمة أو العرض"
        required
        tooltip="أدخل سعر الخدمة هنا"
        intialValue={service?.oldPrice?.toString()}
      />

      <TextInput
        name="new_price"
        label="السعر بعد الخصم"
        placeholder="يترك فارغاً لإلغاء الخصم.."
        tooltip="أدخل السعر بعد الخصم هنا"
        intialValue={service?.price?.toString()}
      />
    </div>
  );
}

function Step2({
  service,
  show,
}: {
  service?: (typeof services)[0];
  show: boolean;
}) {
  return (
    <div className={`${show ? "flex" : "hidden"} flex-col gap-4`}>
      <h2 className="text-base font-bold">أضف جدول العمل لهذه الخدمة</h2>
      <div className="flex flex-col gap-6">
        {days.map((day) => (
          <WorkingHoursInput
            key={day.value}
            name={day.value}
            label={day.name}
            intialValue={
              service?.days && day.value in service?.days!
                ? service?.days[day.value as keyof typeof service.days]
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}

function Step3({
  hasDefinedPractitioner,
  setHasDefinedPractitioner,
  show,
}: {
  hasDefinedPractitioner: boolean;
  setHasDefinedPractitioner: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}) {
  return (
    <div className={`${show ? "flex" : "hidden"} gap-3`}>
      <button
        className={`flex w-full flex-col items-center gap-2 rounded-xl border-2 ${!hasDefinedPractitioner ? "border-[#E8E8E8]" : "border-primary"} px-2 py-4`}
        type="button"
        onClick={() => setHasDefinedPractitioner(true)}
      >
        <AccountIcon
          width={32}
          height={32}
          className={!hasDefinedPractitioner ? "" : "text-primary"}
        />
        <p className="text-lg font-medium text-black">خدمة محددة الممارسين</p>
      </button>

      <button
        className={`flex w-full flex-col items-center gap-2 rounded-xl border-2 ${hasDefinedPractitioner ? "border-[#E8E8E8]" : "border-primary"} px-2 py-4`}
        type="button"
        onClick={() => setHasDefinedPractitioner(false)}
      >
        <ClockIcon
          width={24}
          height={24}
          className={hasDefinedPractitioner ? "" : "text-primary"}
        />
        <p className="text-lg font-medium text-black">
          خدمة غير محددة الممارسين
        </p>
      </button>
    </div>
  );
}

function Step4({
  practitioners,
  setPractitioners,
  service,
  show,
}: {
  practitioners: Option[];
  setPractitioners: React.Dispatch<React.SetStateAction<Option[]>>;
  service?: (typeof services)[0];
  show: boolean;
}) {
  return (
    <div className={`${show ? "flex" : "hidden"} flex-col gap-6`}>
      <MultiSelectInput
        name="practitioners"
        label="الممارسين"
        options={ALL_CATEGORIES}
        value={practitioners}
        setValue={setPractitioners}
        required
        tooltip="اختر الممارسين المناسبين للخدمة"
      />

      <SelectInput
        options={ALL_CATEGORIES}
        name="duration"
        label="مدة الجلسة"
        placeholder={service ? service.duration : "اختر..."}
        required
        tooltip="اختر مدة الجلسة هنا"
      />

      <SelectInput
        options={ALL_CATEGORIES}
        name="min_hours_before_booking"
        label="أقل مدة قبل الحجز (أيام/ساعات)"
        placeholder={
          service ? service.minimumDaysBeforeReservation.toString() : "اختر..."
        }
        required
        tooltip="اختر أقل مدة قبل الحجز هنا"
      />
      <SelectInput
        options={ALL_CATEGORIES}
        name="min_days_before_booking"
        label="أقل مدة قبل الحجز"
        placeholder={
          service ? service.minimumDaysBeforeReservation.toString() : "اختر..."
        }
        required
        tooltip="اختر أقل مدة قبل الحجز هنا"
      />
    </div>
  );
}

const days = [
  { name: "السبت", value: "Saturday" },
  { name: "الأحد", value: "Sunday" },
  { name: "الإثنين", value: "Monday" },
  { name: "الثلاثاء", value: "Tuesday" },
  { name: "الأربعاء", value: "Wednesday" },
  { name: "الخميس", value: "Thursday" },
  { name: "الجمعة", value: "Friday" },
];
