import React from "react";

const RatingDot = ({ value }) => {
  const getDot = () => {
    let arr = [];
    for (let i = 1; i <= 4; i++) {
      if (i > value) {
        arr.push(<div className="dot mx-1 bg-gray"></div>);
      } else {
        arr.push(<div className="dot mx-1"></div>);
      }
    }
    return arr;
  };
  return <div className="d-flex">{getDot().map((dot) => dot)}</div>;
};

export default RatingDot;
