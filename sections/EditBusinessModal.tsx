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
  data,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: Function;
  data: {
    name: string;
    website_title: string;
    short_description: string;
    description: string;
    primary_color: string;
    secondary_color: string;
    logo: string;
    gallery: string[];
    address: string;
    googleMapsLink: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    snapchat: string;
    tiktok: string;
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
            name="website_title"
            label="اسم الموقع"
            placeholder="اسم الموقع"
            disabled
            tooltip="أدخل اسم الموقع هنا"
            intialValue={data.website_title}
            style={{
              cursor: "not-allowed",
            }}
          />

          <TextInput
            name="description"
            label="وصف المنشأة"
            placeholder="وصف المنشأة"
            multiline
            tooltip="أدخل وصف المنشأة هنا"
            intialValue={data.description}
          />

          <TextInput
            name="short_description"
            label="وصف مختصر"
            placeholder="وصف مختصر عن المنشأة"
            multiline
            tooltip="أدخل وصف مختصر عن المنشأة هنا"
            intialValue={data.short_description}
          />

          <ImageUpload
            name="شعار المنشأة"
            tooltip="أدخل شعار المنشأة هنا"
            intialValue={data.logo}
          />

          <ImagesUpload
            name="معرض الصور"
            tooltip="أدخل صور المنشأة هنا"
            intialValue={data.gallery}
          />

          <div className="flex w-full items-center gap-4 [&>*]:w-full">
            <TextInput
              type="color"
              name="primary_color"
              label="لون الهوية الأساسي"
              placeholder="#353433"
              tooltip="اختر لون الهوية الأساسي"
              required
              isEnglish
              intialValue={data.primary_color}
            />

            <TextInput
              type="color"
              name="secondary_color"
              label="لون الهوية الثانوي"
              placeholder="#353433"
              tooltip="اختر لون الهوية الثانوي"
              required
              isEnglish
              intialValue={data.secondary_color}
            />
          </div>

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
            required
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
            label="رابط الواتس اب"
            placeholder="رابط الواتس اب"
            tooltip="أدخل رابط الواتس اب هنا"
            type="url"
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

          <TextInput
            name="tiktok"
            label="رابط تيك توك"
            placeholder="رابط تيك توك"
            tooltip="أدخل رابط تيك توك هنا"
            type="url"
            intialValue={data.tiktok}
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
