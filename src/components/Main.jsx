import React from "react";
import profile from "../assets/images/profil.png";
import arrow_down from "../assets/images/arrow-down.png";

const Main = () => {
  return (
    <div className="flex items-center justify-center main">
      <div className="text-center mt-24">
        <h1>Stéphane Rathgeber</h1>
        <div className="mt-4">
          <span className="light-text">Teach Lead Symfony</span>
        </div>
        <div className="flex justify-center mt-14">
          <img src={profile} alt="profile" />
        </div>
        <div className="flex justify-center mt-24">
          <img src={arrow_down} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Main;
