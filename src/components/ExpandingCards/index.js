function ExpandingCards() {
  let moveCard = React.createRef();

  const expandCard = (code) => {
    if (code === 5) {
      moveCard.current.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 65%";
    } else if (code === 4) {
      moveCard.current.style.gridTemplateColumns = "1fr 1fr 1fr 65% 1fr";
    } else if (code === 3) {
      moveCard.current.style.gridTemplateColumns = "1fr 1fr 65% 1fr 1fr";
    } else if (code === 2) {
      moveCard.current.style.gridTemplateColumns = "1fr 65% 1fr 1fr 1fr";
    } else if (code === 1) {
      moveCard.current.style.gridTemplateColumns = "65% 1fr 1fr 1fr 1fr";
    }
  };

  return (
    <div className="contenedor-principal">
      <section className="contImg" ref={moveCard}>
        <img
          className="ImgCard"
          src="assets/img1.jpg"
          onClick={() => expandCard(1)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/img2.jpg"
          onClick={() => expandCard(2)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/img3.jpg"
          onClick={() => expandCard(3)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/img4.jpg"
          onClick={() => expandCard(4)}
          alt=""
        />
        <img
          className="ImgCard"
          src="assets/img5.jpg"
          onClick={() => expandCard(5)}
          alt=""
        />
      </section>
    </div>
  );
}
