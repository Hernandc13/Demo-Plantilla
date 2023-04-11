function Hang() {
  let contLetters = React.createRef();
  let contWordSecret = React.createRef();
  let hangBody = React.createRef();
  let counter = 0;

  const [errorCounter, setErrorCounter] = React.useState(0);
  const [alpha, setAlpha] = React.useState(
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((w, index) => (w = { letter: w, id: index }))
  );
  const [wordSecret, setWordSecret] = React.useState(
    "subitus".split("").map((w, index) => (w = { letter: w, id: index }))
  );

  function hangChange(letterId, letter) {
    //Una vex que se selecciona una letra, se deshabilita
    contLetters.current.children[letterId].disabled = "true";
    counter = 0;
    //Bucle que compara la letra ingresara con la palabra oculta
    for (let index = 0; index < wordSecret.length; index++) {
      if (contWordSecret.current.children[index].textContent == letter) {
        //Si esta bien, la muestra en pantall
        contWordSecret.current.children[index].style.color = "black";
        console.log("Bien");
      } else {
        //Variable que cuenta las veces que entra al else, si es 7 (longitud de la palabra)
        //quiere decir que se equivoco de letra
        counter++;
        if (errorCounter < 6) {
          if (counter == wordSecret.length) {
            setErrorCounter(errorCounter + 1);
            hangBody.current.children[errorCounter].style.display = "block";
            console.log(hangBody.current.children[errorCounter]);
          }
        } else {
          console.log("perdiste");
        }
      }
    }
  }

  return (
    <div>
      <h2>Ahorcado</h2>
      <p>
        Pregunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean accumsan est at nunc fermentum ultrices. Vestibulum sem lorem,
        semper vitae tincidunt in, cursus et turpis. Respuesta: Subitus
      </p>
      <div className="containWordSecret" ref={contWordSecret}>
        {wordSecret.map((word) => (
          <Word letter={word.letter} key={word.id} />
        ))}
      </div>
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
  );
}
