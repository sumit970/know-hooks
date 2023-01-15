import React from "react";
import Home from "./Home";

const About = () => {
  return (
    <>
      
      <div className="text-3xl text-blue-400 font-serif text-center">
        This is the{" "}
        <span className="text-4xl text-yellow-600">
          {location.pathname.replace("/", "")}
        </span>{" "}
        page
      </div>
    </>
  );
};

export default About;
