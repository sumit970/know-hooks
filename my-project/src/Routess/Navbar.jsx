import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Eror from "./Eror";

const Navbar = () => {
  // const location=useLocation();
  return (
    <>
      {/* <div className="">you are at {location.pathname} and you are using react-route-dom</div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Eror />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
