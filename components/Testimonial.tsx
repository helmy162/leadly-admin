import DotsMenu from "./DotsMenu";

export default function Testimonial({
  data,
  onEdit,
  onDelete,
}: {
  data: {
    name: string;
    rating: number;
    image: string;
    testimonial: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5">
      <div className="flex items-center justify-between px-4">
        <h4 className="text-xs font-semibold text-black">{data.name}</h4>
        <DotsMenu onDelete={onDelete} onEdit={onEdit} />
      </div>
      <hr className="border-[#F1F5F9]" />
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-start gap-4 ">
          <h4 className="text-xs font-medium text-textGray">التقييم </h4>
          <h5 className="text-xs font-semibold text-black">{data.rating}</h5>
        </div>
        <div className="flex items-start  gap-4">
          <h4 className="text-xs font-medium text-textGray">الشهادة </h4>
          <h5 className="text-xs font-semibold text-black">
            {data.testimonial}
          </h5>
        </div>
      </div>
    </div>
  );
}
