import React from "react";
import { useState } from "react";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [alldata, setalldata] = useState([]);

  const submitdata = (et) => {
    if(email && password){
      et.preventDefault();
      const newdata = { id:new Date().getTime().toString(), email, password };
      setalldata([...alldata, newdata]);
      console.log(alldata);
      setemail("");
      setpassword("");
    }
    else{
      alert("ENTER THE DATA");
    }

  };
  return (
    <>
      <form
        action="/home"
        className=" bg-pink-300 m-2 rounded-[10px] w-[350px] h-[340px] flex flex-col justify-center space-x-2 space-y-5 "
        onSubmit={submitdata}
      >
        <div className=""></div>
        <div className="">
          <label htmlFor="" className="">
            Username{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="rounded p-2"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="" className="">
            Password{" "}
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="rounded p-2"
            value={password}
            onChange={(ev) => setpassword(ev.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-green-300 p-2 rounded text-white hover:bg-yellow-300 max-w-[80px]"
        />
      </form>

      {/* this section is the div which contains the  */}

      {alldata.map((elem) => {

        const {email,password,id}=elem;

        return (

          <div className=" bg-blue-400  flex flex-row justify-around " key={id}>
           
            <div className="">{email}</div>
            <div className="">{password}</div>
          
          </div>
        );
      })}
        {/* {console.log(elem)}; */}
    </>
  );
};

export default Form;
