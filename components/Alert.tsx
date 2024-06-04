import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";

export default function Alert({
  message,
  type,
}: {
  message: string;
  type: "success" | "error" | "warning" | "info";
}) {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`flex gap-2.5 justify-between items-center rounded-lg py-2 px-4 text-xs  `}
      style={{
        display: show ? "flex" : "none",
        backgroundColor: bgColors[type],
        color: textColors[type],
      }}
    >
      {message}

      <CloseIcon onClick={() => setShow(false)} className="size-4 cursor-pointer" />
    </div>
  );
}

const textColors = {
  success: "#05BE65",
  error: "#BE0505",
  warning: "#C47B01",
  info: "#1E90FF",
};

const bgColors = {
  success: "#05BE65",
  error: "#BE0505",
  warning: "#FFFBEB",
  info: "#1E90FF",
};
