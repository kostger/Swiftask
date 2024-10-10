import React from "react";
import Task from "./Task";
function Column({ title }) {
  return (
    <div className="w-[300px] h-[400px] bg-gray-200 p-10 flex flex-col  items-center shadow-2xl border-2 rounded-xl border-orange-400">
      <div className=" flex w-full justify-between items-center ">
        <h3 className="font-bold mb-4 border border-b-orange-600 w-full  text-center">
          {title}
        </h3>
        <button className="right-0">Add</button>
      </div>
      {/* Add your tasks here */}
      <div className="flex flex-col justify-evenly items-center h-full w-full">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}

export default Column;
