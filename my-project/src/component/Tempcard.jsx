import React from "react";
import getdata from "./Githubdata"

const Tempcard = ({name,country,pressure,speed,temp,sunrise,sunset}) => {
  let sec=sunset;
  let date= new Date(sec*1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;
  
  

  let sr= new Date(sunrise*1000);
  let times = `${sr.getHours()}:${sr.getMinutes()}`;
  

  return (
    <>
    
      <div className="">{new Date().toLocaleString()}</div>
      <div className="">City {name}</div>
      <div className="">country {country}</div>
      <div className="">Pressurre {pressure/1000 +"pa"}</div>
      <div className="">Wind speed {speed +"kmph"}</div>  
      <div className="">temperature {Math.round(temp-273.5)+" C"}</div>
      <div className="">sunrise {times+"am"}</div>
      <div className="">sunset {timestr+"pm"}</div>

    </>
  );
};

export default Tempcard;
