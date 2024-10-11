import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { StateContext } from "../context/StateContext";
function TaskInfo(props) {
  const { dataArray, setDataArray } = useContext(StateContext);
  const taskId = useParams().id;
  const task = dataArray.find((task) => task.id === taskId);
  console.log(dataArray, taskId);
  return (
    <>
      {task && (
        <div className="bg-white flex flex-col items-center justify-center w-full h-[700px]">
          <div className=" h-[500px] flex flex-col items-center justify-center gap-4 bg-orange-400 rounded-xl border-black border shadow-lg shadow-black">
            <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
            <p className="text-lg text-wrap px-4 flex-wrap">
              {task.description}
            </p>
            <div className="flex flex-col justify-start gap-6 ">
              <div className="flex  justify-start items-center gap-2">
                <h3 className="text-xl font-bold">Assignee:</h3>
                <p className="text-lg">{task.assignee}</p>
              </div>
              <div className="flex  justify-start items-center gap-2">
                <h3 className="text-lg font-bold">Status:</h3>
                <p className="text-lg">{task.status}</p>
              </div>
              <div className="flex  justify-start items-center gap-2">
                <h3 className="text-lg font-bold">Priority:</h3>
                <p className="text-lg">{task.priority}</p>
              </div>
              <div className="flex  justify-start items-center gap-2">
                <h3 className="text-lg font-bold">Due Date:</h3>
                <p className="text-lg">{task.dueDate}</p>
              </div>
              <div className="flex  justify-start items-center gap-2">
                <h3 className="text-lg font-bold">Created At:</h3>
                <p className="text-lg">{task.createdDate}</p>
              </div>
            </div>
          </div>
          <Link className="absolute bottom-24" to="/">
            <button className="bg-neutral-950 text-white w-[100px] h-[50px]">
              Back
            </button>
          </Link>
        </div>
      )}
      {!task && (
        <div className="bg-white flex flex-col items-center justify-center w-full h-[700px]">
          Task not found
        </div>
      )}
    </>
  );
}

export default TaskInfo;
