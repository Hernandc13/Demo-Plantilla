function Acordeon() {
  return (
    <div className="contenedorPrincipal">
 <div className="contenedor-principal">
      <h1>Acordeon</h1>
      <div className="accordion-wrapper">
        <div className="accordion">
          <input type="radio" name="radio-a" id="check1" checked />
          <label className="accordion-label" for="check1">{listAcordeon[0].title}</label>
          <div className="accordion-content">
            <p>{listAcordeon[0].texto} &#128522;</p>
          </div>
        </div>
        <div className="accordion">
          <input type="radio" name="radio-a" id="check2" />
          <label className="accordion-label" for="check2">{listAcordeon[1].title}</label>
          <div className="accordion-content">
            <p>{listAcordeon[1].texto}</p>
          </div>
        </div>
        <div className="accordion">
          <input type="radio" name="radio-a" id="check3" />
          <label className="accordion-label" for="check3">{listAcordeon[2].title}</label>
          <div className="accordion-content">
            <p>{listAcordeon[2].texto}</p>
          </div>
        </div>
      </div>

    </div>
    </div>
   

  );
}


const rootElementAcordeonN = document.querySelector(":root");

rootElementAcordeonN.style.setProperty(
  "--FondoAcordeon",
  AcordeonNStyles.colorFondoAcordeonStyle
);
rootElementAcordeonN.style.setProperty(
  "--GeneralAcordeon",
  AcordeonNStyles.colorGeneralAcordeonStyle
);
rootElementAcordeonN.style.setProperty("--TextoAcordeon", AcordeonNStyles.colorTextoAcordeonStyle);

rootElementAcordeonN.style.setProperty("--TituloAcordeon", AcordeonNStyles.colorTitleAcordeonStyle);



