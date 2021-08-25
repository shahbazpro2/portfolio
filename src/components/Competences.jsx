import React from "react";
import skill from "../assets/images/skill.png";
import Bar from "./common/Bar";
import ListSkills from "./common/ListSkills";

const Competences = () => {
  return (
    <div className="bg-mud text-center py-24 relative">
      <div className="absolute ms:right-60 right-24 top-0">
        <img src={skill} alt="skill" />
      </div>
      <h4 className="md:mt-3  mt-5 mb-3 font-bold text-3xl">Compétences</h4>
      <Bar />
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ListSkills
                arr={[
                  { title: "PHP", value: 4 },
                  { title: "JavaScript", value: 3 },
                  { title: "HTML", value: 4 },
                  { title: "CSS", value: 3 },
                  { title: "Java", value: 2 },
                  { title: "SQL", value: 3 },
                ]}
                title="Languages"
              />
            </div>
            <div className="col-md-4">
              <ListSkills
                arr={[
                  { title: "Symfony", value: 4 },
                  { title: "Jquery", value: 3 },
                  { title: "Bootstrap", value: 2 },
                  { title: "React", value: 2 },
                ]}
                title="Frameworks"
              />
              <ListSkills
                arr={[
                  { title: "MySQL", value: 3 },
                  { title: "MongoDB", value: 1 },
                ]}
                title="Databases"
              />
            </div>
            <div className="col-md-4">
              <ListSkills
                arr={[
                  { title: "REST", value: 4 },
                  { title: "API", value: 4 },
                ]}
                title="Architecture"
              />
              <ListSkills
                arr={[
                  { title: "Git", value: 4 },
                  { title: "GitHub", value: 3 },
                  { title: "Gitlab", value: 3 },
                ]}
                title="Version Control"
              />
              <ListSkills
                arr={[{ title: "Docker", value: 3 }]}
                title="Containerization"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
