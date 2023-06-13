const initialListImages = [
  {
    id: 0,
    imagen: "assets/imgExpandigCards/img1.jpg",
    title: "Titulo de imagen 1",
    mode: false,
    flag: false,
  },
  {
    id: 1,
    imagen: "assets/imgExpandigCards/img2.jpg",
    title: "Titulo de imagen 2",
    mode: false,
    flag: false,
  },
  {
    id: 2,
    imagen: "assets/imgExpandigCards/img3.jpg",
    title: "Titulo de imagen 3",
    mode: false,
    flag: false,
  },
  {
    id: 3,
    imagen: "assets/imgExpandigCards/img4.jpg",
    title: "Titulo de imagen 4",
    mode: false,
    flag: false,
  },
  {
    id: 4,
    imagen: "assets/imgExpandigCards/img5.jpg",
    title: "Titulo de imagen 5",
    mode: false,
    flag: false,
  },
];

function Carrusel({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listImages, setListImages] = useLocalStorage('objectImages', initialListImages)
  const [flags, setFlags] = useLocalStorage('arrayFlags', "")
  const [counterCarrusel, setCounterCarrusel] = React.useState(0)

  function expandCard(index) {
    //Desexpande todas las cards cambiando mode a falso
    const nextListImages = listImages.map((img) => {
      return {
        ...img,
        mode: false
      };
    });

    //A la card que se le dio clic, su mode cambia a T para expandir y flag para marcar que ya se dio clic
    const nextTwoListImages = nextListImages.map((img, i) => {
      if (i === index) {
        return {
          ...img,
          mode: true,
          flag: true,
        };
      } else {
        return img;
      }
    });

    //Se filtra flgs con valor True y se guardan en array
    const nextFlags = nextTwoListImages.filter((i) => i.flag == true)

    //Termina de ver cards, se envian datos para mostrar siguiente componente
    if(flags.length === 4){
      enviarDatos(i);
      enviarDatos2(false, i);
    }
    if(nextFlags.length == 1){
      enviarDatos2(true, i);
    }

    setListImages(nextTwoListImages);
    setFlags(nextFlags)

    const newCounterCarrusel = counterCarrusel + 1
    enviarDatos3(newCounterCarrusel, i)
    setCounterCarrusel(newCounterCarrusel)
  }

  return (
    <>
      <section className="contImg">
        {listImages.map((img) => (
          <img
            key={img.id}
            className={
              img.mode
                ? "ImgCard ImgCardActive quitarGris"
                : img.flag
                ? "ImgCard quitarGris"
                : "ImgCard"
            }
            src={img.imagen}
            alt=""
            onClick={() => expandCard(img.id)}
          />
        ))}
      </section>
      <p className="contadorCarrusel">Cards vistas: {flags.length} / 5</p>
    </>
  );
}

const rootElementExpandingCards = document.querySelector(":root");

rootElementExpandingCards.style.setProperty(
  "--color-textExpandingCards",
  ExpandingCardsStyle.colorTextExpandigCards
);
