function CardZoom() {
    return (
        <div className="contenedorPrincipal">
          

<div class="containerZoom">
  <div class="cardZoom cardz0" style={{backgroundImage: `url(${listCardZoom[0].imagen})` }}>
    <div class="border">
      <h2>{listCardZoom[0].name}</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="cardZoom cardz1" style={{backgroundImage: `url(${listCardZoom[1].imagen})` }}>
    <div class="border">
    <h2>{listCardZoom[1].name}</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="cardZoom cardz2" style={{backgroundImage: `url(${listCardZoom[2].imagen})` }}>
    <div class="border">
    <h2>{listCardZoom[2].name}</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>
        

        </div>

    );
  }
