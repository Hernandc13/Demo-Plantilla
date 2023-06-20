function CardZoom() {
  const [listCardHoverDos, setListHoverDos] =
    React.useState(initialListCardZoom);

  const renderCardZoom = listCardHoverDos.map((card) => {
    const numero = card.id;
    const clase = `cardZoom cardz${numero}`;
    return (
      <div
        className={clase}
        style={{ backgroundImage: `url(${card.imagen})` }}
        key={card.id}
      >
        <div className="border">
          <h2 className="h2CardZoom">{card.name}</h2>
          <div className="icons">
            <i className="fa fa-codepen"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-dribbble"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="contenedorPrincipal">
      <div className="containerZoom">
        {renderCardZoom}
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
