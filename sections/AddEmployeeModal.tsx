import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import WorkingHoursInput from "@/components/WorkingHoursInput";

export default function AddEmployeeModal({
  open,
  setOpen,
  onSuccess,
  employee,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: Function;
  employee?: {
    id: string;
    name: string;
    days: any;
  
  };
}) {

  const handleAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Employee data:", data); // handle the data here

    setOpen(false); // close the modal
    onSuccess();
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleAddEmployee}
      >
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">
            {employee ? "تعديل" : "إضافة"} موظف
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-bgGray p-2 text-textGray"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <hr className="border-[#F1F5F9]" />
        <div className="px-4 flex flex-col gap-6">
          <TextInput
            name="name"
            label="اسم الموظف"
            placeholder="اسم الموظف"
            required
            tooltip="أدخل اسم الموظف هنا"
            intialValue={employee?.name}
          />
          {
            days.map((day) => (
              <WorkingHoursInput
                key={day.value}
                name={day.value}
                label={day.name}
                intialValue={employee?.days && day.value in employee?.days! ? employee?.days[day.value as keyof typeof employee.days] : null}
              />
            ))
          }
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          <button
            type="submit"
            className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
          >
            {employee ? "تعديل" : "إضافة"}
          </button>
        </div>
      </form>
    </Modal>
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


