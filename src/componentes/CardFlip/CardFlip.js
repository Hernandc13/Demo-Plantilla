import { useState } from "react";
import useLocalStorage from "../../useLocalStorage";
import "./CardFlip.css";

import { initiallistCardFlip } from "./EditCardFlip";
import { CardFlipStyles } from "./EditCardFlip";

export default function CardFlip({
  enviarDatos,
  enviarDatos2,
  enviarDatos3,
  i,
}) {
  const [listCardFlip, setListCardFlip] = useLocalStorage(
    "obejectCardFlip",
    initiallistCardFlip
  );
  const [flags, setFlags] = useLocalStorage("arrayFlagsThree", "");
  const [counterCardFlip, setCounterCardFlip] = useState(0);

  const RenderCardFlip = ({ cardFlip }) => {
    const [active, setActive] = useState(true);

    const clicCardFlip = (index) => {
      const nextListCardFlip = listCardFlip.map((cf, i) => {
        if (i === index) {
          return {
            ...cf,
            flag: true,
          };
        } else {
          return cf;
        }
      });

      const nextFlags = nextListCardFlip.filter((i) => i.flag == true);

      if (flags.length === 2) {
        enviarDatos(i);
        enviarDatos2(false, i);
      }
      if (nextFlags.length == 1) {
        enviarDatos2(true, i);
      }

      setFlags(nextFlags);
      setActive(!active);
      setListCardFlip(nextListCardFlip);

      const newCounterCardFlip = counterCardFlip + 1;
      enviarDatos3(newCounterCardFlip, i);
      setCounterCardFlip(newCounterCardFlip);
    };

    return (
      <div
        className={active ? "wrapperFlip" : "wrapperFlip rotate180"}
        key={cardFlip.id}
        onClick={() => clicCardFlip(cardFlip.id)}
      >
        <div className="cardFlip front-face">
          <img src={cardFlip.imagen} />
        </div>
        <div className="cardFlip back-face">
          <img src={cardFlip.imagen} />
          <div className="info">
            <div className="titleFlip">{cardFlip.title} </div>
            <p>{cardFlip.texto} </p>
          </div>
          <ul>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="contenedorPrincipal">
      <div className="contentFlip">
        {listCardFlip.map((cf) => (
          <RenderCardFlip
            key={cf.id}
            cardFlip={cf}
          />
        ))}
      </div>
      <p className="contadorAvance">
        Cards vistas: {flags.length} / {listCardFlip.length}
      </p>
    </div>
  );
}

const rootElementCardFlip = document.querySelector(":root");

rootElementCardFlip.style.setProperty(
  "--color-CardFlipGeneral",
  CardFlipStyles.colorGeneral
);
rootElementCardFlip.style.setProperty(
  "--color-FondoFlipCard",
  CardFlipStyles.colorFondoCard
);
