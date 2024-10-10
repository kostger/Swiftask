import React, { useState } from "react";
import Task from "./Task";
import taskData from "../../constants/kanban.json";

function Column({ title }) {
  const [tasks, setTasks] = useState(taskData);
  return (
    <div className="w-[300px] h-[800px] bg-gray-200 p-10 flex flex-col items-center shadow-2xl border-2 rounded-xl border-orange-400 ">
      <div className="flex w-full justify-between items-center">
        <h3 className="font-bold mb-4 border border-b-orange-600 w-full text-center">
          {title}
        </h3>
        <button className="right-0 bg-blue-700 w-[45px] text-white border border-black mx-5">
          +
        </button>
      </div>
      <div className="flex flex-col justify-evenly items-center h-full w-full">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
