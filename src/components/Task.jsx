import React from "react";
import { useDrag } from "react-dnd";

function Task({ task }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="w-[270px] h-[120px] px-5 bg-orange-400 border border-black flex flex-col text-white font-bold text-sm shadow-md shadow-gray-600"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="w-full flex flex-row justify-between items-center text-black text-lg ">
        {task.title}
        <span
          className={`text-xs p-4 rounded-xl w-[80px] ${
            task.priority === "High"
              ? "bg-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-400"
              : "bg-green-400"
          }`}
        >
          {task.priority}
        </span>
      </div>
      <div className="border-t-2 border-black flex justify-center items-center p-1">
        {task.description}
      </div>
    </div>
  );
}

export default Task;
