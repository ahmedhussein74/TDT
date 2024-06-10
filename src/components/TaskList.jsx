import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../toolkit/taskSlice";

const TaskList = ({ filter }) => {
  const lang = sessionStorage.getItem("language") || "en";
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="w-[90%] md:w-1/2 mt-3 mx-auto">
      {filteredTasks.map((task, index) => (
        <li
          key={index}
          className="rounded-lg shadow-lg border p-3 flex flex-col"
        >
          <p className="flex justify-between items-center">
            <span>Task #{index + 1}</span>
            <button
              onClick={() => dispatch(removeTask(index))}
              className="font-bold text-red-600"
            >
              {lang == "en" ? "Delete" : "حذف"}
            </button>
          </p>
          <p>{task.name}</p>
          <p>Time: {task.dueDate}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
