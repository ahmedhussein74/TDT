import { useState } from "react";
import { addTask } from "../toolkit/taskSlice";
import { closeModal } from "../toolkit/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const lang = sessionStorage.getItem("language") || "en";

  const handleAddTask = () => {
    if (taskName.trim() === "" || taskDueDate.trim() === "") return;
    dispatch(addTask({ name: taskName, dueDate: taskDueDate }));
    setTaskName("");
    setTaskDueDate("");
    dispatch(closeModal());
    alert("Task has added");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content flex flex-col gap-5">
        <p className="flex justify-between items-center translated">
          <span className="font-bold text-xl">
            {lang == "en" ? "New Task" : "مهمة جديدة"}
          </span>
          <span className="close" onClick={() => dispatch(closeModal())}>
            &times;
          </span>
        </p>
        <input
          type="text"
          value={taskName}
          placeholder="Enter task name"
          onChange={(e) => setTaskName(e.target.value)}
          className="grow outline-none border rounded p-2"
        />
        <input
          type="date"
          value={taskDueDate}
          placeholder="Enter due date"
          onChange={(e) => setTaskDueDate(e.target.value)}
          className="grow outline-none border rounded p-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-600 text-white w-28 rounded-lg py-2"
        >
          {lang == "en" ? "Add Task" : "إضافة مهمة"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
