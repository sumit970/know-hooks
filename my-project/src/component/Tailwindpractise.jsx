import React, { useEffect } from "react";
import { useState } from "react";
import { FcApproval } from "react-icons/fc";

const tailwindpractise = () => {
  const [api, setdata] = useState([]); //usestate for data storig

  //function to get data from api
  const getuser = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    console.log(data);
    setdata(data);
  };

  //useeffect
  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      <section className="">
        <div className="text-3xl flex justify-center items-center text-yellow-600">
          The Sumit's store
        </div>
        <div className="grid grid-rows-4 md:grid-rows-6 space-y-2">
          {/* /the map function is used to fetch the data from object api */}
          {api.map((elem) => {
            const { id, title, price, description, category, image } = elem;
            return (
              <>
                <div className="flex flex-row bg-yellow-300">
                  <img
                    src={image}
                    alt="image not found"
                    className="h-[150px] w-[200px]"
                  />
                  <div className="flex flex-col space-x-2 overflow-">
                    <div className=""></div>
                    <rating className="text-2xl"> {elem.rating.rate}</rating>
                    <div className="flex flex-row">
                      <h className="text-xl ">{category} </h>
                      <p>
                        <FcApproval />
                      </p>
                    </div>
                    <span className="max-w-[350px] max-h-[100px] overflow-hidden text-md">
                      {description}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default tailwindpractise;
