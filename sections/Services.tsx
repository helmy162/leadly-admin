import Service from "@/components/Service";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function Services() {
  function handleReorder({ destination, source, draggableId }: any) {
    const draggeServiceID = draggableId;
    const currentOrder = source.index;
    const newOrder = destination.index;

    // you need to shift the order of all services between the dragged service index and the dropped service index
  }
  return (
    <DragDropContext onDragEnd={handleReorder}>
      <Droppable droppableId="services" type="service">
        {(dropProvided) => (
          <div
            className="flex flex-col gap-4 rounded-xl bg-white p-4"
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Service key={index} id={`${index}`} order={index} />
            ))}
            {dropProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
