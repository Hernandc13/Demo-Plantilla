function CardHoverUno({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listCardsHoverUno, setListCardsHoverUno] = useLocalStorage(
    "objectCardHoverUno",
    initiallistCardDist
  );
  const [flags, setFlags] = useLocalStorage("arrayFlagsHoverUno", "");
  const [counterCardHoverUno, setCounterCardHoverUno] = React.useState(0);

  const renderCardsHoverUno = listCardsHoverUno.map((card) => {
    const [active, setActive] = React.useState(true);

    const clicCardHoverUno = (index) => {
      const nextListCardsHoverUno = listCardsHoverUno.map((c, i) => {
        if (i === index) {
          return {
            ...c,
            flag: true,
          };
        } else {
          return c;
        }
      });
      const nextFlags = nextListCardsHoverUno.filter((i) => i.flag == true);

      if (nextFlags.length === listCardsHoverUno.length) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }
      if (nextFlags.length == 1) {
        enviarDatos2(true, i);
      }

      setFlags(nextFlags);
      setListCardsHoverUno(nextListCardsHoverUno);
      setActive(!active);

      const newCounterCardHoverUno = counterCardHoverUno + 1;
      enviarDatos3(newCounterCardHoverUno, i);
      setCounterCardHoverUno(newCounterCardHoverUno);
    };
    return (
      <div
        className="cardDist"
        onClick={() => clicCardHoverUno(card.id)}
        key={card.id}
      >
        <div className="card__background">
          <img
            className={
              active
                ? "card__background__img"
                : "card__background__img filterNone"
            }
            src={card.imagen}
            alt=""
          />
        </div>
        <div className="card__content">
          <p className="card__category">{card.title}</p>
          <h3 className="card__heading">{card.texto}</h3>
        </div>
      </div>
    );
  });
  return (
    <div className="contenedorPrincipal">
      <section className="hero-section">
        <div className="card-grid">{renderCardsHoverUno}</div>
      </section>
      <p className="contadorCarrusel">
        Cards vistas: {flags.length} / {listCardsHoverUno.length}
      </p>
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
