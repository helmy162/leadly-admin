import { useState } from "react";
import TooltipInfo from "./TooltipInfo";

const SelectInput = ({
  options,
  name,
  label,
  placeholder = "اختر...",
  required = false,
  tooltip
}: {
  options: { name: string }[];
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-xs font-semibold text-black">
          {label}
          {required && <span className="text-[#AE0000]"> *</span>}
        </label>
        {tooltip && <TooltipInfo title={tooltip} />}
      </div>
      <div className="flex flex-col gap-3 rounded-lg border border-borderGray py-2 px-4">
        <select
          id={name}
          name={name}
          className={`bg-transparent text-sm font-semibold ${value=="" ? "text-placeholder" : "text-textGray"} !outline-none`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {placeholder && (
            <option value="" disabled >
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
