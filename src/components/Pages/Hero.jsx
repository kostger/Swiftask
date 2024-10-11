import React, { useEffect, useContext } from "react";
import { useState } from "react";
import Column from "../Column";

import IconButton from "@mui/material/Button";
import SideMenu from "./SideMenu";
import { ArrowLeft, Add } from "@mui/icons-material";
import { StateContext } from "../../context/StateContext";

function Hero() {
  const { dataArray, setDataArray } = useContext(StateContext);
  const [todoData, setTodoData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [inReviewData, setInReviewData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

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

  return (
    <>
      <div className="bg-white flex items-center justify-evenly w-full h-[1000px]">
        {toggleMenu && <SideMenu addTask={addTask} />}

        <IconButton variant="outlined" onClick={handleToggleMenu}>
          {toggleMenu ? <ArrowLeft /> : <Add />}
        </IconButton>
        <Column title={"To Do"} data={todoData} />
        <Column title={"In Progress"} data={inProgressData} />
        <Column title={"In Review"} data={inReviewData} />
        <Column title={"Done"} data={doneData} />
      </div>
    </>
  );
}

export default Hero;
