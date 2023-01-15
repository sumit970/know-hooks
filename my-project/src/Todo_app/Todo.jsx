import React from "react";

const Todo = () => {
  return (
    <><section className="bg-blue-900  w-full mb-4">


      <div className="text-2xl font-serif text-white text-center ">
        Welcome To My Todo Ap
        
      </div>
      <div className="flex flex-col justify-center ">

        <input type="text" className="" />
        <button className="text-2xl text-black p-2 rounded bg-red-600">Delete All</button>

      </div>


    </section>
    </>
  );
};

export default Todo;
