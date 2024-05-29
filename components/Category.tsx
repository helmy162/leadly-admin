"use client";
import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import DotsMenu from "./DotsMenu";

export default function Category({
  data,
  onEdit,
  onDelete,
}: {
  data: {
    id: number;
    order: number;
    name: string;
    serviceCount: number;
  };
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [active, setActive] = useState(true);

  return (
    <Draggable draggableId={data.id.toString()} index={data.order}>
      {(provided) => (
        <div
          className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex datas-center justify-between px-4">
            <h4 className="text-xs font-semibold text-black">{data.name}</h4>
            <div className="relative flex h-6 datas-center gap-4">
              <input
                type="checkbox"
                className="switch"
                checked={active}
                onChange={() => setActive(!active)}
              />
              <button className="text-textGray">
                <DotsMenu onDelete={onDelete} onEdit={onEdit} />
              </button>
            </div>
          </div>
          <hr className="border-[#F1F5F9]" />
          <div className="flex flex-col gap-2 px-4">
            <div className="flex datas-center justify-between">
              <h4 className="text-xs font-medium text-textGray">
                عدد الخدمات المرتبطة{" "}
              </h4>
              <h5 className="text-xs font-semibold text-black">{data.serviceCount}</h5>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
