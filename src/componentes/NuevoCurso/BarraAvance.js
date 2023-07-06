import { useEffect } from "react";

export default function BarraAvance({ scrollTop, setIniciarTemporizador }) {
  useEffect(() => {
    if (scrollTop === 100) {
      setIniciarTemporizador(false);
    }
  }, [scrollTop, setIniciarTemporizador]);
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
