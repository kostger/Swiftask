import React from "react";

function Column({ title }) {
  return (
    <div className="w-[300px] h-[400px] bg-gray-200 p-4 flex flex-col border items-center">
      <h3 className="font-bold mb-4">{title}</h3>
      {/* Add your tasks here */}
    </div>
  );
}

export default Column;
