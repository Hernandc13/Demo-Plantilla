function ExpandingCards() {
  let moveCard = React.createRef();

  const expandCard = (code) => {
    let imgCards = moveCard.current.children
    for (let index = 0; index < imgCards.length; index++) {
      imgCards[index].classList.remove('ImgCardActive')

    }
    
    /* if (code === 5) {
      moveCard.current.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 65%";
    } else if (code === 4) {
      moveCard.current.style.gridTemplateColumns = "1fr 1fr 1fr 65% 1fr";
    } else if (code === 3) {
      moveCard.current.style.gridTemplateColumns = "1fr 1fr 65% 1fr 1fr";
    } else if (code === 2) {
      moveCard.current.style.gridTemplateColumns = "1fr 65% 1fr 1fr 1fr";
    } else if (code === 1) {
      moveCard.current.style.gridTemplateColumns = "65% 1fr 1fr 1fr 1fr";
    } */
  };

  return (
    <div className="contenedorPrincipal">
      <section className="contImg" ref={moveCard}>
        <img
          className="ImgCard ImgCardActive"
          src="assets/imgExpandigCards/img1.jpg"
          onClick={() => expandCard(1)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/imgExpandigCards/img2.jpg"
          onClick={() => expandCard(2)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/imgExpandigCards/img3.jpg"
          onClick={() => expandCard(3)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/imgExpandigCards/img4.jpg"
          onClick={() => expandCard(4)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/imgExpandigCards/img5.jpg"
          onClick={() => expandCard(5)}
          alt=""
        />
      </section>
    </div>
  );
}
