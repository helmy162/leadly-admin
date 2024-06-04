import { useState } from "react";
import { statuses } from "@/mockups/statuses";

const StatusSelect = ({ intialValue }: { intialValue: string }) => {
  const [value, setValue] = useState(intialValue);

  const status = statuses.find((i) => i.value == value);

  return (
    <div
      className={`flex flex-col gap-3 rounded-lg border px-3 py-1`}
      style={{
        borderColor: status?.color,
        backgroundColor: status?.color + "10",
      }}
    >
      <select
        className={`bg-transparent text-xs bg-[${status?.color}]/10 ${value == "" ? "text-placeholder" : "text-textGray"} !outline-none`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          color: status?.color,
        }}
      >
        {statuses.map((status) => (
          <option key={status.value} value={status.value}>
            {status.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
