import { Option } from "@/lib/types";
import { useState } from "react";
import Select from "react-select";
import InfoIcon from "./icons/InfoIcon";

const MultiSelectInput = ({
  options,
  name,
  label,
  startingValue,
  value,
  setValue,
}: {
  options: { name: string }[];
  name: string;
  label: string;
  startingValue?: string;
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
      />
    </div>
  );
};

export default MultiSelectInput;
