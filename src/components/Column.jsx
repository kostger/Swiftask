import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";
import { Link } from "react-router-dom";

function Column({ title, data, updateTaskStatus }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setTasks(data);
    } else {
      console.error("Data is not an array:", data);
    }
  }, [data]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => updateTaskStatus(item.id, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-[300px] h-[800px] bg-gray-200 p-10 flex flex-col items-center shadow-2xl border-2 rounded-xl border-orange-400 ${
        isOver ? "bg-green-200" : ""
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <h3 className="font-bold mb-4 border border-b-orange-600 w-full text-center text-xl">
          {title}
        </h3>
      </div>
      <div className="flex flex-col justify-start gap-4 items-center h-full w-full">
        {tasks.map((task) => (
          <Link to={`/task/${task.id}`} key={task.id}>
            <Task task={task} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Column;
