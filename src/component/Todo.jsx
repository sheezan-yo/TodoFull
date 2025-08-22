/* eslint-disable no-unused-vars */
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

function Todo({ onOpenDesc, title, time, id, setIsEdit, onOpen }) {
  const deleteTodo = async (id) => {
    try {
      const docRef = doc(db, "todo1", id);
      if (id) await deleteDoc(docRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-gray-300 shadow-md w-full rounded-lg flex justify-between px-2 ps-4 h-20 min-h-18 items-center">
      <div onClick={onOpenDesc} className="cursor-pointer">
        <h1 className="truncate sm:w-40 w-20">{title || "Title"}</h1>
      </div>
      <div className="flex items-center">
        <div className="me-5 text-center hidden sm:block">
          Created On:
          <br />
          {time || "01-01-2001"}
        </div>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
            onClick={() => {
              setIsEdit(true);
              onOpen();
            }}
          >
            Edit
          </button>
          <button
            className="bg-rose-400 hover:bg-red-500 px-2 py-1 rounded"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
