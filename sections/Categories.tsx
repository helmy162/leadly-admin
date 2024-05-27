import Category from "@/components/Category";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function Categories() {
  function handleReorder({ destination, source, draggableId }: any) {
    const draggedCategoryID = draggableId;
    const currentOrder = source.index;
    const newOrder = destination.index;

    // you need to shift the order of all categories between the dragged category and the dropped category
  }
  return (
    <DragDropContext onDragEnd={handleReorder}>
      <Droppable droppableId="categories" type="category">
        {(dropProvided) => (
          <div
            className="flex flex-col gap-4 rounded-xl bg-white p-4"
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Category key={index} id={`${index}`} order={index} />
            ))}
            {dropProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
