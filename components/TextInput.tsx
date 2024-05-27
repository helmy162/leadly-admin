import { useState } from "react";
import AccountIcon from "./icons/AccountIcon";
import InfoIcon from "./icons/InfoIcon";

const TextInput = ({
  name,
  label,
  placeholder,
  multiline,
  ...rest
}: {
  name: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  [key: string]: any;
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-xs font-semibold text-black">
          {label}
        </label>
        <InfoIcon className="text-textGray" />
      </div>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          className="w-full rounded-lg border border-borderGray p-4 text-right text-sm font-semibold text-textGray placeholder:text-placeholder focus-within:border-primary focus-within:!outline-none focus:border-primary focus:!outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          {...rest}
        />
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          className="w-full rounded-lg border border-borderGray p-4 text-right text-sm font-semibold text-textGray placeholder:text-placeholder focus-within:border-primary focus-within:!outline-none focus:border-primary focus:!outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
};

export default TextInput;
