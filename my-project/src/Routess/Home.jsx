import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="flex flex-row justify-end text-white space-x-4 text-xl bg-red-300 p-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400" : "undefined"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400" : "undefined"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400" : "undefined"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400" : "undefined"
          }
          to={"/services"}
        >
          Services
        </NavLink>

        {/* <span className="hover:text-red-500">Home</span>
          <span className="hover:text-red-500">About</span>
          <span className="hover:text-red-500">Contact</span>
          <span className="hover:text-red-500">Services</span> */}
      </div>
      {location.pathname == "/" ? (
        <div className="text-3xl text-blue-400 font-serif text-center">
          This is the <span className="text-4xl text-yellow-600">Home</span>{" "}
          page
        </div>
      ) : (
        ""
      )}
      <Outlet/>
    </>
  );
};

export default Home;
