function LineaDeTiempo() {
  return (
    <div className="contenedorPrincipal">
      <div className="wrapperTiempo">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="titleTiempo">{listListaTiempo[0].title}</span>
              <span>{listListaTiempo[0].fecha}</span>
            </div>
            <p>{listListaTiempo[0].texto}</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- {listListaTiempo[0].footer}</i>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="titleTiempo">{listListaTiempo[1].title}</span>
              <span>{listListaTiempo[1].fecha}</span>
            </div>
            <p>{listListaTiempo[1].texto}</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- {listListaTiempo[1].footer}</i>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="titleTiempo">{listListaTiempo[2].title}</span>
              <span>{listListaTiempo[2].fecha}</span>
            </div>
            <p>{listListaTiempo[2].texto}</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- {listListaTiempo[2].footer}</i>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="titleTiempo">{listListaTiempo[3].title}</span>
              <span>{listListaTiempo[3].fecha}</span>
            </div>
            <p>{listListaTiempo[3].texto}</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- {listListaTiempo[3].footer}</i>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="titleTiempo">{listListaTiempo[4].title}</span>
              <span>{listListaTiempo[4].fecha}</span>
            </div>
            <p>{listListaTiempo[4].texto}</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- {listListaTiempo[4].footer}</i>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="titleTiempo">{listListaTiempo[5].title}</span>
              <span>{listListaTiempo[5].fecha}</span>
            </div>
            <p>{listListaTiempo[5].texto}</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- {listListaTiempo[5].footer}</i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const rootElementListadeTiempo = document.querySelector(":root");

rootElementListadeTiempo.style.setProperty(
  "--color-FondoLineTime",
  ListaDeTiempoStyles.colorFondoLineTime
);
rootElementListadeTiempo.style.setProperty(
  "--color-GeneralLineTime",
  ListaDeTiempoStyles.colorGeneralLineTime
);
rootElementListadeTiempo.style.setProperty(
  "--color-TextoLineTime",
  ListaDeTiempoStyles.colorTextoLineTime
);

rootElementListadeTiempo.style.setProperty(
  "--color-TituloLineTime",
  ListaDeTiempoStyles.colorTitleLineTime
);
