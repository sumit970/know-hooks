import React from "react";
import { useState } from "react";

const Dotoperator = () => {
  const biodata = [
    {
      id: 0,
      myName: "sumit",
      age: 20,
      subject: "computerscience",
    },

    {
      id: 1,
      myName: "satyam",
      age: 23,
      subject: "commerce",
    },

    {
      id: 2,
      myName: "sonu",
      age: 22,
      subject: "Maths",

    },

  ];
  const [text, settext] = useState(biodata);
  const changet = (key) => {
    const newarray = text.filter((elem) => {
      return elem.id !== key;
      
    });
    settext(newarray);

  };

  return (
    <>
      {text.map((elem) => {
        return (
          <>

            <div className="flex flex-row justify-around bg-slate-400 space-x-1 space-y-1">
                <h1 className=" max-w-[300px]  text-left" key={elem.id}>
                  Name {elem.myName} roll {elem.age} subject {elem.subject}

                </h1>
                <button
                  className="bg-red-700 rounded p-1 "
                  onClick={() => changet(elem.id)}

                >

                  Remove
                </button>
              </div>
          </>

        );
      })}

      <div className="flex justify-center pt-3">
        <button
          className="text-white text-xl p-2 rounded flex justify-center bg-green-300"
          onClick={changet}
        >
          Change
        </button>
      </div>
    </>
  );
};

export default Dotoperator;
