import Employee from "@/components/Employee";
import { employees } from "@/mockups/employees";
import { useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import ConfirmationModal from "./ConfirmationModal";
import DeleteModal from "./DeleteModal";

export default function Employees() {
  const [editEmployee, setEditEmployee] = useState<any>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteEmployeeID, setDeleteEmployeeID] = useState<any>(null);

  const handleDeleteEmployee = () => {
    // delete employee
    console.log("delete employee", deleteEmployeeID);
    setDeleteEmployeeID(null);
  };

  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
        {employees.map((item, index) => (
          <Employee
            key={index}
            data={item}
            onDelete={() => setDeleteEmployeeID(item.id)}
            onEdit={() => setEditEmployee(item)}
          />
        ))}
      </div>
      <AddEmployeeModal
        open={Boolean(editEmployee)}
        setOpen={setEditEmployee}
        onSuccess={() => setConfirmModal(true)}
        employee={editEmployee}
      />

      <ConfirmationModal
        open={confirmModal}
        setOpen={setConfirmModal}
        title="تم تعديل بيانات الموظف بنجاح"
      />

      <DeleteModal
        open={!!deleteEmployeeID}
        setOpen={setDeleteEmployeeID}
        onDelete={handleDeleteEmployee}
      />
    </>
  );
}
