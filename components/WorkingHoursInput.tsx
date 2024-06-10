"use client";
import { useEffect, useState } from "react";

const WorkingHoursInput = ({
  name,
  label,
  required = false,
  intialValue,
  onChange,
}: {
  name: string;
  label: string;
  required?: boolean;
  intialValue?: {
    from: string;
    to: string;
  } | null;
  onChange?: Function;
}) => {
  const [from, setFrom] = useState(intialValue?.from || "");
  const [to, setTo] = useState(intialValue?.to || "");
  const [active, setActive] = useState(intialValue ? true : false);

  useEffect(() => {
    if (onChange) {
      onChange({ from, to, active });
    }
  }, [from, to, active]);

  return (
    <div className="flex flex-col gap-0.5 text-sm font-bold text-black">
      <div className="relative flex items-center justify-between rounded-lg bg-[#F5F5F5] px-[14px] py-2.5">
        <div />
        <p className="">{label}</p>

        <div className="relative flex h-6 items-center gap-4">
          <input
            type="checkbox"
            className="switch"
            checked={active}
            onChange={() => setActive(!active)}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex w-full flex-col gap-1">
          <p>من</p>
          <div className="flex flex-col gap-3 rounded-lg border border-borderGray px-4 py-2">
            <select
              id={`${name}-from`}
              name={`${name}-from`}
              className={`bg-transparent text-sm font-semibold ${from == "" ? "text-placeholder" : "text-textGray"} !outline-none`}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required={required}
            >
              <option value="" disabled>
                الساعة
              </option>
              {hours.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex w-full flex-col gap-1">
          <p>إلى</p>
          <div className="flex flex-col gap-3 rounded-lg border border-borderGray px-4 py-2">
            <select
              id={`${name}-to`}
              name={`${name}-to`}
              className={`bg-transparent text-sm font-semibold ${to == "" ? "text-placeholder" : "text-textGray"} !outline-none`}
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required={required}
            >
              <option value="" disabled>
                الساعة
              </option>
              {hours.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursInput;

const hours = Array.from({ length: 23 }, (_, i) => {
  i += 1;
  const hour = i < 10 ? `0${i}` : i;
  return {
    name: `${hour}:00`,
    value: hour,
  };
});