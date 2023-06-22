function Acordeon() {
  return (
    <div className="contenedorPrincipal">
      <div className="contenedor-principal">
        <div className="accordion-wrapper">
          <div className="accordion">
            <input
              className="inputAcordeon"
              type="radio"
              name="radio-a"
              id="check1"
              checked
            />
            <label className="accordion-label" for="check1">
              {initialListAcordeonDos[0].title}
            </label>
            <div className="accordion-content">
              <p>{initialListAcordeonDos[0].texto} &#128522;</p>
            </div>
          </div>
          <div className="accordion">
            <input
              className="inputAcordeon"
              type="radio"
              name="radio-a"
              id="check2"
            />
            <label className="accordion-label" for="check2">
              {initialListAcordeonDos[1].title}
            </label>
            <div className="accordion-content">
              <p>{initialListAcordeonDos[1].texto}</p>
            </div>
          </div>
          <div className="accordion">
            <input
              className="inputAcordeon"
              type="radio"
              name="radio-a"
              id="check3"
            />
            <label className="accordion-label" for="check3">
              {initialListAcordeonDos[2].title}
            </label>
            <div className="accordion-content">
              <p>{initialListAcordeonDos[2].texto}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElementAcordeonN = document.querySelector(":root");

rootElementAcordeonN.style.setProperty(
  "--color-TituloAcordeon",
  AcordeonNStyles.colorFondoAcordeonStyle
);
rootElementAcordeonN.style.setProperty(
  "--color-PrincpalAcordeon",
  AcordeonNStyles.colorPrincipalAcordeonStyle
);
rootElementAcordeonN.style.setProperty(
  "--color-FondoTetxoAcordeon",
  AcordeonNStyles.colorFondoTetxoAcordeonStyle
);
