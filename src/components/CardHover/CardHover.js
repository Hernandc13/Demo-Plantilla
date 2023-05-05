function CardHover() {
  return (
    <div className="contenedorPrincipal">
      <ul className="cardsw">
        <li>
          <a href="" className="cardw">
            <img src={listCardHover[0].imagen} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={listCardHover[0].imagen} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{listCardHover[0].name}</h3>
                  <span className="card__status">{listCardHover[0].time}</span>
                </div>
              </div>
              <p className="card__description">{listCardHover[0].texto}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="cardw">
            <img src={listCardHover[1].imagen} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={listCardHover[1].imagen} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{listCardHover[1].name}</h3>
                  <span className="card__status">{listCardHover[1].time}</span>
                </div>
              </div>
              <p className="card__description">{listCardHover[1].texto}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="cardw">
            <img src={listCardHover[2].imagen} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={listCardHover[2].imagen} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{listCardHover[2].name}</h3>
                  <span className="card__status">{listCardHover[2].time}</span>
                </div>
              </div>
              <p className="card__description">{listCardHover[2].texto}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="cardw">
            <img src={listCardHover[3].imagen} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={listCardHover[3].imagen} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{listCardHover[3].name}</h3>
                  <span className="card__status">{listCardHover[3].time}</span>
                </div>
              </div>
              <p className="card__description">{listCardHover[3].texto}</p>
            </div>
          </a>
        </li>
      </ul>
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
