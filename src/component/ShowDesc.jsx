/* eslint-disable no-unused-vars */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase";

function ShowDesc({ id, isDesc, onCloseDesc }) {
  const [todoItem, setTodoItem] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchTodoById = async () => {
      try {
        const docRef = doc(db, "todo1", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTodoItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTodoById();
  }, [id]);

  const deleteTodo = async (id) => {
    try {
      const docRef = doc(db, "todo1", id);
      if (id) await deleteDoc(docRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!isDesc) return null;
  else if (!todoItem)
    return (
      <div className="absolute">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div
      className="absolute inset-0 flex justify-center items-start top-1/2 -translate-y-1/4 mx-5"
      onClick={onCloseDesc}
    >
      <div
        className="bg-white w-[430px] max-w-xl mx-auto rounded-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-400 flex justify-between items-center p-2 rounded-t-md">
          <div>
            <h1>{todoItem.title || "Title"}</h1>
          </div>
          <AiOutlineClose className="cursor-pointer" onClick={onCloseDesc} />
        </div>
        <div className="p-4">
          <p className="mb-2">{todoItem.desc || "No description available..."}</p>
          <p className="text-lg font-medium text-red-500">
            Created On: {todoItem.time || "01-01-2001"}
          </p>
        </div>
        <div className="bg-amber-200 flex justify-center p-1 rounded-b-md">
          <button
            className="font-medium border border-black/50 px-2 rounded"
            onClick={() => {
              deleteTodo(id);
              onCloseDesc();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowDesc;
