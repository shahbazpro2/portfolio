import React from "react";
import cap from "../assets/images/graduation.png";
import Bar from "./common/Bar";

const Formations = () => {
  return (
    <div className="bg-mud text-center py-24 relative">
      <div className="absolute md:right-60 right-5 md:top-30">
        <img src={cap} alt="skill" />
      </div>
      <h4 className="my-3 font-bold text-3xl">Formations</h4>
      <Bar />
      <div className="mt-5 px-3">
        <div className="d-flex justify-content-center">
          <h5 className="font-bold me-1">BTS IRIS</h5>- Lycee Blaise Pascal
        </div>
        <div className="mt-2">
          <h6 className="light-text">2003 - 2005</h6>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-center">
            <h5 className="font-bold me-1">
              BAC STI Genie Electrotechnique{" "}
              <span style={{ fontWeight: 400 }}>- Lycee Louis Marchal</span>
            </h5>
          </div>
          <div className="mt-2">
            <h6 className="light-text">2000 - 2003</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
