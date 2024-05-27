import { redirect } from "next/navigation";
import FixedMenu from "../FixedMenu";

const bodyPadding = 24;
const headerHeight = 66;
const headerMarginBottom = 14;
const takenSpace = 2*bodyPadding + headerHeight + headerMarginBottom;


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // fetch user data
  const user = {name: "Sultan"};

  if(!user){
    redirect("/login");
  }



  return (
    <div className="bg-bgGray w-full px-4 py-6 flex flex-col"
      style={{
        minHeight: `calc(100vh - ${takenSpace}px)`,
      }}
    >
      {children}
      <FixedMenu />
    </div>
  );
}
