function SliderColor() {
  let imgSliderColor = React.useRef();

  const imageActive = (id) => {
    for (let index = 0; index < imgSliderColor.current.children.length; index++) {
      imgSliderColor.current.children[index].classList.remove(
        "carousel__image_active"
      )
      imgSliderColor.current.children[index].children[1].classList.remove(
        "isVisible"
      )
    }
    /* console.log(imgSliderColor.current.children[id - 1].children[1]) */
    imgSliderColor.current.children[id - 1].classList.add(
      "carousel__image_active"
    );
    imgSliderColor.current.children[id - 1].children[1].classList.add(
      "isVisible"
    );
  };

  return (
    <div className="contenedorPrincipal">
      <section id="appColor">
        <ul className="carousel__list" ref={imgSliderColor}>
          {imagesSliderTwo.map((labelImg) => (
            <li
              className="carousel__item"
              key={labelImg.id}
              onClick={() => imageActive(labelImg.id)}
            >
              <div className="carousel__image">
                <img src={labelImg.url} />
              </div>
              <div className="carousel__contents">
                <h2 className="user__name">{labelImg.name}</h2>
                <h3 className="user__title">{labelImg.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
