import React from "react";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="bg-gunmetal">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-3 md:text-left text-center">
            <h6 className="text-white mb-0">
              &copy; 2021 Stephane Rathgeber -{" "}
              <span className="cyan-clr">Mentions legales</span>
            </h6>
          </div>
          <div className="col-md-6 py-3">
            <div className="d-flex social md:justify-end justify-center">
              <img
                src={instagram}
                className="me-4 align-self-center"
                alt="facebook"
              />
              <img
                src={facebook}
                className="me-4 align-self-center"
                alt="facebook"
              />
              <img src={twitter} className="align-self-center" alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
