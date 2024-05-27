export default function DayButton({
  button,
  day,
  setDay,
}: {
  button: {
    day: string;
    number: number;
  };
  day: number;
  setDay: (value: number) => void;
}) {
  const isActive = day == button.number;
  return (
    <button
      className={`${isActive ? "bg-primary text-white" : "text-textGray bg-white"} flex items-center justify-center min-w-[72px] w-fit flex-col rounded-md py-3`}
      onClick={() => setDay(button.number)}
    >
      <h3> {button.day} </h3>
      <h3 className="text-xl font-bold"> {button.number} </h3>
    </button>
  );
}
