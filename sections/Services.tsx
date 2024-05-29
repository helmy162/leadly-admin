import Service from "@/components/Service";
import { services } from "@/mockups/services";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import AddServiceModal from "./AddServiceModal";
import ConfirmationModal from "./ConfirmationModal";
import DeleteModal from "./DeleteModal";

export default function Services() {
  function handleReorder({ destination, source, draggableId }: any) {
    const draggeServiceID = draggableId;
    const currentOrder = source.index;
    const newOrder = destination.index;

    // you need to shift the order of all services between the dragged service index and the dropped service index
  }

  const [editService, setEditService] = useState<any>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteServiceID, setDeleteServiceID] = useState<any>(null);

  const handleDeleteService = () => {
    // delete service
    console.log("delete service", deleteServiceID);
    setDeleteServiceID(null);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleReorder}>
        <Droppable droppableId="services" type="service">
          {(dropProvided) => (
            <div
              className="flex flex-col gap-4 rounded-xl bg-white p-4"
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {services.map((item, index) => (
                <Service
                  key={index}
                  data={item}
                  onDelete={() => setDeleteServiceID(item.id)}
                  onEdit={() => setEditService(item)}
                />
              ))}
              {dropProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <AddServiceModal
        open={!!editService}
        setOpen={setEditService}
        service={editService}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات التصنيف بنجاح"
      />
      <DeleteModal
        open={!!deleteServiceID}
        setOpen={setDeleteServiceID}
        onDelete={handleDeleteService}
      />

    </>
  );
}
