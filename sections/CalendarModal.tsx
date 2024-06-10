import Modal from "@/components/Modal";
import { arabic_font, poppins_font } from "@/fonts";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type SingleDate = Date | null;
export type RangeDate = [SingleDate, SingleDate];

export default function CalendarModal({
  open,
  setOpen,
  range,
  setRange,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  range: RangeDate;
  setRange: React.Dispatch<React.SetStateAction<RangeDate>>;
}) {
  const [value, onChange] = useState<RangeDate | SingleDate>(range);

  useEffect(() => {
    onChange(range);
  }, [range]);

  const handleChangeDate = () => {
    setRange(value as RangeDate);
    setOpen(false);
  };

  return (
    <Modal showModal={open} setShowModal={setOpen}>
      <div className="relative z-[100] flex flex-col gap-4 py-6">
        <div
          className={`${poppins_font.className} flex flex-col items-center gap-6 px-4`}
          dir="ltr"
        >
          <Calendar
            onChange={onChange}
            value={value}
            selectRange
            formatShortWeekday={(locale, date) =>
              date.toLocaleDateString("en-US", { weekday: "short" })[0]
            }
            prevLabel={<Chevron />}
            nextLabel={<Chevron className="rotate-180" />}
          />
          <button
            className={`${arabic_font.className} w-full h-14 rounded-xl border border-primary bg-primary p-2 font-bold text-white`}
            onClick={handleChangeDate}
          >
            إظهار التاريخ المحدد
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Chevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2001_164)">
        <path
          d="M15 6L9 12L15 18"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_164">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
