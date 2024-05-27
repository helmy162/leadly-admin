import Category from "@/components/Category";

export default function Categories() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <Category key={index} />
      ))}
    </div>
  );
}
