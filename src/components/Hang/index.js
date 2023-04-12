function Hang() {
  const listQuestions = [
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan est at nunc fermentum ultrices.",
      answer: "subitus",
    },
    {
      id: 2,
      question:
        "Aenean accumsan est at nunc fermentum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "moodle",
    },
    {
      id: 3,
      question:
        "Est at nunc fermentum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "daniel",
    }
  ];
  let contLetters = React.createRef();
  let contWordSecret = React.createRef();
  let hangBody = React.createRef();
  let counter, disable = false, indexHang = 0;

  const [isVisible, setIsVisible] = React.useState(false);
  const [errorCounter, setErrorCounter] = React.useState(0);
  const [counterWin, setCounterWin] = React.useState(0);
  const [indexHangTwo, setIndexHangTwo] = React.useState(0);
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((w, index) => (w = { letter: w, id: index}))
  );
  const [wordSecret, setWordSecret] = React.useState(
    listQuestions[indexHang].answer
      .split("")
      .map((w, index) => (w = { letter: w, id: index,  status: false }))
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
        contWordSecret.current.children[index].style.color = "white";
        wordSecret[index].status = true
      } else {
        //Variable que cuenta las veces que entra al else, si es 7 (longitud de la palabra) quiere decir que se equivoco de letra
        counter++;
        if (errorCounter < 5) {
          if (counter == wordSecret.length) {
            hangBody.current.children[errorCounter].style.display = "block";
            setErrorCounter(errorCounter + 1);
          }
        } else {
          hangBody.current.children[errorCounter].style.display = "block";
          disable = true;
          console.log("perdiste");
        }
      }
      if(contWordSecret.current.children[index].style.color == 'white'){
        setCounterWin(counterWin + 1)
      }
    }
    
    if (disable || isVisible) {
      for (let j = 0; j < 26; j++) {
        contLetters.current.children[j].disabled = "true";
      }
    }
    setIsVisible(wordSecret.every(e => e.status == true))
  }

  function reload(){
    indexHang++
    disable = false
    setIsVisible(false)
    setErrorCounter(0)
    setCounterWin(0)
    setIndexHangTwo(indexHangTwo + 1)
    setWordSecret(
      listQuestions[indexHang].answer
        .split("")
        .map((w, index) => (w = { letter: w, id: index,  status: false }))
    );
    for (let j = 0; j < 26; j++) {
      contLetters.current.children[j].removeAttribute = "disabled";
      contLetters.current.children[j].style.filter = "none";
    }
    for (let k = 0; k < wordSecret.length; k++) {
      contWordSecret.current.children[k].style.color = "#1A314C";
    }
    for (let g = 0; g < 6; g++) {
      hangBody.current.children[g].style.display = "none";
    }
  }

  return (
    <div className="contenedorPrincipalHang">
      <h2>Ahorcado</h2>
      <p className="questionHang">
        Pregunta {listQuestions[indexHangTwo].id}. {listQuestions[indexHangTwo].question}
      </p>
      <div className="containWordSecret" ref={contWordSecret}>
        {wordSecret.map((word) => (
          <Word letter={word.letter} key={word.id}/>
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
      <div>{isVisible && <button onClick={reload}>Siguiente pregunta</button>}</div>
    </div>
  );
}