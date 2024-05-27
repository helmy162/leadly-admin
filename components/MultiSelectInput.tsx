import { Option } from "@/lib/types";
import { useState } from "react";
import Select from "react-select";
import InfoIcon from "./icons/InfoIcon";

const MultiSelectInput = ({
  options,
  name,
  label,
  required = false,
  value,
  setValue,
}: {
  options: { name: string }[];
  name: string;
  label: string;
  required?: boolean;
  value: Option[] | null;
  setValue: (value: Option[]) => void;
}) => {
  const handleChange = (
    newValue: ReadonlyArray<{ value: string; label: string }>,
  ) => {
    setValue(newValue as any);
  };

  const selectOptions = options.map((option) => ({
    value: option.name,
    label: option.name,
  }));

  return (
    <div className="flex flex-col gap-2.5" key={name}>
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-xs font-semibold text-black">
          {label}
          {required && <span className="text-[#AE0000]"> *</span>}
        </label>
        <InfoIcon className="text-textGray" />
      </div>
      <Select
        className="text-sm font-semibold text-textGray placeholder:text-placeholder"
        options={selectOptions}
        value={value}
        isMulti
        onChange={handleChange}
        placeholder={`اختر ${label}`}
        styles={{
          placeholder: (base) => ({
            ...base,
            color: "#C9C9C9",
            textAlign: "right",
          }),
          indicatorSeparator: (base, props) => ({
            ...base,
            display: "none",
          }),
        }}
      />
    </div>
  );
};

export default MultiSelectInput;
