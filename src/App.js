import { useEffect, useState } from "react";
import "./App.css";
import { PageTitle } from "./PageTitle";
import { TaskForm } from "./TaskForm";
function App() {
  const [tasks, setTasks] = useState();

  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [details, setDetails] = useState("");
  const [value, setValue] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    };
    getTasks();
  }, []);

  return (
    <div className="App">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
      <br />
      <PageTitle text={"Task Tracker!"} fontSize={15} />
      {tasks && (
        <ol>
          {tasks.map((task) => (
            <li>{task.title}</li>
          ))}
        </ol>
      )}
      <TaskForm
        title={title}
        setTitle={setTitle}
        dueDate={dueDate}
        setDueDate={setDueDate}
        assignee={assignee}
        setAssignee={setAssignee}
        details={details}
        setDetails={setDetails}
      />
    </div>
  );
}

export default App;
