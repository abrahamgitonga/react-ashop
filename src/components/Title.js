import React from "react";

export default function({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-title my-2 text-center">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
