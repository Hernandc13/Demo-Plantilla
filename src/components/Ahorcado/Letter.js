function Letter({ letra, funcion, disable }) {
  /* const [disable, setDisable] = React.useState(false)  */

  return (
    <button
      onClick={funcion}
      className={disable ? "buttonAlphabet grisDisable" : "buttonAlphabet"}
      disabled={disable}
    >
      {letra}
    </button>
  );
}
