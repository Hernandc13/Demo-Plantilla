const initialListAcordeonDos = [
  {
    id: 0,
    title: "Acordeon 1",
    texto: "Texto del acordeon 1",
    mode: false,
    flag: false,
  },
  {
    id: 1,
    title: "Acordeon 2",
    texto: "Texto del acordeon 2",
    mode: false,
    flag: false,
  },
  {
    id: 2,
    title: "Acordeon 3",
    texto: "Texto del acordeon 3",
    mode: false,
    flag: false,
  },
];

function AcordeonDos({ enviarDatos, enviarDatos2, enviarDatos3, i }) {
  const [listAcordeon, setListAcordeon] = useLocalStorage('objectAcordeon', initialListAcordeonDos)
  const [flags, setFlags] = useLocalStorage('arrayFlagsTwo', "")
  const [counterAcordeon, setCounterAcordeon] = React.useState(0)

  function AccordionItem({ id, title, texto, mode }) {
    return (
      <>
        <button className="accordion" onClick={() => clicAcordeon(id)}>
          {title}
        </button>
        {mode && (
          <div className={`panel ${mode ? 'active' : ''}`}>
            <p>{texto}</p>
          </div>
        )}
      </>
    );
  }

  function clicAcordeon(id) {
    //A la card que se le dio clic, su mode cambia a T para expandir y flag para marcar que ya se dio clic
    const nextListAcordeon = listAcordeon.map((acordeon, i) => {
      if (i === id) {
        return {
          ...acordeon,
          mode: !acordeon.mode,
          flag: true,
        };
      } else {
        return acordeon;
      }
    });

    const nextFlags = nextListAcordeon.filter((i) => i.flag == true);

    if (nextFlags.length === 3) {
      enviarDatos(i);
      enviarDatos2(false, i);
    }
    if(nextFlags.length == 1){
      enviarDatos2(true, i);
    }
    
    setFlags(nextFlags);
    setListAcordeon(nextListAcordeon);

    const newCounterAcordeon = counterAcordeon + 1
    enviarDatos3(newCounterAcordeon, i)
    setCounterAcordeon(newCounterAcordeon)
  }

  const listaAcordeones = (
    <>
      <div className="containAcordeonDos">
        {listAcordeon.map((acordeon) => (
          <AccordionItem
            key={acordeon.id}
            id={acordeon.id}
            title={acordeon.title}
            texto={acordeon.texto}
            mode={acordeon.mode}
          />
        ))}
      </div>
      <p className="contadorAvance">Cards vistas: {flags.length} / {listAcordeon.length}</p>
    </>
  );

  return <div className="contenedorPrincipal">{listaAcordeones}</div>;
}

/*  const rootElementAcordeonN = document.querySelector(":root");
  
  rootElementAcordeonN.style.setProperty(
    "--color-TituloAcordeon",
    AcordeonNStyles.colorFondoAcordeonStyle
  );
  rootElementAcordeonN.style.setProperty(
    "--color-PrincpalAcordeon",
    AcordeonNStyles.colorPrincipalAcordeonStyle
  );
  rootElementAcordeonN.style.setProperty(
    "--color-FondoTetxoAcordeon",
    AcordeonNStyles.colorFondoTetxoAcordeonStyle
  ); */
