import React, { createContext, useState, useEffect } from "react";
import kanbanData from "../../constants/kanban.json";

// Create the context
export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState(() => {
    const savedData = localStorage.getItem("dataArray");
    return savedData ? JSON.parse(savedData) : kanbanData;
    // return kanbanData;
  });

  useEffect(() => {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
  }, [dataArray]);

  return (
    <StateContext.Provider value={{ dataArray, setDataArray }}>
      {children}
    </StateContext.Provider>
  );
};
