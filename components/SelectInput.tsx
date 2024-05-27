import { useState } from "react";

const SelectInput = ({
  options,
  name,
  label,
  placeholder,
  startingValue,
}: {
  options: { name: string;}[];
  name: string;
  label: string;
  placeholder?: string;
  startingValue?: string;
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="border-borderGray flex flex-col gap-3 rounded-lg border p-4">
      <select
        id={name}
        name={name}
        className="text-lg font-semibold text-black !outline-none bg-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
