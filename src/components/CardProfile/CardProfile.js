function CardProfile() {
    return (
        <div className="contenedorPrincipal">
         <div class="containerProfile">
      <div class="cardProfile">
        <div class="img">
          <img src={listCardProfile[0].imagen} />
        </div>
        <div class="top-text">
          <div class="name">{listCardProfile[0].name}</div>
          <p>{listCardProfile[0].profession}</p>
        </div>
        <div class="bottom-text">
          <div class="text">{listCardProfile[0].texto}</div>
          <div class="btn">
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div class="cardProfile">
        <div class="img">
          <img src={listCardProfile[1].imagen} />
        </div>
        <div class="top-text">
          <div class="name">{listCardProfile[1].name}</div>
          <p>{listCardProfile[1].profession}</p>
        </div>
        <div class="bottom-text">
          <div class="text">{listCardProfile[1].texto}</div>
          <div class="btn">
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div class="cardProfile">
        <div class="img">
          <img src={listCardProfile[2].imagen} />
        </div>
        <div class="top-text">
          <div class="name">{listCardProfile[2].name}</div>
          <p>{listCardProfile[2].profession}</p>
        </div>
        <div class="bottom-text">
          <div class="text">{listCardProfile[2].texto}</div>
          <div class="btn">
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
 
    </div>
        </div>
    );
}


const rootElementCardProfile = document.querySelector(":root");

rootElementCardProfile.style.setProperty(
  "--color-BackgroundCardProfile",
  CardProfilStyles.colorBackgroundCardProfile
);
rootElementCardProfile.style.setProperty(
  "--color-PrincipalCardProfile",
  CardProfilStyles.colorPrincipalCardProfile
);
rootElementCardProfile.style.setProperty("--color-TextoCardProfession", CardProfilStyles.colorTextoProfession);

rootElementCardProfile.style.setProperty("--color-TituloCardProfile", CardProfilStyles.colorTituloCardProfile);



