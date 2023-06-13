function Ahorcado() {
  const [listaPreguntas, setListasPreguntas] =
    React.useState(initialListQuestions); //Estado que guarda array inicial de palabras
  const [indexPregunta, setIndexPregunta] = React.useState(1); //Estado: Index para pasar de pregunta
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("") //Estado: Contiene array, en cada posicion hay una letra con id y disable para pintar de gris y desactivar
      .map((w, index) => (w = { letter: w, id: index, disable: false }))
  );
  const [letraActual, setLetraActual] = React.useState("");
  
  const arrayPalabras = listaPreguntas.map(le => {
    return le.answer.split("").map((w, index) => (w = { letter: w, id: index, status: false }))
  })

  const [palabraActual, setPalabraActual] = React.useState(arrayPalabras[indexPregunta-1])

  const renderPreguntas = listaPreguntas.map((pregunta) => (
    <div key={pregunta.id}>
      {pregunta.active && (
        <p className="preguntaAhorcado">
          Pregunta {pregunta.id} {pregunta.question}
        </p>
      )}
    </div>
  ));
  
  const renderPalabraEscondida = palabraActual.map((letra) => (
    <div key={letra.id} className="contLetraEscondida">
      {letra.status && (
        <p>
          {letra.letter}
        </p>
      )}
    </div>
  ));

  const renderAlfabeto = alpha.map((l) => (
    <Letter
      key={l.id}
      letra={l.letter}
      disable={l.disable}
      funcion={() => clicLetra(l.letter)}
    />
  ));

  const clicLetra = (letra) => {
    const newLetra = letra;
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
    const newPalabraActual = palabraActual.map(a =>{
      if(newLetra === a.letter){
        return{
          ...a,
          status: true
        }
      }else{
        return a
      }
    })

    setPalabraActual(newPalabraActual)
    setLetraActual(newLetra);
    setAlpha(nextAlpha);
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
    
    setListasPreguntas(siguienteListaPregunta);
    setIndexPregunta(indexPregunta + 1);
    setPalabraActual(arrayPalabras[i])
  };

  return (
    <div className="contenedorPrincipal">
      <div className="contenedorPrincipalHang">
        <h2 className="TituloHang">Ahorcado</h2>
        {renderPreguntas}
        <div className="contRenderPalabraEscondida">
          {renderPalabraEscondida}
        </div>
        <div className="containLetters">{renderAlfabeto}</div>
        <button onClick={() => siguientePregunta(indexPregunta)}>
          siguiente pregunta
        </button>
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
