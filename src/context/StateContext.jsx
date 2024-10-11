import React, { createContext, useState } from "react";
import kanbanData from "../../constants/kanban.json";

// Create the context
export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState(kanbanData);

  return (
    <StateContext.Provider value={{ dataArray, setDataArray }}>
      {children}
    </StateContext.Provider>
  );
};
