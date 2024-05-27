import React from "react";

export default function MapIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.9092 10.4479C19.9092 16.4934 11.9092 21.6752 11.9092 21.6752C11.9092 21.6752 3.90918 16.4934 3.90918 10.4479C3.90918 8.38644 4.75203 6.40942 6.25233 4.95175C7.75262 3.49408 9.78745 2.67517 11.9092 2.67517C14.0309 2.67517 16.0657 3.49408 17.566 4.95175C19.0663 6.40942 19.9092 8.38644 19.9092 10.4479Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.6752C13.3807 12.6752 14.5 11.5559 14.5 10.1752C14.5 8.79446 13.3807 7.67517 12 7.67517C10.6193 7.67517 9.5 8.79446 9.5 10.1752C9.5 11.5559 10.6193 12.6752 12 12.6752Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
