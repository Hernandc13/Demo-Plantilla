import "./App.css";
import React from "react";
import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import General from "./componentes/General";
import AcordeonDos from "./componentes/AcordeonDos/AcordeonDos";
import Ahorcado from "./componentes/Ahorcado";
import CardFlip from "./componentes/CardFlip/CardFlip";
import CardHoverDos from "./componentes/CardHoverDos/CardHoverDos";
import CardHoverUno from "./componentes/CardHoverUno/CardHoverUno";
import CardZoom from "./componentes/CardZoom/CardZoom";
import Carrusel from "./componentes/Carrusel";
import NuevoCurso from "./componentes/NuevoCurso/NuevoCurso";

import dashboardwhite from "./assets/dashboardwhite.svg";
import acordeonwhite from "./assets/acordeonwhite.svg";
import arrowwhite from "./assets/arrowwhite.svg";
import gamepatwhite from "./assets/gamepatwhite.svg";
import idCardRegular from './assets/id-card-regular 1.svg'
import sliderwhite from './assets/sliderwhite.svg'
import plusSolid from './assets/plus-solid.svg'

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleArrow = (listElement) => {
    listElement.classList.toggle("arrow");

    let height = 0;
    let menu = listElement.nextElementSibling;
    if (menu.clientHeight === 0) {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  };

  const handleListClick = () => {
    const listElements = document.querySelectorAll(".list__button--click");
    listElements.forEach((listElement) => {
      listElement.addEventListener("click", () => toggleArrow(listElement));
    });
  };

  const handleSidebarClick = () => {
    const wrapper = document.getElementById("wrapper");
    if (isActive) {
      wrapper.classList.add("widthZero");
    } else {
      wrapper.classList.remove("widthZero");
    }
    setIsActive(!isActive);
  };

  return (
    <Router>
      <div className="wrapper widthZero" id="wrapper">
        <input type="checkbox" id="btn" onClick={handleSidebarClick} />
        <label htmlFor="btn" className="menu-btn">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </label>

        <nav className="nav" id="sidebar">
          <div className="nav-header">
            <img
              src="https://www.subitus.com/wp-content/uploads/2019/07/isotipo_subitus_blanco_fondotrans_150x150-01-150x150.png"
              alt=""
            />
            Subitus Mx
          </div>
          <ul className="list">
            <li className="list__item">
              <div className="list__button">
                <img src={dashboardwhite} className="list__img" />
                <a href="#" className="nav__link">
                  Inicio
                </a>
              </div>
            </li>

            <li className="list__item list__item--click">
              <div
                className="list__button list__button--click"
                onClick={handleListClick}
              >
                <img src={gamepatwhite} className="list__img" />
                <a className="nav__link">Juegos</a>
                <img src={arrowwhite} className="list__arrow" />
              </div>

              <ul className="list__show">
                <li className="list__inside">
                  <Link className="nav__link nav__link--inside" to="/Ahorcado">
                    Ahorcado
                  </Link>
                </li>
              </ul>
            </li>

             <li className="list__item list__item--click">
              <div
                className="list__button list__button--click"
                onClick={handleListClick}
              >
                <img src={sliderwhite} className="list__img" />
                <a className="nav__link">Imagenes</a>
                <img src={arrowwhite} className="list__arrow" />
              </div>

              <ul className="list__show">
                <li className="list__inside">
                  <Link className="nav__link nav__link--inside" to="/Carrusel">
                    Carrusel
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list__item list__item--click">
              <div
                className="list__button list__button--click"
                onClick={handleListClick}
              >
                <img src={idCardRegular} className="list__img" />
                <a className="nav__link">Cards</a>
                <img src={arrowwhite} className="list__arrow" />
              </div>

              <ul className="list__show">
                <li className="list__inside">
                  <Link
                    className="nav__link nav__link--inside"
                    to="/CardHoverUno"
                  >
                    Card Hover
                  </Link>
                </li>
                <li className="list__inside">
                  <Link
                    className="nav__link nav__link--inside"
                    to="/CardHoverDos"
                  >
                    Card Hover 2
                  </Link>
                </li>
                <li className="list__inside">
                  <Link className="nav__link nav__link--inside" to="/CardZoom">
                    Card Zoom
                  </Link>
                </li>
                <li className="list__inside">
                  <Link className="nav__link nav__link--inside" to="/CardFlip">
                    Card Flip
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list__item list__item--click">
              <div
                className="list__button list__button--click"
                onClick={handleListClick}
              >
                <img src={acordeonwhite} className="list__img" />
                <a className="nav__link">Acordeon</a>
                <img src={arrowwhite} className="list__arrow" />
              </div>

              <ul className="list__show">
                <li className="list__inside">
                  <Link
                    className="nav__link nav__link--inside"
                    to="/AcordeonDos"
                  >
                    Acordeon
                  </Link>
                </li>
              </ul>
            </li>
             <li className="list__item">
              <div className="list__button">
                <img src={plusSolid} className="list__img" />
                <Link className="nav__link nav__link--inside" to="/NuevoCurso">
                  Nuevo curso
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/Ahorcado" element={<Ahorcado/>} />
        <Route path="/CardFlip" element={<CardFlip/>} />
        <Route path="/CardHoverDos" element={<CardHoverDos/>} />
        <Route path="/CardHoverUno" element={<CardHoverUno/>} />
        <Route path="/CardZoom" element={<CardZoom/>} />
        <Route path="/Carrusel" element={<Carrusel/>} />
        <Route path="/NuevoCurso" element={<NuevoCurso/>} />
        <Route path="/AcordeonDos" element={<AcordeonDos />} />
      </Routes>
    </Router>
  );
}

export default App;
