import { useState } from "react";
import TooltipInfo from "./TooltipInfo";
import { arabic_font, english_font } from "@/fonts";

const TextInput = ({
  name,
  label,
  placeholder,
  multiline,
  required = false,
  intialValue,
  tooltip,
  isEnglish = false,
  ...rest
}: {
  name: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  required?: boolean;
  intialValue?: string;
  tooltip?: string;
  isEnglish?: boolean;
  [key: string]: any;
}) => {
  const [value, setValue] = useState(intialValue || "");

  const inputField = multiline ? (
    <textarea
      id={name}
      name={name}
      className={`${isEnglish ? english_font.className : arabic_font.className} w-full rounded-lg border border-borderGray px-4 py-3 text-right text-sm font-semibold text-textGray placeholder:text-placeholder focus-within:border-primary focus-within:!outline-none focus:border-primary focus:!outline-none`}
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
      className={`${isEnglish ? english_font.className : arabic_font.className} w-full rounded-lg border border-borderGray px-4 py-3 text-right text-sm font-semibold text-textGray placeholder:text-placeholder focus-within:border-primary focus-within:!outline-none focus:border-primary focus:!outline-none`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  );

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-xs font-semibold text-black">
          {label}
          {required && <span className="text-[#AE0000]"> *</span>}
        </label>
        {tooltip && <TooltipInfo title={tooltip} />}
      </div>
      {isEnglish ? <bdi>{inputField}</bdi> : inputField}
    </div>
  );
};

export default TextInput;
