function CardUno() {
  const [listCardsUno, setListCardsUno] = React.useState(initiallistImagesCard);

  const renderCardsUno = listCardsUno.map((card) => {
    return (
      <div className="cardn" key={card.id}>
        <div className="image">
          <img src={card.imagen} alt="" />
        </div>
        <h3>{card.title}</h3>
        <p>{card.texto}</p>
      </div>
    );
  });

  return (
    <div className="contenedorPrincipal">
      <div className="contenedor-principal">
        <section className="containerCard">
          {renderCardsUno}
        </section>
      </div>
    </div>
  );
}

const rootElementCard = document.querySelector(":root");

rootElementCard.style.setProperty(
  "--color-BackgroundCard",
  CardStyles.colorBackgroundCard
);
rootElementCard.style.setProperty(
  "--color-PrincipalCard",
  CardStyles.colorPrincipalCard
);
rootElementCard.style.setProperty(
  "--color-TextoCard",
  CardStyles.colorTextoCard
);

rootElementCard.style.setProperty(
  "--color-TituloCard",
  CardStyles.colorTituloCard
);
