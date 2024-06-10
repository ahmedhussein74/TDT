import Modal from "./Modal";
import { useState } from "react";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { openModal } from "../toolkit/modalSlice";
import { translate } from "../hooks/translations";

const TaskManager = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [lang, setLang] = useState(sessionStorage.getItem("language") || "en");

  return (
    <section>
      <div className="w-[90%] md:w-1/2 mt-3 mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <input
          type="text"
          value={filter}
          placeholder="Filter tasks by name"
          onChange={(e) => setFilter(e.target.value)}
          className="grow outline-none border rounded p-2"
        />
        <button
          onClick={() => dispatch(openModal())}
          className="bg-green-600 text-white w-28 rounded-lg py-2"
        >
          {lang == "en" ? "Add Task" : "إضافة مهمة"}
        </button>
        <button
          onClick={() => {
            translate(lang);
            lang == "en" ? setLang("ar") : setLang("en");
          }}
        >
          {lang == "en" ? "English" : "العربية"}
        </button>
      </div>
      <Modal />
      <TaskList filter={filter} />
    </section>
  );
};

export default TaskManager;
