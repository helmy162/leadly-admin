"use client";
import Testimonial from "@/components/Testimonial";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import ConfirmationModal from "./ConfirmationModal";
import { testimonials } from "@/mockups/testimonials";
import AddTestimonialModal from "./AddTestimonialModal";

export default function Testimonials() {
  const [editTestimonial, setEditTestimonial] = useState<any>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteTestimonialID, setDeleteTestimonialID] = useState<any>(null);

  const handleDeleteTestimonial = () => {
    // delete testimonial
    console.log("delete testimonial", deleteTestimonialID);
    setDeleteTestimonialID(null);
  };
  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
        {testimonials.map((item, index) => (
          <Testimonial
            key={index}
            data={item}
            onEdit={() => setEditTestimonial(item)}
            onDelete={() => setDeleteTestimonialID(item.id)}
          />
        ))}
      </div>
      <AddTestimonialModal
        open={!!editTestimonial}
        setOpen={setEditTestimonial}
        testimonial={editTestimonial}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات التقييم بنجاح"
      />
      <DeleteModal
        open={!!deleteTestimonialID}
        setOpen={setDeleteTestimonialID}
        onDelete={handleDeleteTestimonial}
      />
    </>
  );
}

const employees = ["محمد", "علي", "عمر", "عبدالله"];

const services = ["قص شعر", "تجميل", "مساج", "تدليك"];
