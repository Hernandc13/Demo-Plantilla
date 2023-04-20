function CardDist() {
    return (
        <div className="contenedorPrincipal">
          
          <section class="hero-section" >
  <div class="card-grid">
    <a class="cardDist" href="#">
      <div class="card__background">
      <img src={listCardDist[0].imagen} alt="" />
      </div>
      <div class="card__content">
        <p class="card__category">{listCardDist[0].title}</p>
        <h3 class="card__heading">{listCardDist[0].texto}</h3>
      </div>
    </a>
    <a class="cardDist" href="#">
      <div class="card__background">
      <img src={listCardDist[1].imagen} alt="" />
      </div>
      <div class="card__content">
        <p class="card__category">{listCardDist[1].title}</p>
        <h3 class="card__heading">{listCardDist[1].texto}</h3>
      </div>
    </a>
    <a class="cardDist" href="#">
      <div class="card__background">
      <img src={listCardDist[2].imagen} alt="" />
      </div>
      <div class="card__content">
        <p class="card__category">{listCardDist[2].title}</p>
        <h3 class="card__heading">{listCardDist[2].texto}</h3>
      </div>
    </a>
    <a class="cardDist" href="#">
      <div class="card__background">
      <img src={listCardDist[3].imagen} alt="" />
      </div>
      <div class="card__content">
        <p class="card__category">{listCardDist[3].title}</p>
        <h3 class="card__heading">{listCardDist[3].texto}</h3>
      </div>
    </a>

  </div>
</section>


        </div>

    );
  }