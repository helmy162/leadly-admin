import { english_font } from "@/fonts";
import DotsIcon from "./icons/DotsIcon";

export default function Service() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5">
      <div className="flex items-center justify-between px-4">
        <h4 className="text-xs font-semibold text-black">
          منكير كلاسيك + لون عادي
        </h4>
        <div className="flex items-center gap-4 relative h-6">
          <input
            type="checkbox"
            className="switch"
          />
          <button className="text-textGray">
            <DotsIcon />
          </button>
        </div>
      </div>
      <hr className="border-[#F1F5F9]" />
      <div className="flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">التصنيف </h4>
          <h5 className="text-xs font-semibold text-black">عناية الأظافر </h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">تفعيل الخصم </h4>
          <h5 className="text-xs font-semibold text-black">غير مفعل </h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">السعر </h4>
          <h5
            className={`${english_font.className} text-left text-xs font-semibold text-black`}
          >
            <bdi>173 sr</bdi>
          </h5>
        </div>
      </div>
    </div>
  );
}
