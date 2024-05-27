import DotsIcon from "./icons/DotsIcon";

export default function Employee() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5">
      <div className="flex items-center justify-between px-4">
        <h4 className="text-xs font-semibold text-black">ماريا غونزاليس</h4>
        <div className="relative flex h-6 items-center gap-4">
          <button className="text-textGray">
            <DotsIcon />
          </button>
        </div>
      </div>
      <hr className="border-[#F1F5F9]" />
      <div className="flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">السبت</h4>
          <h5 className="text-xs font-semibold text-black">12 - 8</h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الأحد</h4>
          <h5 className="text-xs font-semibold text-black">12 - 8</h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الإثنين</h4>
          <h5 className="text-xs font-semibold text-black">-</h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الثلاثاء</h4>
          <h5 className="text-xs font-semibold text-black">12 - 8</h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الأربعاء</h4>
          <h5 className="text-xs font-semibold text-black">12 - 8</h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الخميس</h4>
          <h5 className="text-xs font-semibold text-black">12 - 8</h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الجمعة</h4>
          <h5 className="text-xs font-semibold text-black">12 - 8</h5>
        </div>
      </div>
    </div>
  );
}
