import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./feature/taskSlice";
import { useState } from "react";

export default function App() {

  // Redux
  const tasks = useSelector(state => state.tasks);
  const dispath = useDispatch();
  // ---------------------

  const [taskNameInput, setTaskNameInput] = useState("");

  const handleAddTask = async(e) => {
    e.preventDefault(); // Prevents browser refresh

    if (!taskNameInput.trim()) {
      alert("Please enter a task name!");
      return;
    }

    // Generate random ID (No duplicate)
    let task_id;
    do {
      task_id = Math.floor(Math.random() * 91049102853);
    } while (tasks.find(item => item.id === task_id));

    // Add to redux store
    dispath(addTask({
      id: task_id,
      name: taskNameInput
    }));

    // Clears user input
    setTaskNameInput("");

  }

  return (
    <div>

      <p className="text-center">PELEC202 Finals Hands On Quiz 1</p>
      <p className="text-center">by Khian Victory D. Calderon</p>
      <p className="text-center">BSIT - 2A</p>

      <hr/>

      <form 
        onSubmit={handleAddTask}
        className="input-section"
        >
        <label htmlFor="only-input">Task Name:</label>
        <input 
          id="only-input" 
          type="text"
          value={taskNameInput} 
          onChange={(e) => setTaskNameInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

    </div>
  );
}