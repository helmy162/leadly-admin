import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/Modal";
import MultiSelectInput from "@/components/MultiSelectInput";
import TextInput from "@/components/TextInput";
import SelectInput from "@/components/SelectInput";
import { Option } from "@/lib/types";
import { useState } from "react";
import { ALL_CATEGORIES } from "@/mockups/categories";
import ImagesUpload from "@/components/ImagesUpload";
import ClockIcon from "@/components/icons/ClockIcon";
import AccountIcon from "@/components/icons/AccountIcon";

export default function AddCategoryModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [categories, setCategories] = useState<Option[]>([]);
  const [hasDefinedPractitioner, setHasDefinedPractitioner] = useState(true);
  const [practitioners, setPractitioners] = useState<Option[]>([]);
  const [step, setStep] = useState(1);

  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Service data:", data); // handle the data here

    setOpen(false); // close the modal
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleAddCategory}
      >
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">إضافة تصنيف</h2>
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
          <TextInput
            name="name"
            label="اسم التصنيف"
            placeholder="اسم التصنيف"
            required
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          <button
            type="submit"
            className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
          >
            إضافة
          </button>
        </div>
      </form>
    </Modal>
  );
}
