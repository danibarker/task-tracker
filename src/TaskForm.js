export function TaskForm({
  title,
  setTitle,
  dueDate,
  setDueDate,
  assignee,
  setAssignee,
  details,
  setDetails,
}) {
  const handleSubmit = async () => {
    const newTask = {
      title: title,
      dueDate: dueDate,
      details: details,
      assignee: assignee,
    };

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await response.text();
    console.log(data);
  };
  return (
    <div>
      <label>Title</label>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label>Due Date</label>
      <input
        value={dueDate}
        onChange={(event) => {
          setDueDate(event.target.value);
        }}
      />
      <label>Assignee</label>
      <input
        value={assignee}
        onChange={(e) => {
          setAssignee(e.target.value);
        }}
      />
      <label>Details</label>
      <textarea
        style={{ resize: "none", height: "100px" }}
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add New Task</button>
    </div>
  );
}
