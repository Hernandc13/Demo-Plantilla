function LineaDeTiempo() {
    return (
        <div className="contenedorPrincipal">
             <div class="wrapperTiempo">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="titleTiempo">{listListaTiempo[0].title}</span>
          <span>{listListaTiempo[0].fecha}</span>
        </div>
        <p>{listListaTiempo[0].texto}</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- {listListaTiempo[0].footer}</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
    <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="titleTiempo">{listListaTiempo[1].title}</span>
          <span>{listListaTiempo[1].fecha}</span>
        </div>
        <p>{listListaTiempo[1].texto}</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- {listListaTiempo[1].footer}</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
    <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="titleTiempo">{listListaTiempo[2].title}</span>
          <span>{listListaTiempo[2].fecha}</span>
        </div>
        <p>{listListaTiempo[2].texto}</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- {listListaTiempo[2].footer}</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
    <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="titleTiempo">{listListaTiempo[3].title}</span>
          <span>{listListaTiempo[3].fecha}</span>
        </div>
        <p>{listListaTiempo[3].texto}</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- {listListaTiempo[3].footer}</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
    <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="titleTiempo">{listListaTiempo[4].title}</span>
          <span>{listListaTiempo[4].fecha}</span>
        </div>
        <p>{listListaTiempo[4].texto}</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- {listListaTiempo[4].footer}</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
    <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="titleTiempo">{listListaTiempo[5].title}</span>
          <span>{listListaTiempo[5].fecha}</span>
        </div>
        <p>{listListaTiempo[5].texto}</p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- {listListaTiempo[5].footer}</i>
        </div>
      </section>
    </div>
  </div>

        </div>
    );
}

const rootElementListadeTiempo = document.querySelector(":root");

rootElementListadeTiempo.style.setProperty(
  "--color-Fondo",
  ListaDeTiempoStyles.colorFondoSection
);
rootElementListadeTiempo.style.setProperty(
  "--color-General",
  ListaDeTiempoStyles.colorGeneralSection
);
rootElementListadeTiempo.style.setProperty("--color-Texto", ListaDeTiempoStyles.colorTextoSection);

rootElementListadeTiempo.style.setProperty("--color-Titulo", ListaDeTiempoStyles.colorTitleSection);




