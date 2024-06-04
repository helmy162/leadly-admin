import React from "react";

export default function AccountIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 11C14.4591 11 16.25 9.20914 16.25 7C16.25 4.79086 14.4591 3 12.25 3C10.0409 3 8.25 4.79086 8.25 7C8.25 9.20914 10.0409 11 12.25 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 21V19C6.25 17.9391 6.67143 16.9217 7.42157 16.1716C8.17172 15.4214 9.18913 15 10.25 15H14.25C15.3109 15 16.3283 15.4214 17.0784 16.1716C17.8286 16.9217 18.25 17.9391 18.25 19V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
