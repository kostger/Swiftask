import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </StrictMode>
);
