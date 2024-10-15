import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function SideMenu({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    if (
      !title ||
      !description ||
      !assignee ||
      !status ||
      !priority ||
      !createdDate ||
      !dueDate
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000).toString(),
      title,
      description,
      assignee,
      status,
      priority,
      createdDate,
      dueDate,
    };
    addTask(task);
  };

  return (
    <div className="flex flex-col bg-orange-100 border border-gray-500 rounded-xl justify-start gap-6 items-start md:h-[800px] w-[400px] p-4">
      <h1 className="text-4xl font-bold text-center text-black bg-blue-400 rounded-2xl p-4">
        Add a New Task
      </h1>

      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="m-4"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="m-4"
      />
      <TextField
        label="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        className="m-4"
      />
      <FormControl className="w-full">
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="In Review">In Review</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="w-full">
        <InputLabel>Priority</InputLabel>
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Created Date"
        type="date"
        value={createdDate}
        onChange={(e) => setCreatedDate(e.target.value)}
        className="m-4"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="m-4"
        InputLabelProps={{ shrink: true }}
      />

      <Button variant="contained" className="m-4" onClick={handleSubmit}>
        Add task
      </Button>
    </div>
  );
}

export default SideMenu;
