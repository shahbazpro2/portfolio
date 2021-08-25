import React from "react";
import tree from "../assets/images/tree.png";
import Bar from "./common/Bar";
import ExpTree from "./common/ExpTree";

const Experiences = () => {
  return (
    <div className="experience text-center py-24 relative">
      <div className="absolute left-60 bottom-0">
        <img src={tree} alt="tree" />
      </div>
      <h4 className="my-3 font-bold text-3xl"> Expériences</h4>
      <Bar />
      <div className="mt-24">
        <div className="container">
          <ExpTree
            data={{
              title1: "Expert API Platform",
              date: "Fevier 2021 - Avril 2021",
              location: "Paris,France",
              title2: "Theodo - M33 / Theodo",
              explanation: `Exposition de nouvelle ressource sur l'API existante avec une
              synchronisation des donnees legacy. Le but etant de migrer le prijet
              sur une structure API / React et quitter le code legacy`,
            }}
          />
          <ExpTree
            data={{
              title1: "Developpeur Symfony",
              date: "Aout 2020 - Fevier 2021",
              location: "Paris,France",
              title2: "ekWateur",
              explanation: `Exposition de nouvelle ressource sur l'API existante avec une
            synchronisation des donnees legacy. Le but etant de migrer le prijet
            sur une structure API / React et quitter le code legacy`,
            }}
          />
          <ExpTree
            data={{
              title1: "Developpeur Symfony",
              date: "mars 2020 - Mars 2020",
              location: "Paris,France",
              title2: "DIMENSION 4",
              explanation: `Exposition de nouvelle ressource sur l'API existante avec une
            synchronisation des donnees legacy. Le but etant de migrer le prijet
            sur une structure API / React et quitter le code legacy`,
            }}
          />
          <ExpTree
            data={{
              title1: "Team Lead/Lead Dev",
              date: "Juillet 2014 - Juillet 2020",
              location: "Puteaux,France",
              title2: "Manymore",
              explanation: `Exposition de nouvelle ressource sur l'API existante avec une
            synchronisation des donnees legacy. Le but etant de migrer le prijet
            sur une structure API / React et quitter le code legacy`,
            }}
          />
          <ExpTree
            data={{
              title1: "Developpeur Symfony",
              date: "Novembre 2008 - juin 2014",
              location: "La Garenne-Colombes, France",
              title2: "ORCA FORMATION",
              explanation: `Exposition de nouvelle ressource sur l'API existante avec une
            synchronisation des donnees legacy. Le but etant de migrer le prijet
            sur une structure API / React et quitter le code legacy`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
