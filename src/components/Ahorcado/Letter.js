function Letter({ letra, funcion, disable }) {
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
