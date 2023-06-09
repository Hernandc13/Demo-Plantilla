function Ahorcado() {
  const [listaPreguntas, setListasPreguntas] =
    React.useState(initialListQuestions); //Estado que guarda array inicial de palabras
  const [indexPregunta, setIndexPregunta] = React.useState(2); //Estado: Index para pasar de pregunta
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((w, index) => (w = { letter: w, id: index }))
  ); //Estado: Contiene array, en cada posicion hay una letra con id para la key 
  const [letraActual, setLetraActual] = React.useState('')
  /*
  const [wordSecret, setWordSecret] = React.useState(
    listQuestions[indexHang].answer
      .split("")
      .map((w, index) => (w = { letter: w, id: index, status: false }))
  ); */

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

    setListasPreguntas(siguienteListaPregunta);
    setIndexPregunta(indexPregunta + 1);
  };

  const renderPreguntas = listaPreguntas.map((pregunta) => (
    <div key={pregunta.id}>
      {pregunta.active && (
        <p className="preguntaAhorcado">
          Pregunta {pregunta.id} {pregunta.question}
        </p>
      )}
    </div>
  ));

  const renderAlfabeto = alpha.map((l) => (
    <Letter 
      key={l.id}
      letra={l.letter}
      funcion={() => clicLetra(l.id, l.letter)}/>
  ));

  return (
    <div className="contenedorPrincipal">
      <div className="contenedorPrincipalHang" id="content">
        <h2 className="TituloHang">Ahorcado</h2>
        {renderPreguntas}

        <div className="containLetters">{renderAlfabeto}</div>

        {/* <button onClick={() => siguientePregunta(indexPregunta)}>
          siguiente pregunta
        </button> */}
      </div>
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
