import React from "react";
import Model from "./Model";

const PRODS = [
  {
    id: "model-3",
    title: "model 3",
  },
  {
    id: "model-x",
    title: "model x",
  },
  {
    id: "model-y",
    title: "model y",
  },
  {
    id: "solar-roof",
    title: "solar roof",
  },
  {
    id: "solar-panel",
    title: "solar panel",
  },
];

function Models() {
  return (
    <>
      {PRODS.map((i) => (
        <Model key={i.id} id={i.id} title={i.title} />
      ))}
    </>
  );
}

export default Models;
