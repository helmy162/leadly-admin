import InfoIcon from "./icons/InfoIcon";

export default function TooltipInfo({ title }: { title: string }) {
  return (
    <div className="group relative">
      <InfoIcon className="text-textGray" />
      <p className="absolute -top-3 left-6 z-50 hidden text-nowrap rounded-lg bg-[#EFEFEF]  px-2.5 py-2 text-right text-xs leading-5 group-hover:block">
        {title}
      </p>
      <Tip className="absolute left-4 top-0 z-40 hidden  text-[#EFEFEF] group-hover:block" />
    </div>
  );
}

function Tip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.76843 4.70325L8.64697 0L8.64697 14L1.86049 9.71664C0.0357462 8.56494 -0.0128005 5.92118 1.76843 4.70325Z"
        fill="currentColor"
      />
    </svg>
  );
}
