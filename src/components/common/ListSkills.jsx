import React from "react";
import Dot from "./Dot";

const ListSkills = ({ title, arr }) => {
  return (
    <div className="row">
      <div className="col-4">
        <small className="cyan-clr">{title}</small>
      </div>
      <div className="col-8 pt-1">
        {arr.map((a, index) => {
          return (
            <div key={index} className="row mb-4">
              <div className="col-6 text-left">
                <h6 className="font-bold mb-0 mb-0">{a.title}</h6>
              </div>
              <div className="col-6">
                <Dot value={a.value} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSkills;
