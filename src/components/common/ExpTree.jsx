import React from "react";
import Dot from "./Dot";
import calender from "../../assets/images/calendar.png";
import location from "../../assets/images/placeholder.png";

const ExpTree = ({ data }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-6 br-right relative pt-5 text-center">
        <div className="absolute -right-2 top-13">
          <Dot />
        </div>
        <div className="exp-box text-right">
          <h6 className="font-bold">{data?.title1}</h6>
          <div className="mt-3">
            <div className="d-flex justify-end">
              <h6 className="light-text text-sm pe-2">{data?.date}</h6>
              <img className="w-3 h-4" src={calender} alt="calendar" />
            </div>
            <div className="d-flex justify-end">
              <h6 className="light-text text-sm pe-2">{data?.location}</h6>
              <img className="w-3 h-4" src={location} alt="calendar" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 ps-2 p-md-0 ps-0 br-left pt-5 text-center justify-content-center">
        <div className="exp-box text-left">
          <h6>{data?.title2}</h6>
          <h6 className="light-text text-sm">{data?.explanation}</h6>
        </div>
      </div>
    </div>
  );
};

export default ExpTree;
