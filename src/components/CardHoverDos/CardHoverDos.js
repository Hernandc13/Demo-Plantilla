function CardHoverDos({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listCardHoverDos, setListHoverDos] = 
  useLocalStorage("objectHoverDos", initialListCardHover);
  const [flags, setFlags] = useLocalStorage("flagsHoverDos", "");
  const [counterCardHoverDos, setCounterCardHoverDos] = React.useState(0);

  const renderCardsHoverDos = listCardHoverDos.map((card) => {
    const [active, setActive] = React.useState(true);

    const clicCardHoverDos = (index) => {
      const nextListCardHoverDos = listCardHoverDos.map((c, i) => {
        if (i === index) {
          return {
            ...c,
            flag: true,
          };
        } else {
          return c;
        }
      });

      const nextFlags = nextListCardHoverDos.filter((i) => i.flag == true);

      if (nextFlags.length === listCardHoverDos.length) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }
      if (nextFlags.length == 1) {
        enviarDatos2(true, i);
      }

      setFlags(nextFlags);
      setActive(!active);
      setListHoverDos(nextListCardHoverDos);

      const newCounterCardHoverDos = counterCardHoverDos + 1;
      enviarDatos3(newCounterCardHoverDos, i);
      setCounterCardHoverDos(newCounterCardHoverDos);
    };
    return (
      <li key={card.id} onClick={() => clicCardHoverDos(card.id)}>
        <div className="cardw">
          <img src={card.imagen} className="card__image" alt="" />
          <div
            className={
              active ? "card__overlay" : "card__overlay card__overlay_active"
            }
          >
            <div
              className={
                active ? "card__header" : "card__header card__header_active"
              }
            >
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={card.imagen} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{card.name}</h3>
                <span className="card__status">{card.time}</span>
              </div>
            </div>
            <p className="card__description">{card.texto}</p>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="contenedorPrincipal">
      <ul className="cardsw">{renderCardsHoverDos}</ul>
      <p className="contadorCarrusel">Cards vistas: {flags.length} / {listCardHoverDos.length}</p>
    </div>
  );
}

const rootElementCardHover2 = document.querySelector(":root");

rootElementCardHover2.style.setProperty(
  "--color-BackgroundCardHover2",
  CardHover2Styles.colorBackgroundCardHover2
);
rootElementCardHover2.style.setProperty(
  "--color-TituloCardHover2",
  CardHover2Styles.colorTituloCardHover2
);
rootElementCardHover2.style.setProperty(
  "--color-TextoCardHover2",
  CardHover2Styles.colorTextoCardHover2
);
