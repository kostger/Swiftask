import React from "react";

function About() {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-4 w-full h-[660px] text-wrap text-black font-bold px-20">
      <h1 className="text-4xl font-bold text-orange-500">About Swiftask</h1>
      <p className="text-lg w-6/12">
        Swiftask is a simple Kanban board application that allows users to
        create, update, and delete tasks. This project was built as part of the
        Ironhack Web-Development Course. The project is built using React and
        Tailwindcss.
      </p>
    </div>
  );
}

export default About;
