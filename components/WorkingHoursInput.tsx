"use client";
import { useState } from "react";

const WorkingHoursInput = ({
  name,
  label,
}: {
  name: string;
  label: string;
  required?: boolean;
}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [active, setActive] = useState(false);

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
              id={name}
              name={name}
              className={`bg-transparent text-sm font-semibold ${from == "" ? "text-placeholder" : "text-textGray"} !outline-none`}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
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
              id={name}
              name={name}
              className={`bg-transparent text-sm font-semibold ${to == "" ? "text-placeholder" : "text-textGray"} !outline-none`}
              value={to}
              onChange={(e) => setTo(e.target.value)}
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