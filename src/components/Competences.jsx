import React from "react";
import skill from "../assets/images/skill.png";
import Bar from "./common/Bar";
import Dot from "./common/Dot";
import ListSkills from "./common/ListSkills";

const Competences = () => {
  return (
    <div className="compet text-center py-24 relative">
      <div className="absolute right-60 top-0">
        <img src={skill} alt="skill" />
      </div>
      <h4 className="my-3 font-bold text-3xl">Compétences</h4>
      <Bar />
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ListSkills
                arr={[
                  { title: "PHP", value: 4 },
                  { title: "JavaScript", value: 3 },
                ]}
                title="Languages"
              />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
