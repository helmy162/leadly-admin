import CloseIcon from "@/components/icons/CloseIcon";
import ImageUpload from "@/components/ImageUpload";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";

export default function AddTestimonialModal({
  open,
  setOpen,
  onSuccess,
  testimonial,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: Function;
  testimonial?: {
    name: string;
    rating: number;
    testimonial: string;
    image: string;
  };
}) {
  const handleAddTestimonial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Testimonial data:", data); // handle the data here

    setOpen(false); // close the modal
    onSuccess();
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleAddTestimonial}
      >
        <div className="flex w-full items-center justify-between px-4">
          <h2 className="font-bold text-black">
            {testimonial ? "تعديل" : "إضافة"} تقييم
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
        <div className="flex flex-col gap-4 px-4">
          <TextInput
            name="username"
            label="اسم الشخص"
            placeholder="اسم الشخص"
            tooltip="أدخل اسم الشخص هنا"
            required
            intialValue={testimonial?.name}
          />

          <ImageUpload
            name="صورة الشخص"
            tooltip="أرفق صورة الشخص هنا"
            intialValue={testimonial?.image}
          />

          <TextInput
            name="rating"
            label="التقييم"
            placeholder="التقييم"
            tooltip="أدخل تقييم الشخص من ١ إلى ٥"
            required
            type="number"
            min={1}
            max={5}
            intialValue={testimonial?.rating}
          />

          <TextInput
            name="testimonial"
            label="الشهادة"
            placeholder="الشهادة"
            tooltip="أدخل الشهادة هنا"
            required
            multiline
            intialValue={testimonial?.testimonial}
          />
          
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          <button
            type="submit"
            className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
          >
            {testimonial ? "تعديل" : "إضافة"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
