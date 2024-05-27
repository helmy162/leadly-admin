import Logo from "@/components/Logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full pb-5">
      <Logo className="mx-auto" />
    </header>
  );
}
