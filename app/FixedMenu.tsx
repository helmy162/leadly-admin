import FixedMenuItem from "@/components/FixedMenuItem";
import AccountIcon from "@/components/icons/AccountIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";

export default function FixedMenu() {
  return (
    <div className="fixed inset-x-0 bottom-6 mx-auto w-full max-w-[430px] px-4">
      <div className=" mx-auto flex min-h-14 w-full items-center justify-between rounded-xl bg-primary px-7 py-2 text-white">
        {menu.map((item, index) => (
          <FixedMenuItem key={index} {...item} />
        ))}
      </div>
      <div className="fixed inset-x-0 bottom-0 -z-10 mx-auto h-[72px] w-full  max-w-[430px] bg-white/30 backdrop-blur-sm" />
    </div>
  );
}

export function BlurryBackground() {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto h-6 w-full max-w-[430px]"></div>
  );
}

const menu = [
  {
    name: "الإعدادات",
    href: "/profile",
    icon: <HomeIcon />,
  },
  {
    name: "الفريق",
    href: "/employees",
    icon: <AccountIcon />,
  },
  {
    name: "الحجوزات",
    href: "/",
    icon: <CalendarIcon />,
  },
  {
    name: "الخدمات",
    href: "/services",
    icon: <ServiceIcon />,
  },
  {
    name: "التصنيفات",
    href: "/categories",
    icon: <DashboardIcon />,
  },
];
