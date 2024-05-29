"use client";
import { useEffect, useRef, useState } from "react";
import DotsIcon from "./icons/DotsIcon";

export default function DotsMenu({
  onDelete,
  onEdit,
}: {
  onDelete: () => void;
  onEdit: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (!isOpen) return;
      else if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <DotsIcon className="text-textGray" />
      </button>
      <div
        className={`${isOpen ? "!block" : ""} absolute left-8 top-0 hidden rounded-xl bg-white px-2 py-2 shadow-2xl`}
      >
        <div className="flex w-28 flex-col gap-[1px] rounded-lg bg-[#F5F5F5]">
          <button
            className="w-full rounded-t-lg bg-white p-2 text-right text-xs text-textGray hover:bg-[#F5F5F5]"
            onClick={onEdit}
          >
            تحرير
          </button>
          <button
            className="w-full rounded-b-lg bg-white p-2 text-right text-xs text-[#E50A0A] hover:bg-[#E50A0A]/70 hover:text-white"
            onClick={onDelete}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}
