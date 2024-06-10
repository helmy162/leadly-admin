import { english_font } from "@/fonts";
import DotsMenu from "./DotsMenu";
import StatusSelect from "./StatusSelect";

export default function Appointment({
  data,
  onEdit,
  onDelete,
}: {
  data: {
    id: string;
    clientName: string;
    services: string[];
    date: string;
    time: string;
    status: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}) {
  const thisDate = new Date(data.date);
  const formattedDate = `${thisDate.getDate()} ${thisDate.toLocaleDateString(
    "en-US",
    {
      month: "long",
    },
  )}, ${thisDate.getFullYear()}`;
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5">
      <div className="flex items-center justify-between px-4">
        <h4 className="text-xs font-semibold text-black">{data.clientName}</h4>
        <div className="flex items-center gap-2">
          <StatusSelect intialValue={data.status} key={data.id} />
          <DotsMenu onDelete={onDelete} onEdit={onEdit} />
        </div>
      </div>
      <hr className="border-[#F1F5F9]" />
      <div className="flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الخدمة </h4>
          <h5 className="text-xs font-semibold text-black">
            {data.services.join(", ")}
          </h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">اليوم </h4>
          <h5
            className={`${english_font.className} text-xs font-semibold text-black`}
          >
            <bdi>{formattedDate}</bdi>
          </h5>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-medium text-textGray">الساعة </h4>
          <h5
            className={`${english_font.className} text-xs font-semibold text-black`}
          >
            {data.time}
          </h5>
        </div>
      </div>
    </div>
  );
}
