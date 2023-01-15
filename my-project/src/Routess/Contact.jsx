import React from "react";
import {  useNavigate} from "react-router-dom";
import Home from "./Home";


const Contact = () => {
    const navigate=useNavigate()
    
    const gohome=()=>{
        navigate('/')
    }
    const goback=()=>{
        navigate(-1)
    }
    
  return (
    <>
     
      <div className="text-3xl text-blue-400 font-serif text-center">
        This is the{" "}
        <span className="text-4xl text-yellow-600">
          {location.pathname.replace("/", "")}
        </span>{" "}
        page
      </div>
      <div className="space-   x-4">
        <button className="bg-red-500 text-white text-2xl rounded-[10px] p-2" onClick={gohome}>GoToHome</button>
        <button className="bg-red-500 text-white text-2xl rounded-[10px] p-2" onClick={goback}>GoToBack</button>
      
      </div>
    </>
  );
};

export default Contact;
