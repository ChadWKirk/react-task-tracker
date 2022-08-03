import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      text: "1",
      id: "1",
    },
    {
      text: "2",
      id: "2",
    },
    {
      text: "3",
      id: "3",
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
