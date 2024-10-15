import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../Column";
import IconButton from "@mui/material/Button";
import SideMenu from "./SideMenu";
import { ArrowLeft, Add } from "@mui/icons-material";
import { StateContext } from "../../context/StateContext";

function Home() {
  const [todoData, setTodoData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [inReviewData, setInReviewData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { dataArray, setDataArray } = useContext(StateContext);

  useEffect(() => {
    const todoTasks = [];
    const inProgressTasks = [];
    const inReviewTasks = [];
    const doneTasks = [];

    dataArray.forEach((task) => {
      if (task.status === "To Do") {
        todoTasks.push(task);
      } else if (task.status === "In Progress") {
        inProgressTasks.push(task);
      } else if (task.status === "In Review") {
        inReviewTasks.push(task);
      } else if (task.status === "Done") {
        doneTasks.push(task);
      }
    });
    setTodoData(todoTasks);
    setInProgressData(inProgressTasks);
    setInReviewData(inReviewTasks);
    setDoneData(doneTasks);
  }, [dataArray]);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  function addTask(task) {
    setDataArray((prev) => [...prev, task]);
  }

  function updateTaskStatus(taskId, newStatus) {
    setDataArray((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-white flex flex-col md:flex-row items-center justify-evenly w-full md:h-[1000px] h-full p-10">
        {toggleMenu && <SideMenu addTask={addTask} />}

        <IconButton
          variant="outlined"
          onClick={handleToggleMenu}
          className=" absolute md:relative top-10 "
        >
          {toggleMenu ? <ArrowLeft /> : <Add />}
        </IconButton>
        <Column
          title={"To Do"}
          data={todoData}
          updateTaskStatus={updateTaskStatus}
        />
        <Column
          title={"In Progress"}
          data={inProgressData}
          updateTaskStatus={updateTaskStatus}
        />
        <Column
          title={"In Review"}
          data={inReviewData}
          updateTaskStatus={updateTaskStatus}
        />
        <Column
          title={"Done"}
          data={doneData}
          updateTaskStatus={updateTaskStatus}
        />
      </div>
    </DndProvider>
  );
}

export default Home;
