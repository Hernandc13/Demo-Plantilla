function Ahorcado({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listaPreguntas, setListasPreguntas] = useLocalStorage(
    "objectAhorcado",
    initialListQuestions
  );
  const [indexPregunta, setIndexPregunta] = React.useState(1); //Estado: Index para pasar de pregunta
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("") 
      .map((w, index) => (w = { letter: w, id: index, disable: false }))
  ); //Estado: Contiene array, en cada posicion hay una letra con id y disable para pintar de gris y desactivar
  const [letraActual, setLetraActual] = React.useState("");
  const [error, setError] = React.useState(0); //Estado: Contador de errores
  const [buttonActive, setButtonActive] = React.useState(false); //Estado: Boolean para boton de siguiente pregunta
  const [showCorrect, setShowCorrect] = React.useState(false); //Estado: Mostrar icono de correcto
  const [showIncorrect, setShowIncorrect] = React.useState(false); //Estado: Mostrar icono de incorrecto

  const [flags, setFlags] = useLocalStorage("arrayFlags", ""); //Estado; Array de flags de palabras terminadas
  const [counterAhorcado, setCounterAhorcado] = React.useState(0); //Estado: Contador de clics 
    
  const arrayPalabras = listaPreguntas.map((le) => {
    return le.answer
      .split("")
      .map((w, index) => (w = { letter: w, id: index, status: false }));
  }); //Estado: Array con palabras separadasa letra por letra
  const [palabraActual, setPalabraActual] = React.useState(
    arrayPalabras[indexPregunta - 1]
  ); //Estado: Estado con palabra actual, usando el array de palabras y el index menos 1

  const renderPreguntas = listaPreguntas.map((pregunta) => (
    pregunta.active && (
      <p key={pregunta.id} className="preguntaAhorcado">
        Pregunta {pregunta.id + 1} {pregunta.question}
      </p>
    )
  )); //Render: Preguntas, solo se muestra una cuando active sea true

  const renderPalabraEscondida = palabraActual.map((letra) => (
    <div key={letra.id} className="contLetraEscondida">
      {letra.status && <p>{letra.letter}</p>}
    </div>
  )); //Render: Palabra actual, se imprime letra por letra y solo se muestra si status es true

  const renderAlfabeto = alpha.map((l) => (
    <Letter
      key={l.id}
      letra={l.letter}
      disable={l.disable}
      funcion={() => clicLetra(l.letter, indexPregunta - 1)}
    />
  )); //Render de alfabeto, se ocupa componente Letter, se le pasa letra, boolean-disable, funcion clicletra

  const ErrorRender = ({ count }) => { //Se le pasa contador de errores
    const renderImgXMark = () => {
      const paragraphs = [];

      for (let i = 0; i < count; i++) { //Dependiendo de eso genera una cantidad de taches
        paragraphs.push(
          <img
            key={i}
            className="imgXError"
            src="../../../assets/xmark-solid.svg"
          />
        );
      }
      return paragraphs;//Retorna array con imgs 
    };

    return renderImgXMark();
  };//Componente: Renderiza los los errores 

  const clicLetra = (letra, index) => {
    enviarDatos2(true, i); //Enviar i, y true para que inicie temporizador
    
    const newCounterCarrusel = counterAhorcado + 1;//sumamos 1 al contador de clics 
    enviarDatos3(newCounterCarrusel, i);//Enviamos el dato
    setCounterAhorcado(newCounterCarrusel);//ACtualizamos estado

    setAlpha((prevAlpha) =>
      prevAlpha.map((alp) => (alp.letter === letra ? { ...alp, disable: true } : alp))
    );//setEstado: la letra que se selecciono, se desactive y pasa a ser gris por disable true
    const nextAlpha = alpha.map((alp) =>
      alp.letter === letra ? { ...alp, disable: true } : alp
    );//Lo mismo de arriba pero lo guardamos en NextAlpha para poder manipularlo antes de renderizar nuevamente
    const newPalabraActual = palabraActual.map((a) =>
      a.letter === letra ? { ...a, status: true } : a
    );//Si la letra que se dio clic, coincide con alguna(s) de la palabra, cambia el status a true y se muestra

    const countDisable = nextAlpha.filter((i) => i.disable);//Guardamos las letras que se han seleccionado
    const letrasCorrectas = newPalabraActual.filter((i) => i.status);//Guardamos letras descubiertas de la palabra actual
    const uniqueLetters = [
      ...new Set(letrasCorrectas.map((item) => item.letter)),
    ]; //Del array letrasCorrectas, quitamos las letras repetidas
    const countErrores = countDisable.length - uniqueLetters.length;//Hacemos la resta para contar los errores

    if (palabraActual.length === letrasCorrectas.length) { //Si adivino la palabras
      setAlpha((prevAlpha) =>
        prevAlpha.map((alp) => ({ ...alp, disable: true }))
      );//setEstado: Desactivamos todas las letras para que ya no pueda seleccionar mas
      const nextListaPreguntas = listaPreguntas.map((p, i) =>
        i === index ? { ...p, flag: true } : p
      );//Flag de la palabra a true, se ubica con index proporcionado
      const nextFlags = nextListaPreguntas.filter((i) => i.flag);//Array con flags en true

      if (nextFlags.length === listaPreguntas.length) {//Si ya termino las palabras
        enviarDatos(i);//Enviamos dato para actualizar barra de avance
        enviarDatos2(false, i);//Enviamos datos para detener temporizador
      }

      setButtonActive(true);//setEstado: Boton de siguiente preguntas true
      setShowCorrect(true);//setEstado: Icono de palabra correcta
      setListasPreguntas(nextListaPreguntas);//setEstado: Se actualiza object con flag true
      setFlags(nextFlags);
    }


    if (countErrores == 6) {//Si no aivino palabra
      setAlpha((prevAlpha) =>
        prevAlpha.map((alp) => ({ ...alp, disable: true }))
      );
      const nextListaPreguntas = listaPreguntas.map((p, i) =>
        i === index ? { ...p, flag: true } : p
      );
      const nextFlags = nextListaPreguntas.filter((i) => i.flag);

      if (nextFlags.length === listaPreguntas.length) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }

      setButtonActive(true);
      setShowIncorrect(true);
      setListasPreguntas(nextListaPreguntas);
      setFlags(nextFlags);
    }

    setError(countErrores)
    setPalabraActual(newPalabraActual);
    setLetraActual(letra);
  };

  const siguientePregunta = (i) => {
    const siguienteListaPregunta = listaPreguntas.map((pregunta) => {
      if (i - 1 == pregunta.id) {//La pregunta anterior se desactiva
        return {
          ...pregunta,
          active: false,
        };
      } else if (i == pregunta.id) {//La pregunta nueva se muestra
        return {
          ...pregunta,
          active: true,
        };
      } else {
        return pregunta;
      }
    });

    const nextAlpha = alpha.map((alp) => ({ ...alp, disable: false }));//Se activan todas las letras

    //Se resetean estados
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
      <p className="contadorCarrusel">{flags.length} / {listaPreguntas.length}</p>
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
