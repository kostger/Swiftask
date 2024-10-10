import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="">
        <div className="bg-black w-full flex flex-row justify-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
