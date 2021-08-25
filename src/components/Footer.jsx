import React from "react";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="bg-gunmetal">
      <div className="container">
        <div className="d-flex py-3 justify-content-between">
          <h6 className="text-white mb-0">
            &copy; 2021 Stephane Rathgeber -{" "}
            <span className="cyan-clr">Mentions legales</span>
          </h6>
          <div className="d-flex social">
            <img src={instagram} className="me-4" alt="facebook" />
            <img src={facebook} className="me-4" alt="facebook" />
            <img src={twitter} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
