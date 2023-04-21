function CardFlip() {
  return (
    <div className="contenedorPrincipal">
      <div className="contentFlip">
        <div class="wrapperFlip">
          <div class="cardFlip front-face">
            <img src={listCardFlip[0].imagen} />
          </div>
          <div class="cardFlip back-face">
            <img src={listCardFlip[0].imagen} />
            <div class="info">
              <div class="titleFlip">{listCardFlip[0].title} </div>
              <p>{listCardFlip[0].texto} </p>
            </div>
            <ul>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </ul>
          </div>
        </div>
        <div class="wrapperFlip">
          <div class="cardFlip front-face">
            <img src={listCardFlip[1].imagen} />
          </div>
          <div class="cardFlip back-face">
            <img src={listCardFlip[1].imagen} />
            <div class="info">
              <div class="titleFlip">{listCardFlip[1].title} </div>
              <p>{listCardFlip[1].texto} </p>
            </div>
            <ul>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </ul>
          </div>
        </div>
        <div class="wrapperFlip">
          <div class="cardFlip front-face">
            <img src={listCardFlip[2].imagen} />
          </div>
          <div class="cardFlip back-face">
            <img src={listCardFlip[2].imagen} />
            <div class="info">
              <div class="titleFlip">{listCardFlip[2].title} </div>
              <p>{listCardFlip[2].texto} </p>
            </div>
            <ul>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
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



