"use client";
import Appointment from "@/components/Appointment";
import FilterMenu from "@/components/FilterMenu";
import ReservationModal from "./ReservationModal";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import ConfirmationModal from "./ConfirmationModal";

export default function Appointments({
  appointments,
}: {
  appointments: any[];
}) {
  const [editAppointment, setEditAppointment] = useState<any>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteAppointmentID, setDeleteAppointmentID] = useState<any>(null);

  const handleDeleteAppointment = () => {
    // delete appointment
    console.log("delete appointment", deleteAppointmentID);
    setDeleteAppointmentID(null);
  };
  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
        {appointments.map((item, index) => (
          <Appointment
            key={index}
            data={item}
            onEdit={() => setEditAppointment(item)}
            onDelete={() => setDeleteAppointmentID(item.id)}
          />
        ))}
      </div>
      <ReservationModal
        open={!!editAppointment}
        setOpen={setEditAppointment}
        appointment={editAppointment}
        onSuccess={() => setConfirmModal(true)}
      />
      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات الحجز بنجاح"
      />
      <DeleteModal
        open={!!deleteAppointmentID}
        setOpen={setDeleteAppointmentID}
        onDelete={handleDeleteAppointment}
      />
    </>
  );
}

const employees = ["محمد", "علي", "عمر", "عبدالله"];

const services = ["قص شعر", "تجميل", "مساج", "تدليك"];
