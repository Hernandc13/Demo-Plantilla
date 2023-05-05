function CardZoom() {
  return (
    <div className="contenedorPrincipal">
      <div className="containerZoom">
        <div
          className="cardZoom cardz0"
          style={{ backgroundImage: `url(${listCardZoom[0].imagen})` }}
        >
          <div className="border">
            <h2 className="h2CardZoom">{listCardZoom[0].name}</h2>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-dribbble" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div
          className="cardZoom cardz1"
          style={{ backgroundImage: `url(${listCardZoom[1].imagen})` }}
        >
          <div className="border">
            <h2 className="h2CardZoom">{listCardZoom[1].name}</h2>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-dribbble" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div
          className="cardZoom cardz2"
          style={{ backgroundImage: `url(${listCardZoom[2].imagen})` }}
        >
          <div className="border">
            <h2 className="h2CardZoom">{listCardZoom[2].name}</h2>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-dribbble" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const rootElementCardZoom = document.querySelector(":root");

rootElementCardZoom.style.setProperty(
  "--color-TextoTituloCardZoom",
  CardZoomStyles.colorTextoTituloCardZoom
);
rootElementCardZoom.style.setProperty(
  "--color-IconosCardZoom",
  CardZoomStyles.colorIconosCardZoom
);
