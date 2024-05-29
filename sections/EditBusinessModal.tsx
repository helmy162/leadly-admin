import CloseIcon from "@/components/icons/CloseIcon";
import ImagesUpload from "@/components/ImagesUpload";
import ImageUpload from "@/components/ImageUpload";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import WorkingHoursInput from "@/components/WorkingHoursInput";

export default function EditBusinessModal({
  open,
  setOpen,
  onSuccess,
  data
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: Function;
  data: {
    name: string;
    description: string;
    brandColor: string;
    logo: string;
    gallery: string[];
    address: string;
    googleMapsLink: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    snapchat: string;
  };
}) {
  const handleEditBusiness = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let data: any = Object.fromEntries(formData.entries());

    console.log("Businesss data:", data); // handle the data here

    setOpen(false); // close the modal
    onSuccess();
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 py-6"
        onSubmit={handleEditBusiness}
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
        <div className="flex flex-col gap-6 px-4">
          <TextInput
            name="name"
            label="اسم المنشأة"
            placeholder="عيادات/صالون...."
            required
            tooltip="أدخل اسم المنشأة هنا"
            intialValue={data.name}
          />
          <TextInput
            name="description"
            label="وصف مختصر"
            placeholder="وصف مختصر عن المنشأة"
            multiline
            tooltip="أدخل وصف المنشأة هنا"
            intialValue={data.description}
          />

          <ImageUpload name="شعار المنشأة" tooltip="أدخل شعار المنشأة هنا" intialValue={data.logo} />

          <ImagesUpload name="معرض الصور" tooltip="أدخل صور المنشأة هنا" intialValue={data.gallery} />

          <TextInput
            name="brandColor"
            label="لون الهوية"
            placeholder="#353433"
            tooltip="اختر لون الهوية"
            required
            isEnglish
            intialValue={data.brandColor}
          />

          <TextInput
            name="address"
            label="وصف العنوان"
            placeholder="الحي، الشارع"
            required
            tooltip="أدخل العنوان هنا"
            intialValue={data.address}
          />

          <TextInput
            name="googleMapsLink"
            label="رابط خرائط جوجل"
            placeholder="رابط خرائط جوجل"
            tooltip="أدخل رابط خرائط جوجل هنا"
            type="url"
            intialValue={data.googleMapsLink}
            isEnglish
          />

          <TextInput
            name="phone"
            label="رقم التواصل"
            placeholder="رقم التواصل"
            tooltip="أدخل رقم التواصل هنا"
            type="tel"
            intialValue={data.phone}
            isEnglish
          />

          <TextInput
            name="whatsapp"
            label="رقم الواتس اب"
            placeholder="رقم الواتس اب"
            tooltip="أدخل رقم الواتس اب هنا"
            type="tel"
            intialValue={data.whatsapp}
            isEnglish
          />

          <TextInput
            name="instagram"
            label="رابط الانستقرام"
            placeholder="رابط الانستقرام"
            tooltip="أدخل رابط الانستقرام هنا"
            type="url"
            intialValue={data.instagram}
            isEnglish
          />

          <TextInput
            name="snapchat"
            label="رابط سناب شات"
            placeholder="رابط سناب شات"
            tooltip="أدخل رابط سناب شات هنا"
            type="url"
            intialValue={data.snapchat}
            isEnglish
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-4 [&>*]:flex-grow">
          <button
            type="submit"
            className="h-14 rounded-xl bg-primary p-2 font-bold text-white"
          >
            تحديث
          </button>
        </div>
      </form>
    </Modal>
  );
}