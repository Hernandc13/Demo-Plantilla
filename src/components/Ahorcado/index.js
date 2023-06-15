function Ahorcado({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listaPreguntas, setListasPreguntas] = useLocalStorage(
    "objectAhorcado",
    initialListQuestions
  );
  const [indexPregunta, setIndexPregunta] = React.useState(1); //Estado: Index para pasar de pregunta
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("") //Estado: Contiene array, en cada posicion hay una letra con id y disable para pintar de gris y desactivar
      .map((w, index) => (w = { letter: w, id: index, disable: false }))
  );
  const [letraActual, setLetraActual] = React.useState("");
  const [error, setError] = React.useState(0);
  const [buttonActive, setButtonActive] = React.useState(false);
  const [showCorrect, setShowCorrect] = React.useState(false);
  const [showIncorrect, setShowIncorrect] = React.useState(false);

  const [flags, setFlags] = useLocalStorage("arrayFlags", "");
  const [counterAhorcado, setCounterAhorcado] = React.useState(0);

  const arrayPalabras = listaPreguntas.map((le) => {
    return le.answer
      .split("")
      .map((w, index) => (w = { letter: w, id: index, status: false }));
  });
  const [palabraActual, setPalabraActual] = React.useState(
    arrayPalabras[indexPregunta - 1]
  );

  const renderPreguntas = listaPreguntas.map((pregunta) => (
    <div key={pregunta.id}>
      {pregunta.active && (
        <p className="preguntaAhorcado">
          Pregunta {pregunta.id + 1} {pregunta.question}
        </p>
      )}
    </div>
  ));

  const renderPalabraEscondida = palabraActual.map((letra) => (
    <div key={letra.id} className="contLetraEscondida">
      {letra.status && <p>{letra.letter}</p>}
    </div>
  ));

  const renderAlfabeto = alpha.map((l) => (
    <Letter
      key={l.id}
      letra={l.letter}
      disable={l.disable}
      funcion={() => clicLetra(l.letter, indexPregunta - 1)}
    />
  ));

  const ErrorRender = ({ count }) => {
    const renderImgXMark = () => {
      const paragraphs = [];

      for (let i = 0; i < count; i++) {
        paragraphs.push(
          <img
            key={i}
            className="imgXError"
            src="../../../assets/xmark-solid.svg"
          />
        );
      }

      return paragraphs;
    };

    return renderImgXMark();
  };

  const clicLetra = (letra, index) => {
    enviarDatos2(true, i);
    
    const newCounterCarrusel = counterAhorcado + 1;
    enviarDatos3(newCounterCarrusel, i);
    setCounterAhorcado(newCounterCarrusel);

    const newLetra = letra;
    setAlpha((prevAlpha) =>
      prevAlpha.map((alp) => {
        if (alp.letter === newLetra) {
          return {
            ...alp,
            disable: true,
          };
        }
        return alp;
      })
    );
    const nextAlpha = alpha.map((alp) => {
      if (alp.letter == newLetra) {
        return {
          ...alp,
          disable: true,
        };
      } else {
        return alp;
      }
    });
    const newPalabraActual = palabraActual.map((a) => {
      if (newLetra === a.letter) {
        return {
          ...a,
          status: true,
        };
      } else {
        return a;
      }
    });

    const countDisable = nextAlpha.filter((i) => i.disable == true);
    const letrasCorrectas = newPalabraActual.filter((i) => i.status == true);
    const uniqueLetters = [
      ...new Set(letrasCorrectas.map((item) => item.letter)),
    ];
    const countErrores = countDisable.length - uniqueLetters.length;

    if (palabraActual.length === letrasCorrectas.length) {
      setAlpha((prevAlpha) => {
        return prevAlpha.map((alp) => ({
          ...alp,
          disable: true,
        }));
      });
      const nextListaPreguntas = listaPreguntas.map((p, i) => {
        if (i === index) {
          return {
            ...p,
            flag: true,
          };
        } else {
          return p;
        }
      });
      const nextFlags = nextListaPreguntas.filter((i) => i.flag == true);

      if (nextFlags.length === 3) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }

      setButtonActive(true);
      setShowCorrect(true);
      setListasPreguntas(nextListaPreguntas);
      setFlags(nextFlags);
    }

    if (countErrores == 6) {
      setAlpha((prevAlpha) => {
        return prevAlpha.map((alp) => ({
          ...alp,
          disable: true,
        }));
      });
      const nextListaPreguntas = listaPreguntas.map((p, i) => {
        if (i === index) {
          return {
            ...p,
            flag: true,
          };
        } else {
          return p;
        }
      });
      const nextFlags = nextListaPreguntas.filter((i) => i.flag == true);

      if (nextFlags.length === 3) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }

      setButtonActive(true);
      setShowIncorrect(true);
      setListasPreguntas(nextListaPreguntas);
      setFlags(nextFlags);
    }

    /* const nextFlags = nextTwoListImages.filter((i) => i.flag == true) */

    setError(countErrores);
    setPalabraActual(newPalabraActual);
    setLetraActual(newLetra);
  };

  const siguientePregunta = (i) => {
    const siguienteListaPregunta = listaPreguntas.map((pregunta) => {
      if (i - 1 == pregunta.id) {
        return {
          ...pregunta,
          active: false,
        };
      } else if (i == pregunta.id) {
        return {
          ...pregunta,
          active: true,
        };
      } else {
        return pregunta;
      }
    });

    const nextAlpha = alpha.map((alp) => {
      return {
        ...alp,
        disable: false,
      };
    });

    setButtonActive(false);
    setAlpha(nextAlpha);
    setListasPreguntas(siguienteListaPregunta);
    setIndexPregunta(indexPregunta + 1);
    setPalabraActual(arrayPalabras[i]);
    setError(0);
    setShowCorrect(false);
    setShowIncorrect(false);
  };

  return (
    <div className="contenedorPrincipal">
      <div className="contenedorPrincipalHang">
        <h2 className="TituloHang">Ahorcado</h2>
        {renderPreguntas}
        <div className="contRenderPalabraEscondida">
          {renderPalabraEscondida}
          {showCorrect && (
            <img
              className="imgCorrectIncorrect"
              src="../../../assets/circle-check-solid.svg"
            />
          )}
          {showIncorrect && (
            <img
              className="imgCorrectIncorrect"
              src="../../../assets/circle-xmark-solid.svg"
            />
          )}
        </div>
        <div className="contLettersError">
          <div className="containLetters">{renderAlfabeto}</div>
          <div className="containError">
            <ErrorRender count={error} />
          </div>
        </div>
        {buttonActive && (
          <button
            className="buttonNextQuestion"
            onClick={() => siguientePregunta(indexPregunta)}
          >
            Siguiente pregunta
          </button>
        )}
      </div>
      <p className="contadorCarrusel">{flags.length} / 3</p>
    </div>
  );
}

const rootElementHang = document.querySelector(":root");

rootElementHang.style.setProperty(
  "--color-BackgroundHang",
  hangStyles.colorBackgroundHang
);
rootElementHang.style.setProperty(
  "--color-PrincipalHang",
  hangStyles.colorPrincipalHang
);
rootElementHang.style.setProperty(
  "--color-SecundarioHang",
  hangStyles.colorSecundarioHang
);
rootElementHang.style.setProperty(
  "--color-TextoHang",
  hangStyles.colorTextoHang
);
rootElementHang.style.setProperty(
  "--color-TextoAlfabetoHang",
  hangStyles.colorTextoAlfabetoHang
);
rootElementHang.style.setProperty(
  "--ancho-ComponenteHang",
  hangStyles.anchoComponenteHang
);
