function Carrusel() {
  let moveCard = React.createRef();

  const expandCard = (code) => {
    let imgCards = moveCard.current.children
    for (let index = 0; index < imgCards.length; index++) {
      imgCards[index].classList.remove('ImgCardActive') 
      imgCards[index].classList.remove('visible') 
    }
    imgCards[code].classList.add('ImgCardActive')
    imgCards[code+1].classList.add('visible')
  };

  return (
    <div className="contenedorPrincipal">
      <section className="contImg" ref={moveCard}>
        <img
          className="ImgCard ImgCardActive"
          src={listImages[0].imagen}
          onClick={() => expandCard(0)}
          alt=""
        />
        <p className="tituloImgCard visible">{listImages[0].title}</p>
        <img
          className="ImgCard"
          src={listImages[1].imagen}
          onClick={() => expandCard(2)}
          alt=""
        />
        <p className="tituloImgCard tituloImgCardTwo">{listImages[1].title}</p>
        <img
          className="ImgCard"
          src={listImages[2].imagen}
          onClick={() => expandCard(4)}
          alt=""
        />
        <p className="tituloImgCard tituloImgCardThree">{listImages[2].title}</p>
        <img
          className="ImgCard"
          src={listImages[3].imagen}
          onClick={() => expandCard(6)}
          alt=""
        />
        <p className="tituloImgCard tituloImgCardFour">{listImages[3].title}</p>
        <img
          className="ImgCard"
          src={listImages[4].imagen}
          onClick={() => expandCard(8)}
          alt=""
        />
        <p className="tituloImgCard tituloImgCardFive">{listImages[4].title}</p>
      </section>
    </div>
  );
}

const rootElementExpandingCards = document.querySelector(":root");

rootElementExpandingCards.style.setProperty(
  "--color-textExpandingCards",
  ExpandingCardsStyle.colorTextExpandigCards
);