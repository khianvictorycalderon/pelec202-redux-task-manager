import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./feature/taskSlice";
import { useState } from "react";

export default function App() {

  const [taskNameInput, setTaskNameInput] = useState("");

  return (
    <div>

      <p className="text-center">PELEC202 Finals Hands On Quiz 1</p>
      <p className="text-center">by Khian Victory D. Calderon</p>
      <p className="text-center">BSIT - 2A</p>

      <hr/>

      <form className="input-section">
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