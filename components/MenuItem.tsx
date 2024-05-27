"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({
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
    <Link href={href} className="relative">
      {icon}
      {isActive && (
        <div className="b-0 bg-darkBlue absolute h-1 w-full rounded-xl" />
      )}
    </Link>
  );
}
