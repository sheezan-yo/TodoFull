import React, { useState } from "react";
import Nav from "./Nav";

function Home() {
  const [color, setColor] = useState("#F5EFFF");

  return (
    <>
      <Nav isLoggedin={false} />
      <div
        className="w-full heightMax duration-200 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <h1>Home Page</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-xl justify-center px-3 py-2">
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
              onClick={() => setColor("grey")}
            >
              Grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              black
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "teal" }}
              onClick={() => setColor("teal")}
            >
              Teal
            </button>
            <button
              className="outline-none px-4 py-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <div className="flex justify-center">
              <label htmlFor="colorIn" className="my-auto">
                Custom Colors:&nbsp;
              </label>
              <input
                type="color"
                id="colorIn"
                className="h-10 w-max-10F form-control"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
