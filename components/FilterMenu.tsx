import { useState } from "react";

const FilterMenu = ({
  options,
  name,
  onChange,
}: {
  options: string[];
  name: string;
  onChange: (value: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleFilter = (newValue: string) => {
    setValue(newValue);
    if (newValue == "") {
      onChange("");
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="flex w-full flex-col rounded-xl border border-borderGray px-4 py-3">
      <select
        id={name}
        name={name}
        className="cursor-pointer bg-transparent text-sm font-medium text-textGray !outline-none"
        value={value}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="">جميع {name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterMenu;
