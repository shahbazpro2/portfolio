import React from "react";
import dev from "../assets/images/dev.png";
import Bar from "./common/Bar";

const About = () => {
  return (
    <div className="container about my-5">
      <div className="row">
        <div className="col-md-3 md:py-5 order-md-first order-last">
          <div className="h-96 flex text-center align-items-center">
            <img className="w-44 h-44 m-auto" src={dev} alt="computer" />
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="flex h-full justify-center align-items-center md:px-28">
            <div className="text-center">
              <span className="font-bold text-3xl">Qui suis-je ?</span>
              <Bar />
              <div className="mt-3">
                <p className="text-center">
                  Développeur PHP depuis plus de 10 ans et développeur Symfony
                  depuis sa version 1.3, j'ai eu l'occasion de travailler avec
                  de grandes sociétés (Renault, Accor, My Money Bank, AXA,
                  Cardif, Maif). <br />
                  <br />
                  J'ai accompagné et fait monter en compétence, par mon
                  expertise, plusieurs dizaines de développeurs.
                  <br />
                  <br /> Je suis capable de commencer une application "from
                  scratch" ou d'en reprendre une existante pour la faire
                  évoluer. Je peux également mettre en place un système de
                  déploiement continu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
