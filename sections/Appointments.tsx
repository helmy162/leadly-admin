import Appointment from "@/components/Appointment";
import FilterMenu from "@/components/FilterMenu";

export default function Appointments() {
  return (
    <>
      <div className="flex gap-5">
        <FilterMenu name="الموظفين" options={employees} />
        <FilterMenu name="الخدمات" options={services} />
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Appointment key={index} />
        ))}
      </div>
    </>
  );
}


const employees = ["محمد", "علي", "عمر", "عبدالله"];

const services = ["قص شعر", "تجميل", "مساج", "تدليك"];
