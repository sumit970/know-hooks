import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Tostify = () => {
    const notify=()=>toast.success("LogIn Successful",{position:"top-center"});


  return (
    <>
      <div>Tostify</div>
      <button className="" onClick={notify}>click to toast</button>
      <ToastContainer/>
    </>
  );
};

export default Tostify;
