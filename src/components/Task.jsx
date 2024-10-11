import React from "react";

function Task({ task }) {
  return (
    <div className="w-[270px] h-[120px] px-5   bg-orange-400 border border-black flex flex-col text-white font-bold text-sm shadow-md shadow-gray-600">
      <div className="w-full flex flex-row justify-evenly items-center text-black text-lg ">
        {task.title}
        <span className="text-xs p-4">{task.priority}</span>
      </div>
      <div className="border-t-2 border-black flex justify-center items-center p-1">
        {task.description}
      </div>
    </div>
  );
}

export default Task;
