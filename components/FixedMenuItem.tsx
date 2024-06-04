"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FixedMenuItem({
  name,
  href,
  icon,
}: {
  href: string;
  name: string;
  icon: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className="relative flex flex-col items-center justify-center  size-[44px]">
      {icon}
      <h2 className="text-[10px] text-white font-medium">
        {name}
      </h2>
      {isActive && (
        <div className="-bottom-1 bg-darkBlue absolute h-1 w-6 rounded-xl" />
      )}
    </Link>
  );
}
