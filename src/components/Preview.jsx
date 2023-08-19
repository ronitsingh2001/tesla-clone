import React from "react";

function Preview() {
  return (
    <section
      id="model-s"
      className="flex justify-center items-center w-[100vw] h-[90vh]"
    >
      <div className="flex flex-col justify-between h-[60%]">
        <div className="flex-flex-col text-center">
          <h1 className="font-semibold text-5xl text-black capitalize">
            model s
          </h1>
          <p className=" capitalize pt-2">
            order online for{" "}
            <span className="underline underline-offset-4">
              touchless delivery
            </span>
          </p>
        </div>
        <div className="flex  gap-10  font-medium min800:flex-col ">
          <button className="uppercase bg-[#56575a] py-3 px-8 rounded-full  text-white">
            custom order
          </button>
          <button className="bg-[#ededec] py-3 px-8 rounded-full uppercase">
            Existing inventory
          </button>
        </div>
      </div>
    </section>
  );
}
export default Preview;
