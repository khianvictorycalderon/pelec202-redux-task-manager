import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./feature/taskSlice";
import { useState } from "react";

export default function App() {

  // Redux
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // ================================================

  const [taskNameInput, setTaskNameInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!taskNameInput.trim()) {
      alert("Please enter a task name!");
      return;
    }

    // ID generation (prevents duplicates)
    let task_id;
    do {
      task_id = Math.floor(Math.random() * 91049102853);
    } while (tasks.find((item) => item.id === task_id));

    // Add to redux store
    dispatch(
      addTask({
        id: task_id,
        name: taskNameInput,
      })
    );

    // Clears user input (for ux)
    setTaskNameInput("");
  };

  return (
    <div>

      <p className="text-center">PELEC202 Finals Hands On Quiz 1</p>
      <p className="text-center">by Khian Victory D. Calderon</p>
      <p className="text-center">BSIT - 2A</p>

      <hr />

      <form onSubmit={handleAddTask} className="input-section">
        <label htmlFor="only-input">Task Name:</label>
        <input
          id="only-input"
          type="text"
          value={taskNameInput}
          onChange={(e) => setTaskNameInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="outputs-wrapper">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className="output-card"
            >
            <span>{task.name}</span>
            <br/>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}