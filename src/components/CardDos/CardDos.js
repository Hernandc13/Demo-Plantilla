function CardDos() {
  return (
    <div className="contenedorPrincipal">
      <br />
      <h1>Desarrollo Web</h1>
      <div className="containerAnimado">
        <div className="card2">
          <div className="titlea">
            <h1>{listCardAnimado[0].title}</h1>
          </div>
          <a href="" className="btn2">
            {listCardAnimado[0].textbutton}
          </a>
        </div>
        <div className="card2">
          <div className="titlea">
            <h1>{listCardAnimado[1].title}</h1>
          </div>
          <a href="" className="btn2">
            {listCardAnimado[1].textbutton}
          </a>
        </div>
        <div className="card2">
          <div className="titlea">
            <h1>{listCardAnimado[2].title}</h1>
          </div>
          <a href="" className="btn2">
            {listCardAnimado[2].textbutton}
          </a>
        </div>
      </div>
    </div>
  );
}

const rootElementCardAnimado = document.querySelector(":root");

rootElementCardAnimado.style.setProperty(
  "--color-BackgroundCardAnimado",
  CardAnimadoStyles.colorBackgroundCardAnimado
);
rootElementCardAnimado.style.setProperty(
  "--color-PrincipalCardAnimado",
  CardAnimadoStyles.colorPrincipalCardAnimado
);
rootElementCardAnimado.style.setProperty(
  "--color-TextoCardAnimado",
  CardAnimadoStyles.colorTextoCardAnimado
);
