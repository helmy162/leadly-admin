import Logo from "@/components/Logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full justify-between pb-5 px-4">
      <div className="w-6" />
      <Logo className="mx-auto" />
      <button className="text-sm font-bold text-[#9B9B9B] w-6">EN</button>
    </header>
  );
}
