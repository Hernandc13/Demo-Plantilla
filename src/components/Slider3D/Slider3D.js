function Slider3D() {
  return (
    <div className="contenedorPrincipal">
      <div className="container" id="container">
        <div className="caption" id="slider-caption">
          <div className="caption-heading">
            <h1>Lorem Ipsum</h1>
          </div>
          <div className="caption-subhead">
            <span>dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          <a className="btn" href="#">
            Sit Amet
          </a>
        </div>
        <div className="left-col" id="left-col">
          <div id="left-slider"></div>
        </div>
        <ul className="nav2">
          <li className="slide-up">
            {" "}
            <a href="#">Atrás</a>
          </li>
          <li className="slide-down">
            {" "}
            <a id="down_button" href="#">
              Siguiente
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
