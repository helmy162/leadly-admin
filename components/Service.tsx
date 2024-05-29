"use client";
import { Draggable } from "@hello-pangea/dnd";
import { english_font } from "@/fonts";
import { useState } from "react";
import DotsMenu from "./DotsMenu";

export default function Service({
  data,
  onEdit,
  onDelete,
}: {
  data: {
    id: number;
    order: number;
    name: string;
    categories: string[];
    discountActive: boolean;
    active: boolean;
    price: number;
  };
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [active, setActive] = useState(data.active || false);

  return (
    <Draggable draggableId={data.id.toString()} index={data.order}>
      {(provided) => (
        <div
          className="flex flex-col gap-4 rounded-lg border border-[#F1F5F9] py-5"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex items-center justify-between px-4">
            <h4 className="text-xs font-semibold text-black">{data.name}</h4>
            <div className="relative flex h-6 items-center gap-4">
              <input
                type="checkbox"
                className="switch"
                checked={active}
                onChange={() => setActive(!active)}
              />
              <DotsMenu onDelete={onDelete} onEdit={onEdit} />
            </div>
          </div>
          <hr className="border-[#F1F5F9]" />
          <div className="flex flex-col gap-2 px-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium text-textGray">التصنيف </h4>
              <h5 className="text-xs font-semibold text-black">
                {data.categories.join(", ")}
              </h5>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium text-textGray">
                تفعيل الخصم{" "}
              </h4>
              <h5 className="text-xs font-semibold text-black">
                {data.discountActive ? "مفعل" : "غير مفعل"}
              </h5>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium text-textGray">السعر </h4>
              <h5
                className={`${english_font.className} text-left text-xs font-semibold text-black`}
              >
                <bdi>{data.price} sr</bdi>
              </h5>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
