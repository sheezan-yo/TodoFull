/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Todo from "./Todo";
import Nav from "./Nav";
import useDisclosure from "../Hooks/useDisclose";
import AddTodo from "./AddTodo";
import useDescShow from "../Hooks/useDescShow";
import ShowDesc from "./ShowDesc";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { TbMoodEmpty } from "react-icons/tb";

function TodoContainer() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { isDesc, onCloseDesc, onOpenDesc } = useDescShow();

  const [isEdit, setIsEdit] = useState(false);
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const filterTodo = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(searchValue);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "todo1"), (snapshot) => {
      const todoData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todoData);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setData(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData(filtered);
    }
  }, [searchValue, todos]);
  console.log(data);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav isLoggedin={true} />

        <div className="flex justify-center items-center p-4 min-h-[80vh]">
          <div
            className={`${
              isOpen || isDesc ? "blur-background" : ""
            } bg-gradient-to-br from-purple-200 to-pink-100 w-[90%] max-w-md flex flex-col items-center rounded-lg shadow-lg p-4 min-h-[80vh]`}
          >
            <div className="bg-gray-400 w-full flex justify-center rounded-t-lg p-2 font-bold text-lg mb-2">
              TODO APP
            </div>

            {/* Search + Add Todo */}
            <div className="w-full flex justify-center gap-2 mb-4">
              <div className="relative flex-1">
                <FaMagnifyingGlass className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search your Todo..."
                  className="bg-white p-2 ps-8 rounded-md rounded-e-none w-full outline-none"
                  onChange={filterTodo}
                />
              </div>
              <button className="bg-blue-400 p-2 rounded-e-md">Search</button>
              <button
                className="bg-green-500 hover:bg-green-600 p-2 rounded-md"
                onClick={() => {
                  onOpen();
                  setIsEdit(false);
                }}
              >
                Add <span className="removeResp">Todo</span>
              </button>
            </div>

            {/* Todo list */}
            <div className="w-full flex flex-col items-center gap-3 overflow-auto flex-1">
              {!data || data.length === 0 ? (
                <div className="flex flex-col items-center mb-auto mt-auto">
                  <div className="text-6xl">
                    <TbMoodEmpty />
                  </div>
                  <div className="mb-2 text-lg font-medium">
                    <p>No Data Available</p>
                  </div>
                  <div>
                    <h1>Add To get started...</h1>
                  </div>
                </div>
              ) : (
                data.map((todo) => (
                  <Todo
                    onOpenDesc={() => {
                      setId(todo.id);
                      onOpenDesc();
                    }}
                    setIsEdit={setIsEdit}
                    time={todo.time}
                    title={todo.title}
                    id={todo.id}
                    key={todo.id}
                    onOpen={() => {
                      setId(todo.id);
                      onOpen();
                    }}
                  />
                ))
              )}
            </div>
          </div>

          {isOpen && (
            <AddTodo
              id={id}
              isEdit={isEdit}
              isOpen={isOpen}
              onClose={onClose}
              isUpdate={false}
            />
          )}
          {isDesc && (
            <ShowDesc id={id} isDesc={isDesc} onCloseDesc={onCloseDesc} />
          )}
        </div>
      </div>

      {/* <Nav isLoggedin={true} />

      <div className="heightMax flex mx-16 sm:mx-24 lg:mx-48 justify-center items-center">
        <div
          className={`${
            isOpen || isDesc ? "blur-background" : ""
          } bg-gradient-to-br from-purple-200 to-pink-100 h-4/5 w-[450px] flex flex-col items-center rounded-lg shadow-lg`}
        >
          <div className="bg-gray-400 w-full flex justify-center rounded-t-lg p-2 font-bold text-lg mb-2">
            TODO APP
          </div>

          <div className="w-full flex justify-center">
            <div className="relative w-4/7">
              <FaMagnifyingGlass className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="text"
                placeholder="Search your Todo..."
                className="bg-white p-2 ps-8 rounded-md rounded-e-none w-full outline-none"
                onChange={filterTodo}
              />
            </div>
            <div className="me-2">
              <button className="bg-blue-400 p-2 rounded-e-md">Search</button>
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 p-2 rounded-md"
              onClick={() => {
                onOpen(), setIsEdit(false);
              }}
            >
              Add <span className="removeResp">Todo</span>
            </button>
          </div>

          <div className="w-12/13 flex flex-col items-center gap-3 mt-4 mb-2 py-1 overflow-auto">
            {data.map((todo) => (
              <Todo
                onOpenDesc={() => {
                  setId(todo.id);
                  onOpenDesc();
                }}
                setIsEdit={setIsEdit}
                time={todo.time}
                title={todo.title}
                id={todo.id}
                key={todo.id}
                onOpen={() => {
                  setId(todo.id);
                  onOpen();
                }}
              />
            ))}
          </div>
        </div>

        {isOpen && (
          <AddTodo
            id={id}
            isEdit={isEdit}
            isOpen={isOpen}
            onClose={onClose}
            isUpdate={false}
          />
        )}
        {isDesc && (
          <ShowDesc id={id} isDesc={isDesc} onCloseDesc={onCloseDesc} />
        )}
      </div> */}
    </>
  );
}

export default TodoContainer;
