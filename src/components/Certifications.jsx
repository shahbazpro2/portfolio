import React from "react";
import Bar from "./common/Bar";
import open from "../assets/images/openclassrooms.png";
import arrowRight from "../assets/images/arrow-right.png";

const Certifications = () => {
  return (
    <div className="bg-gunmetal text-center py-24 relative text-white">
      <h4 className="my-3 font-bold text-3xl">Certifications</h4>
      <Bar />
      <div className="container mt-24">
        <div className="row">
          <div className="col-md-5 ">
            <div className="d-flex justify-content-end mb-3">
              <img
                className="align-self-center me-5"
                src={open}
                alt="open classrooms"
              />
              <img
                className="align-self-center pt-20 hidden md:block"
                src={arrowRight}
                alt="arrow right"
              />
            </div>
          </div>
          <div className="col-md-7 text-left px-5">
            <h6 className="py-2">
              - Optimisez votre deploiement en creant des conteneurs docker
              <span className="cyan-clr"> {"// 2019"}</span>
            </h6>
            <h6 className="py-2">
              - Prenez en main Bootstrap
              <span className="cyan-clr"> {"// 2015"}</span>
            </h6>
            <h6 className="py-2">
              - Apprenez a career votre site web avec HTML5 et CSS3
              <span className="cyan-clr"> {"// 2014"}</span>
            </h6>
            <h6 className="py-2">
              - Gerez votre code avec Git et Github
              <span className="cyan-clr"> {"// 2014"}</span>
            </h6>
            <h6 className="py-2">
              - Integrateur Web
              <span className="cyan-clr"> {"// 2014"}</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
