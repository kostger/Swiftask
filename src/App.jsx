import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Column from "./components/Column";

function App() {
  return (
    <div className=" z-0 bg-black w-full ">
      <Navbar />

      <div className="bg-white flex items-center justify-evenly w-full h-[1000px]">
        <Column title={"Backlog:"} />
        <Column title={"To Do:"} />
        <Column title={"In Review:"} />
        <Column title={"Done:"} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
