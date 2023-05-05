function CardFlip() {
  return (
    <div className="contenedorPrincipal">
      <div className="contentFlip">
        <div className="wrapperFlip">
          <div className="cardFlip front-face">
            <img src={listCardFlip[0].imagen} />
          </div>
          <div className="cardFlip back-face">
            <img src={listCardFlip[0].imagen} />
            <div className="info">
              <div className="titleFlip">{listCardFlip[0].title} </div>
              <p>{listCardFlip[0].texto} </p>
            </div>
            <ul>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
        <div className="wrapperFlip">
          <div className="cardFlip front-face">
            <img src={listCardFlip[1].imagen} />
          </div>
          <div className="cardFlip back-face">
            <img src={listCardFlip[1].imagen} />
            <div className="info">
              <div className="titleFlip">{listCardFlip[1].title} </div>
              <p>{listCardFlip[1].texto} </p>
            </div>
            <ul>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
        <div className="wrapperFlip">
          <div className="cardFlip front-face">
            <img src={listCardFlip[2].imagen} />
          </div>
          <div className="cardFlip back-face">
            <img src={listCardFlip[2].imagen} />
            <div className="info">
              <div className="titleFlip">{listCardFlip[2].title} </div>
              <p>{listCardFlip[2].texto} </p>
            </div>
            <ul>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElementCardFlip = document.querySelector(":root");

rootElementCardFlip.style.setProperty(
  "--color-CardFlipGeneral",
  CardFlipStyles.colorGeneral
);
rootElementCardFlip.style.setProperty(
  "--color-FondoFlipCard",
  CardFlipStyles.colorFondoCard
);
