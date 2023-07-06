import { useEffect, useState } from "react";

export default function Temporizador({ iniciarTemporizador, id, nombre }) {  
  const [tiempo, setTiempo] = useState(
    parseInt(localStorage.getItem(`tiempo${id}`), 10) || 0
  );

  useEffect(() => {
    let intervalo;

    if (iniciarTemporizador) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [iniciarTemporizador]);

  useEffect(() => {
    localStorage.setItem(`tiempo${id}`, tiempo.toString());
  }, [tiempo]);

  const formatTiempo = (tiempo) => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
  };

  return  <p className="parrafoTempor">{id == 0 ? 'Tiempo total: ' : `${nombre}: `}{formatTiempo(tiempo)}</p>
};
