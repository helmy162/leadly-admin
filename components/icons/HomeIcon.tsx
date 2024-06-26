import React from "react";

export default function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 17H15M10.5858 3.54999L4.87868 8.90834C4.31607 9.43656 4 10.153 4 10.9V18.1833C4 19.7389 5.34315 21 7 21H17C18.6569 21 20 19.7389 20 18.1833V10.9C20 10.153 19.6839 9.43656 19.1213 8.90834L13.4142 3.54999C12.6332 2.81667 11.3668 2.81667 10.5858 3.54999Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
