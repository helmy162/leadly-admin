import DotsMenu from "./DotsMenu";
import DotsIcon from "./icons/DotsIcon";

export default function Employee({
  data,
  onEdit,
  onDelete,
}: {
  data: {
    name: string;
    days: any;
  };
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5">
      <div className="flex items-center justify-between px-4">
        <h4 className="text-xs font-semibold text-black">{data.name}</h4>
        <div className="relative flex h-6 items-center gap-4">
          <DotsMenu onDelete={onDelete} onEdit={onEdit} />
        </div>
      </div>
      <hr className="border-[#F1F5F9]" />
      <div className="flex flex-col gap-2 px-4">
        {Object.keys(data.days).map((day, index) => (
          <div key={index} className="flex items-center justify-between">
            <h4 className="text-xs font-medium text-textGray">
              {days[day as keyof typeof days]}
            </h4>
            <h5 className="text-xs font-semibold text-black">
              {data.days[day]
                ? `${data.days[day].to} - ${data.days[day].from}`
                : "-"}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

const days = {
  Saturday: "السبت",
  Sunday: "الأحد",
  Monday: "الإثنين",
  Tuesday: "الثلاثاء",
  Wednesday: "الأربعاء",
  Thursday: "الخميس",
  Friday: "الجمعة",
};
