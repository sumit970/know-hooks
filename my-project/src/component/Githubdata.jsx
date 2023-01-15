import React, { useEffect, useState } from "react";
import Tempcard from "./Tempcard";

  const githubdata = () => {
  const [getdata, setdata] = useState({});
  const [Lat,setLat] = useState([]);
  const [Lon,setLong] = useState([]);

  const getuser = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=cff02b68e7e98bcad9106a0b30328ba6`
    );
    

    const data = await response.json();

    console.log(data);
    const { humidity, temp, pressure } = data.main;
    const { name } = data;
    const { country,sunrise,sunset } = data.sys;
    const { description } = data.weather[0];
    const { speed } = data.wind;
    
    const weatherdata = {
      
      humidity,
      temp,
      pressure,
      name,
      country,
      sunrise,
      sunset,
      description,
      speed,

    };

    setdata(weatherdata);

  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=>{
       setLat(position.coords.latitude);
       setLong(position.coords.longitude);
    })
    getuser();
  },[Lon,Lat]);

  // console.log(Lon);
  // console.log(Lat);

  return (
    <>
    {/* {console.log(getdata)} */}
    {/* <h1>{Lon}</h1>
    <h1>{Lat}</h1> */}

    <Tempcard {...getdata} />
    </>
  );
};
export default githubdata;
