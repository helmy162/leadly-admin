import CloseIcon from "@/components/icons/CloseIcon";
import InfoSqaureIcon from "@/components/icons/InfoSqaureIcon";
import Modal from "@/components/Modal";

export default function ConfirmationModal({
  open,
  setOpen,
  title,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) {
  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <div className="relative z-[100] flex flex-col gap-4 py-6">
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">تم!</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-bgGray p-2 text-textGray"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <hr className="border-[#F1F5F9]" />
        <div className="mt-10 flex flex-col items-center gap-6 px-4">
          <div className="flex w-fit items-center justify-center rounded-full bg-[#34C759] p-4 text-white">
            <Tick />
          </div>
          <div className="w-full px-2 text-center text-black">
            <h3 className="text-2xl font-medium">{title}</h3>
          </div>

          <div className="mt-8 flex w-full [&>*]:flex-grow">
            <button
              className="h-14 rounded-xl border border-borderGray bg-transparent p-2 font-bold text-black"
              onClick={() => setOpen(false)}
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function Tick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 12L10 17L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
