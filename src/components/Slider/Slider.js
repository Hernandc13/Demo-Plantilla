const imagesSlider = [
  {
    id: 1,
    url: "https://www.subitus.com/wp-content/uploads/2019/07/blond-cellphone-coffee-1076814.jpg",
  },
  {
    id: 2,
    url: "https://www.subitus.com/wp-content/uploads/2020/04/e-learning_servicios.jpeg",
  },
  {
    id: 3,
    url: "https://www.biossmann.com/statics/images/recursos_humanos1.jpg",
  },
  {
    id: 4,
    url: "https://www.biossmann.com/statics/images/proposito.jpg",
  },
];

function Slider() {
  let imgSlider = React.createRef();

  function prevSlide() {
    for (let index = 0; index < imgSlider.current.children.length; index++) {
        
      imgSlider.current.children[index].style.zIndex =
        imgSlider.current.children[index].style.zIndex - 1;

      if (imgSlider.current.children[index].style.zIndex == 0) {
        imgSlider.current.children[index].style.zIndex =
          imgSlider.current.children.length;
      }

    }

    
  }

  function nextSlide() {
    for (let index = 0; index < imgSlider.current.children.length; index++) {
      imgSlider.current.children[index].style.zIndex =
        parseInt(imgSlider.current.children[index].style.zIndex) + 1;
      if (
        imgSlider.current.children[index].style.zIndex ==
        imgSlider.current.children.length + 1
      ) {
        imgSlider.current.children[index].style.zIndex = 1;
      }
    }
  }
  return (
    <div className=" contenedorPrincipal">
      <div className="contenedor-principal">
        <h1>Slider</h1>
        <section className="wrapper2">
          <i
            className="fa-solid fa-arrow-left button"
            id="prev"
            onClick={prevSlide}
          ></i>
          <div className="image-container" ref={imgSlider}>
            {imagesSlider.map((labelImg) => (
              <img
                src={labelImg.url}
                className="image-container-img"
                style={{ zIndex: labelImg.id }}
                key={labelImg.id}
              />
            ))}
          </div>
          <i
            className="fa-solid fa-arrow-right button"
            id="next"
            onClick={nextSlide}
          ></i>
        </section>
      </div>
    </div>
  );
}
