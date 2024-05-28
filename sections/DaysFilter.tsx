"use client"
import DayButton from "@/components/DayButton";

export default function DaysFilter({
  day,
  setDay,
}: {
  day: number | null;
  setDay: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  // get the next 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);

    // day of the week in Arabic
    const day = date.toLocaleDateString("ar-EG", { weekday: "short" });
    const dayNumber = date.getDate();
    return {
      day: day,
      number: dayNumber,
    };
  });
  return (
    <div className="fancy-scroll mb-2.5 flex w-full min-w-full items-end gap-2.5 overflow-x-auto pb-2 pl-0">
      {days.map((button) => (
        <DayButton key={button.day} button={button} day={day} setDay={setDay} />
      ))}
    </div>
  );
}
