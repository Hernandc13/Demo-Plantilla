let counter,
  disable = false,
  indexHang = 0;

function Hang() {
  let contLetters = React.createRef();
  let contWordSecret = React.createRef();
  let hangBody = React.createRef();

  const [isVisible, setIsVisible] = React.useState(false);
  const [errorCounter, setErrorCounter] = React.useState(0);
  const [indexHangTwo, setIndexHangTwo] = React.useState(0);
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((w, index) => (w = { letter: w, id: index }))
  );
  const [wordSecret, setWordSecret] = React.useState(
    listQuestions[indexHang].answer
      .split("")
      .map((w, index) => (w = { letter: w, id: index, status: false }))
  );

  function hangChange(letterId, letter) {
    //Una vex que se selecciona una letra, se deshabilita
    contLetters.current.children[letterId].setAttribute = "disabled";
    contLetters.current.children[letterId].style.filter = "grayscale(1)";
    counter = 0;
    //Bucle que compara la letra ingresara con la palabra oculta
    for (let index = 0; index < wordSecret.length; index++) {
      if (contWordSecret.current.children[index].textContent == letter) {
        //Si esta bien, la muestra en pantalla
        contWordSecret.current.children[index].children[0].style.display = "block";
        wordSecret[index].status = true;
      } else {
        //Variable que cuenta las veces que entra al else, si es 7 (longitud de la palabra) quiere decir que se equivoco de letra
        counter++;
        //Condicion que controla el numero de errores
        if (errorCounter < 5) {
          if (counter == wordSecret.length) {
            hangBody.current.children[errorCounter].style.display = "block";
            setErrorCounter(errorCounter + 1);
          }
        } else {
          //else cuando supera numero de erroees
          hangBody.current.children[errorCounter].style.display = "block";
          disable = true;
          console.log("perdiste");
        }
      }
    }

    //Si se gana o pierde, se desactiva teclado
    if (disable || isVisible) {
      for (let j = 0; j < 26; j++) {
        contLetters.current.children[j].disabled = "true";
      }
    }
    setIsVisible(wordSecret.every((e) => e.status == true));

    //Validacion de espacios en respuesta
    wordSecret.forEach(space => {
      if(space.letter == ' '){
        space.status = true
      }
      
    });
    console.log(wordSecret);
    
  }

  function reload() {
    indexHang++;
    disable = false;
    setIsVisible(false);
    setErrorCounter(0);
    setIndexHangTwo(indexHangTwo + 1);
    setWordSecret(
      listQuestions[indexHang].answer
        .split("")
        .map((w, index) => (w = { letter: w, id: index, status: false }))
    );
    for (let j = 0; j < 26; j++) {
      contLetters.current.children[j].removeAttribute = "disabled";
      contLetters.current.children[j].style.filter = "none";
    }
    for (let k = 0; k < wordSecret.length; k++) {
      contWordSecret.current.children[k].children[0].style.display = "none";
    }
    for (let g = 0; g < 6; g++) {
      hangBody.current.children[g].style.display = "none";
    }
  }

  return (
    <div className="contenedorPrincipalHang">
      <h2>Ahorcado</h2>
      <p className="questionHang">
        Pregunta {listQuestions[indexHangTwo].id}.{" "}
        {listQuestions[indexHangTwo].question}
      </p>
      <div className="containWordSecret" ref={contWordSecret}>
        {wordSecret.map((word) => (
          <Word letter={word.letter} key={word.id} />
        ))}
      </div>
      <div className="contSecundario">
        <div className="containLetters" ref={contLetters}>
          {alpha.map((al) => (
            <Letter
              func={() => hangChange(al.id, al.letter)}
              letter={al.letter}
              key={al.id}
            />
          ))}
        </div>
        <div className="contHang" ref={hangBody}>
          <Hanged />
        </div>
      </div>
      <div className="contBtnNext">
        {isVisible && (
          <button className="btn-general-actividades" onClick={reload}>
            Siguiente pregunta
          </button>
        )}
      </div>
    </div>
  );
}
