import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <h1>Tasks</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setTasks([...tasks, input])}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <li key={index}>{task}</li>
            <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  )
} export default Tasks