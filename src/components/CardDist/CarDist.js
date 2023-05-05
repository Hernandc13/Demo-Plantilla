function CardDist() {
  return (
    <div className="contenedorPrincipal">
      <section className="hero-section">
        <div className="card-grid">
          <a className="cardDist" href="#">
            <div className="card__background">
              <img src={listCardDist[0].imagen} alt="" />
            </div>
            <div className="card__content">
              <p className="card__category">{listCardDist[0].title}</p>
              <h3 className="card__heading">{listCardDist[0].texto}</h3>
            </div>
          </a>
          <a className="cardDist" href="#">
            <div className="card__background">
              <img src={listCardDist[1].imagen} alt="" />
            </div>
            <div className="card__content">
              <p className="card__category">{listCardDist[1].title}</p>
              <h3 className="card__heading">{listCardDist[1].texto}</h3>
            </div>
          </a>
          <a className="cardDist" href="#">
            <div className="card__background">
              <img src={listCardDist[2].imagen} alt="" />
            </div>
            <div className="card__content">
              <p className="card__category">{listCardDist[2].title}</p>
              <h3 className="card__heading">{listCardDist[2].texto}</h3>
            </div>
          </a>
          <a className="cardDist" href="#">
            <div className="card__background">
              <img src={listCardDist[3].imagen} alt="" />
            </div>
            <div className="card__content">
              <p className="card__category">{listCardDist[3].title}</p>
              <h3 className="card__heading">{listCardDist[3].texto}</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
const rootElementCardDist = document.querySelector(":root");

rootElementCardDist.style.setProperty(
  "--color-TituloCardDist",
  CardDistStyles.colorTextoTitulo
);
rootElementCardDist.style.setProperty(
  "--color-SubtitutoCardDist",
  CardDistStyles.colorTextoSubtitulo
);
