function BarraAvance({ scrollTop, setIniciarTemporizador }) {
  if (scrollTop == 100) {
    React.useEffect(() => {
      setIniciarTemporizador(false);
    }, []);
  }
  return (
    <div className="contProgressBar">
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>

        <h4>{`${scrollTop}%`}</h4>  
      {}
    </div>
  );
}
