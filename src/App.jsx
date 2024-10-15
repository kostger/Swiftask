import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import TaskInfo from "./components/TaskInfo";
import About from "./components/Pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" z-0 bg-black w-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/task/:id" element={<TaskInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
