import React from "react";

function Todo() {
  return (
    <div className="bg-gray-300 shadow-md w-full rounded-lg flex justify-between px-2 h-20 min-h-16 items-center">
      <div>
        <input type="text" value={"Title"} contentEditable={false} disabled />
      </div>
      <div className="flex items-center">
        <div className="me-5">Time</div>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
