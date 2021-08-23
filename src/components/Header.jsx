import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          Stéphane Rathgeber
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
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
