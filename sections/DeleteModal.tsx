import CloseIcon from "@/components/icons/CloseIcon";
import InfoSqaureIcon from "@/components/icons/InfoSqaureIcon";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";

export default function DeleteModal({
  open,
  setOpen,
  onDelete,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
}) {
  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <div className="relative z-[100] flex flex-col gap-4 py-6">
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">تأكيد</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-bgGray p-2 text-textGray"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <hr className="border-[#F1F5F9]" />
        <div className="flex flex-col gap-6 px-4 items-center">
          <div className="flex items-center justify-center p-4 text-primary bg-[#F3F2F8] rounded-full w-fit">
            <InfoSqaureIcon />
          </div>
          <div className="text-black w-full text-center px-2">
            <h3 className="text-2xl font-medium">هل أنت متأكد؟</h3>
            <p className="text-sm">
              لايمكن التراجع عن الحذف، بإمكانك تعطيل العنصر لإخفاءه
            </p>
          </div>

          <div className="flex flex-col gap-4 [&>*]:flex-grow w-full">
            <button
              className="h-14 rounded-xl border border-primary bg-primary p-2 font-bold text-white"
              onClick={onDelete}
            >
              تأكيد
            </button>
            <button
              className="h-14 rounded-xl border border-borderGray bg-transparent p-2 font-bold text-black"
              onClick={() => setOpen(false)}
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
