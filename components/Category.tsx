"use client";
import { Draggable } from "@hello-pangea/dnd";
import DotsIcon from "./icons/DotsIcon";
import { useState } from "react";

export default function Category({ id, order }: { id: string; order: number }) {
  const [active, setActive] = useState(true);
  return (
    <Draggable draggableId={id} index={order}>
      {(provided) => (
        <div
          className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex items-center justify-between px-4">
            <h4 className="text-xs font-semibold text-black">
              العناية بالأظافر {id}
            </h4>
            <div className="relative flex h-6 items-center gap-4">
              <input
                type="checkbox"
                className="switch"
                checked={active}
                onChange={() => setActive(!active)}
              />
              <button className="text-textGray">
                <DotsIcon />
              </button>
            </div>
          </div>
          <hr className="border-[#F1F5F9]" />
          <div className="flex flex-col gap-2 px-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium text-textGray">
                عدد الخدمات المرتبطة{" "}
              </h4>
              <h5 className="text-xs font-semibold text-black">3 </h5>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
