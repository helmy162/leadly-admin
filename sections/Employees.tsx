import Employee from "@/components/Employee";

export default function Employees() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <Employee key={index} />
      ))}
    </div>
  );
}
