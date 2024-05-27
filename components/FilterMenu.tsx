import { useState } from "react";

const FilterMenu = ({
  options,
  name,
}: {
  options: string[];
  name: string;
}) => {
  const [value, setValue] = useState("");

  const handleFilter = (newValue: string) => {
    setValue(newValue)
    if(newValue == "") {
      // reset filters
    } else {
      // filter by newValue
    }

  }

  return (
    <div className="border-borderGray flex flex-col rounded-xl border px-4 py-3 w-full">
      <select
        id={name}
        name={name}
        className="text-sm font-medium text-textGray !outline-none bg-transparent cursor-pointer"
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
