import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Todo from "./Todo";
import Nav from "./Nav";

function TodoContainer() {
  return (
    <>
      <Nav isLoggedin={true} />
      <div className="heightMax flex mx-16 sm:mx-24 lg:mx-48 justify-center items-center">
        <div className="bg-gradient-to-br from-purple-200 to-pink-100 h-4/5 w-[450px] flex flex-col items-center rounded-lg shadow-lg">
          <div className="bg-gray-400 w-full flex justify-center rounded-t-lg p-2 font-bold text-lg mb-2">
            TODO APP
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-3/4">
              <FaMagnifyingGlass className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="text"
                placeholder="Search your Todo..."
                className="bg-white p-2 ps-8 rounded-md rounded-e-none w-full"
              />
            </div>
            <button className="bg-blue-400 p-2 rounded-e-md">Search</button>
          </div>
          <div className="w-12/13 flex flex-col items-center gap-3 mt-4 mb-2 py-1 overflow-auto">
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoContainer;
