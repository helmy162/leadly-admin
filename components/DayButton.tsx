export default function DayButton({
  button,
  day,
  setDay,
}: {
  button: {
    day: string;
    number: number;
    value: string;
  };
  day: string | null;
  setDay: (value: string) => void;
}) {
  const isActive = day == button.value;
  return (
    <button
      className={`${isActive ? "bg-primary text-white" : "bg-white text-textGray"} flex w-fit min-w-[72px] flex-col items-center justify-center rounded-md py-3`}
      onClick={() => setDay(button.value)}
    >
      <h3> {button.day} </h3>
      <h3 className="text-xl font-bold"> {button.number} </h3>
    </button>
  );
}
