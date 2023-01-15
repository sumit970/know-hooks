import React from "react";
import { useLocation } from "react-router-dom";
const Location = () => {
  const loc = useLocation();
  console.log(loc);

  return <div>Location</div>
  ;
};

export default Location;
