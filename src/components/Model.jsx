import React from "react";

function Model(props) {
  return (
    <section
      id={props.id}
      className="flex justify-center items-center w-[100vw] h-[100vh]"
    >
      <div className="flex flex-col justify-between h-[70%]">
        <div
          className={`flex-flex-col text-center ${
            props.id === "solar-roof" ? "text-white" : "text-black"
          } `}
        >
          <h1 className={`font-semibold text-5xl capitalize`}>{props.title}</h1>
          <p className=" capitalize pt-2 ">
            order online for{" "}
            <span className="underline underline-offset-4">
              touchless delivery
            </span>
          </p>
        </div>
        <div className="flex flex-wrap  w-[80vw] justify-evenly text-white  font-medium ">
          <div className="flex flex-col p-4 gap-2 text-center min800:hidden">
            <h1 className="font-extrabold text-3xl">396 Mi</h1>
            <p>Range (EPA est.)</p>
          </div>
          <div className="flex flex-col p-4 gap-2 text-center min800:hidden">
            <h1 className="font-extrabold text-3xl">1.99s</h1>
            <p>0-60 mph*</p>
          </div>
          <div className="flex flex-col p-4 gap-2 text-center min800:hidden">
            <h1 className="font-extrabold text-3xl">200 mph</h1>
            <p>Top Speed+</p>
          </div>
          <div className="flex flex-col p-4 gap-2 text-center min800:hidden">
            <h1 className="font-extrabold text-3xl">1,020 HP</h1>
            <p>Peak Power</p>
          </div>
          <button className=" border-white border-4  px-10 py-4 rounded-full uppercase ">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
export default Model;
