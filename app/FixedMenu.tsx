import MenuItem from "@/components/MenuItem";
import AccountIcon from "@/components/icons/AccountIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";

export default function FixedMenu() {
  return (
    <div className="fixed inset-x-0 bottom-6 mx-auto w-full max-w-[430px] px-4">
      <div className=" mx-auto flex min-h-12 w-full items-center justify-between rounded-xl bg-primary px-7 py-2 text-white">
        {menu.map((item, index) => (
          <MenuItem key={index} {...item} />
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
    name: "Employees",
    href: "/employees",
    icon: <AccountIcon />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
  {
    name: "Home",
    href: "/",
    icon: <CalendarIcon />,
  },
  {
    name: "Services",
    href: "/services",
    icon: <ServiceIcon />,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: <DashboardIcon />,
  },
];
