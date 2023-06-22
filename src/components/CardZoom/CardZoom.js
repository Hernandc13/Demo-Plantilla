function CardZoom({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listCardZoom, setListCardZoom] = useLocalStorage(
    "objectCardZoom",
    initialListCardZoom
  );
  const [flags, setFlags] = useLocalStorage("flagsHoverDos", "");
  const [counterCardZoom, setCounterCardZoom] = React.useState(0);

  const renderCardZoom = listCardZoom.map((card) => {
    const [active, setActive] = React.useState(true);

    const clicCardZoom = (index) => {
      const nextListCardZoom = listCardZoom.map((c, i) => {
        if (i === index) {
          return {
            ...c,
            flag: true,
          };
        } else {
          return c;
        }
      });

      const nextFlags = nextListCardZoom.filter((i) => i.flag == true);

      if (nextFlags.length === listCardZoom.length) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }
      if (nextFlags.length == 1) {
        enviarDatos2(true, i);
      }

      setFlags(nextFlags);
      setActive(!active);
      setListCardZoom(nextListCardZoom);

      const newCounterCardZoom = counterCardZoom + 1;
      enviarDatos3(newCounterCardZoom, i);
      setCounterCardZoom(newCounterCardZoom);
    };

    return (
      <div
        className={active ? "cardZoom cardz" : "cardZoom cardz cardzHover"}
        style={{ backgroundImage: `url(${card.imagen})` }}
        key={card.id}
        onClick={() => clicCardZoom(card.id)}
      >
        <div className="border">
          <h2 className={active ? "h2CardZoom" : "h2CardZoom cardzOpacity"}>
            {card.name}
          </h2>
          <div className="icons">
            <i
              className={
                active ? "fa fa-codepen" : "fa fa-codepen cardzOpacity"
              }
            ></i>
            <i
              className={
                active ? "fa fa-instagram" : "fa fa-instagram cardzOpacity"
              }
            ></i>
            <i
              className={
                active ? "fa fa-dribbble" : "fa fa-dribbble cardzOpacity"
              }
            ></i>
            <i
              className={
                active ? "fa fa-twitter" : "fa fa-twitter cardzOpacity"
              }
            ></i>
            <i
              className={
                active ? "fa fa-facebook" : "fa fa-facebook cardzOpacity"
              }
            ></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="contenedorPrincipal">
      <div className="containerZoom">{renderCardZoom}</div>
      <p className="contadorAvance">Cards vistas: {flags.length} / {listCardZoom.length}</p>
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
