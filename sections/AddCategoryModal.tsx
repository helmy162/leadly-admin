import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";

export default function AddCategoryModal({
  open,
  setOpen,
  onSuccess,
  category,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: Function;
  category?: {
    id: string;
    name: string;
  };
}) {

  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Category data:", data); // handle the data here

    setOpen(false); // close the modal
    onSuccess();
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleAddCategory}
      >
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">{category ? "تعديل" : "إضافة"} تصنيف</h2>
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
            tooltip="أدخل اسم التصنيف هنا"
            required
            intialValue={category?.name}
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          <button
            type="submit"
            className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
          >
            {category ? "تعديل" : "إضافة"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
