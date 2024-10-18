import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StateContext } from "../context/StateContext";
import { Edit, Save } from "@mui/icons-material";

function TaskInfo() {
  const { dataArray, setDataArray } = useContext(StateContext);
  const taskId = useParams().id;
  const task = dataArray.find((task) => task.id === taskId);

  // State for managing edit mode and input values
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableTask, setEditableTask] = useState(task || {});

  const handleEditClick = () => {
    setIsEditMode(true);
    setEditableTask(task);
  };

  const handleSaveClick = () => {
    const updatedTasks = dataArray.map((e) =>
      e.id === taskId ? { ...e, ...editableTask } : e
    );
    setDataArray(updatedTasks);
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleDeleteTask = () => {
    const updatedTasks = dataArray.filter((task) => task.id !== taskId);
    setDataArray(updatedTasks);
  };

  return (
    <>
      {task && (
        <div className="bg-white flex flex-col items-center justify-center w-full h-[700px]">
          <div className="min-h-[500px] min-w-[600px] flex flex-col items-center justify-center gap-4 bg-orange-400 rounded-xl border-black border shadow-lg shadow-black">
            <div className="flex justify-evenly items-center w-full">
              {isEditMode ? (
                <input
                  type="text"
                  name="title"
                  value={editableTask.title || ""}
                  onChange={handleInputChange}
                  className="text-3xl font-bold mb-4 w-full text-center"
                />
              ) : (
                <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
              )}
              <button
                className="bg-green-400 w-[100px] h-10 rounded-xl flex justify-evenly items-center"
                onClick={isEditMode ? handleSaveClick : handleEditClick}
              >
                {isEditMode ? "Save" : "Edit"}
                {isEditMode ? (
                  <Save style={{ color: "white" }} />
                ) : (
                  <Edit style={{ color: "white" }} />
                )}
              </button>
            </div>
            <div className="text-lg px-4 flex-wrap">
              {isEditMode ? (
                <textarea
                  name="description"
                  value={editableTask.description || ""}
                  onChange={handleInputChange}
                  className="w-full h-[100px] p-2"
                />
              ) : (
                <p>{task.description}</p>
              )}
            </div>
            <div className="flex flex-col justify-start gap-6">
              {["assignee", "status", "priority", "dueDate", "createdDate"].map(
                (field) => (
                  <div
                    key={field}
                    className="flex justify-start items-center gap-2"
                  >
                    <h3 className="text-lg font-bold">
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </h3>
                    {isEditMode ? (
                      <input
                        type="text"
                        name={field}
                        value={editableTask[field] || ""}
                        onChange={handleInputChange}
                        className="text-lg"
                      />
                    ) : (
                      <p className="text-lg">{task[field]}</p>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="flex w-full justify-center gap-2 items-center">
              <Link to="/">
                <button className="bg-neutral-950 text-white w-[100px] h-[50px]">
                  Back
                </button>
              </Link>
              <Link to="/">
                <button
                  onClick={handleDeleteTask}
                  className="bg-red-600 text-white w-[100px] h-[50px]"
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
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
