import React from "react";
import { Link } from "react-router-dom";

function Nav({ isLoggedin }) {
  if (isLoggedin) {
    return (
      <div className="bg-gray-200 p-2 py-3">
        <div>
          <nav className="flex justify-between items-center">
            <div>
              <p className="text-lg font-medium">UserName</p>
              <p>
                Don't add sensitive info{" "}
                <span className="font-medium">(as no authentication)</span>
              </p>
            </div>
            <div>
              <Link to="/">
                <button className="px-3 py-1 bg-red-400 hover:bg-red-500 rounded-2xl">
                  Logout
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 p-2 py-3">
      <div>
        <nav className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">
              Create Account or Login to access app
            </p>
            <p>Add any fake info for test, Authentication is not done yet...</p>
          </div>
          <div className="flex gap-3">
            <Link to="/signup">
              <button className="px-3 py-1 bg-indigo-400 hover:bg-indigo-500 rounded-2xl">
                Signup
              </button>
            </Link>
            <Link to="/signin">
              <button className="px-3 py-1 bg-indigo-400 hover:bg-indigo-500 rounded-2xl">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
