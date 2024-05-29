import Category from "@/components/Category";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";
import ConfirmationModal from "./ConfirmationModal";
import DeleteModal from "./DeleteModal";
import { services } from "@/mockups/services";
import { ALL_CATEGORIES } from "@/mockups/categories";

export default function Categories() {
  function handleReorder({ destination, source, draggableId }: any) {
    const draggedCategoryID = draggableId;
    const currentOrder = source.index;
    const newOrder = destination.index;

    // you need to shift the order of all categories between the dragged category and the dropped category
  }

  const [editCategory, setEditCategory] = useState<any>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteCategoryID, setDeleteCategoryID] = useState<any>(null);

  const handleDeleteCategory = () => {
    // delete category
    console.log("delete category", deleteCategoryID);
    setDeleteCategoryID(null);
  };


  return (
    <>
      <DragDropContext onDragEnd={handleReorder}>
        <Droppable droppableId="categories" type="category">
          {(dropProvided) => (
            <div
              className="flex flex-col gap-4 rounded-xl bg-white p-4"
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {ALL_CATEGORIES.map((item, index) => (
                <Category
                  key={index}
                  data={item}
                  onDelete={() => setDeleteCategoryID(item.id)}
                  onEdit={() => setEditCategory(item)}
                />
              ))}
              {dropProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddCategoryModal
        open={!!editCategory}
        setOpen={setEditCategory}
        category={editCategory}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات التصنيف بنجاح"
      />
      <DeleteModal
        open={!!deleteCategoryID}
        setOpen={setDeleteCategoryID}
        onDelete={handleDeleteCategory}
      />
    </>
  );
}
