import classNames from "classnames";
import React, { useState } from "react";
import close from "../assets/images/burger-close.png";
import open from "../assets/images/burger-open.png";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-4">
      <div
        className={classNames("side-menu px-3 pt-4", {
          block: isMenu,
          hidden: !isMenu,
        })}
      >
        <div className="relative">
          <img
            onClick={() => setIsMenu(!isMenu)}
            className="right-2 absolute top-0 cursor-pointer"
            src={close}
            alt="menu close"
          />
        </div>
        <ul class={"nav flex-column z-10 hidden"}>
          <li className="nav-item px-2">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="/"
            >
              A propos
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-white" href="/">
              Compétences
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-white" href="/">
              Expériences
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-white" href="/">
              Formations
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-white" href="/">
              Certifications
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <a className="navbar-brand" href="/">
          Stéphane Rathgeber
        </a>
        <button
          onClick={() => setIsMenu(!isMenu)}
          type="button"
          className="lg:hidden block"
        >
          <img src={open} alt="open" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                A propos
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-white" href="/">
                Compétences
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-white" href="/">
                Expériences
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-white" href="/">
                Formations
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-white" href="/">
                Certifications
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link btn btn-primary text-white px-4" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
