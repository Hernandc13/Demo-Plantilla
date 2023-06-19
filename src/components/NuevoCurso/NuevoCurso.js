function NuevoCurso() {
  const [datos, setDatos] = useLocalStorage("arrayDatos", [1]); //array con Ids de componantes visibles, por defecto 1
  const [countTotal, setCountTotal] = useLocalStorage("totalClics", 0); //Total de clics
  const [comenzarCurso, setComenzarCurso] = useLocalStorage(
    "stateCurso",
    false
  ); //Boolean para mostrar componentes
  const [scrollTop, setScrollTop] = useLocalStorage("barraAvance", 0); //Estado que controla barra general de avance
  const [iniciarTemporizador, setIniciarTemporizador] = React.useState(false);

  const recibirDatos = (indice) => {
    //Se recibe el indice del componente cuando se termina
    const newDatos = [...datos, indice]; //Guardamos el nuevo indice recibido en un array
    /* const next = configCurso.map((config) => {
      //Next almacena active: true que encuentre en array newDatos
      for (let index = 0; index < newDatos.length; index++) {
        if (newDatos[index] == config.id) {
          return {
            ...config,
            active: true,
          };
        }
      }
      return config;
    }); */
    const next = configCurso.map((config) => {
      //Next almacena active: true que encuentre en array newDatos

      if (indice+1 == config.id) {
        return {
          ...config,
          active: true,
        };
      }

      return config;
    });

    //Actualizamos datos y configcurso
    setDatos(newDatos);
    setConfigCurso(next);

    //Actualizamos el avance con el total y el indice que se recibe
    const total = initialConfigCurso.length; //Total de componentes
    const scrolled = (indice / total) * 100; //Procentaje a mostrar
    setScrollTop(scrolled.toFixed(0));
  };

  const recibirDatos2 = (boolean, indice) => {
    //Se recibe boolean e indice para temporizador
    setEstados((prevEstados) => {
      return prevEstados.map((est) => {
        //Se actualiza en array de estados para comenzar o terminar
        if (indice == est.id) {
          return {
            ...est,
            valor: boolean,
          };
        } else {
          return est;
        }
      });
    });
  };

  const recibirDatos3 = (c, indice) => {
    //Se recibe cantidad de clic e indice para actualizar
    setCliks((prevCliks) => {
      return prevCliks.map((clic) => {
        if (indice === clic.id) {
          return {
            ...clic,
            valor: c,
          };
        } else {
          return clic;
        }
      });
    });
  };

  const initialConfigCurso = [
    {
      id: 1,
      nombre: "Ahorcado",
      titulo: "Titulo de prueba",
      active: true,
    },
    {
      id: 2,
      nombre: "AcordeonDos",
      titulo: "Titulo de prueba 2",
      active: false,
    },
    {
      id: 3,
      nombre: "Carrusel",
      titulo: "Titulo de prueba 3",
      active: false,
    },
    {
      id: 4,
      nombre: "CardFlip",
      titulo: "Titulo de prueba 4",
      active: false,
    },
  ];

  const componentesMap = {
    Ahorcado,
    AcordeonDos,
    Carrusel,
    CardFlip,
  };

  const [configCurso, setConfigCurso] = React.useState(initialConfigCurso);

  //Logica de Modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // Logica de Modal

  const listaComponentes = configCurso.map((comp) => {
    const Componente = componentesMap[comp.nombre];
    return (
      <section key={comp.id}>
        {comp.active && (
          <div className="contNuevoCursoComponent">
            <h2 className="titleNuevoCurso">{comp.titulo}</h2>
            <Componente
              enviarDatos={recibirDatos}
              enviarDatos2={recibirDatos2}
              enviarDatos3={recibirDatos3}
              i={comp.id}
            />
          </div>
        )}
      </section>
    );
  });

  const [cliks, setCliks] = useLocalStorage(
    "clicsIndividuales",
    configCurso.map((comp) => ({
      id: comp.id,
      valor: 0,
      nombre: comp.nombre,
    }))
  ); //Estado-Array: que contiene clics de cada componente

  const renderClics = cliks.map((cl) => {
    return (
      <p key={cl.id} className="parrafoTempor">
        {cl.nombre}: {cl.valor}
      </p>
    );
  });

  const [estados, setEstados] = React.useState(
    configCurso.map((comp) => ({ id: comp.id, valor: false }))
  ); //Se crea estado por cada componente, estos rigen los tiempos individuales

  const handleInicio = () => {
    //Funcion inicar temporizador general
    setIniciarTemporizador(true);
    setComenzarCurso(true);
  };
  const handleFin = () => {
    //Funcion terminar temporizador general
    setIniciarTemporizador(false);
  };

  const renderTemporizadores = configCurso.map((comp) => (
    <Temporizador
      key={comp.id}
      id={comp.id}
      iniciarTemporizador={estados[comp.id - 1].valor}
       nombre={comp.nombre}
    />
  )); //Se genera un temporizador por cada componente

  return (
    <div className="contenedorPrincipal">
      {comenzarCurso ? null : (
        <div className="botonesTemporales">
          <button className="buttonComenzar" onClick={handleInicio}>
            Iniciar curso
          </button>
        </div>
      )}
      {comenzarCurso && (
        <>
          <BarraAvance
            scrollTop={scrollTop}
            setIniciarTemporizador={setIniciarTemporizador}
          />
          {listaComponentes}
          <div className="botonesTemporales">
            <button className="buttonTypeUno" onClick={handleFin}>
              Terminar
            </button>
            <button
              className="buttonTypeUno"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Limpiar
            </button>
            <button className="buttonTypeUno" onClick={openModal}>
              Abrir Estadisticas
            </button>
          </div>
          <div>
            {estados.map((estado) => (
              <p key={estado.id}>{estado.valor}</p>
            ))}
          </div>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            <h2>Estadisticas</h2>
            <p>{detectarDispositivo()}</p>
            <p>Tu navegador es: {detectarNavegador()}</p>
            <h4 className="subtitleModal">Tiempo</h4>
            <Temporizador id={0} iniciarTemporizador={iniciarTemporizador} />
            {renderTemporizadores}
            <h4 className="subtitleModal">Clic</h4>
            <ClickCounter count={countTotal} setCount={setCountTotal} />
            {renderClics}
          </Modal>
        </>
      )}
    </div>
  );
}
