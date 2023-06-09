function NuevoCurso() {
  //array con Ids de componantes visibles, por defecto 1
  const [datos, setDatos] = useLocalStorage("arrayDatos", [1]);

  //DatosHijo recibe el indice del componente cuando se termina
  const recibirDatos = (indice) => {
    //Guardamos el nuevo indice recibido en un array
    const newDatos = [...datos, indice];

    //Next alamcena active: true que encuentre en array newDatos
    const next = configCurso.map((config) => {
      for (let index = 0; index < newDatos.length; index++) {
        if (newDatos[index] == config.id) {
          return {
            ...config,
            active: true,
          };
        }
      }
      return config;
    });

    //Actualizamos datos y configcurso
    setDatos(newDatos);
    setConfigCurso(next);

    //Actualizamos el avance con el total y el indice que se recibe
    const total = initialConfigCurso.length;
    const scrolled = (indice / total) * 100;
    setScrollTop(scrolled.toFixed(0));
  };

  const recibirDatos2 = (boolean, indice) => {
    
    const nextEstados = estados.map(est =>{
      if(indice == est.id){
        return {
          ...est,
          valor: boolean
        }
      }else{
        return est
      }
    })
    setEstados(nextEstados)
    console.log(nextEstados)
  };

  const initialConfigCurso = [
    {
      id: 1,
      componente: (
        <Carrusel
          enviarDatos={recibirDatos}
          enviarDatos2={recibirDatos2}
          i={1}
        />
      ),
      titulo: "Titulo de prueba",
      active: true,
    },
    {
      id: 2,
      componente: <AcordeonDos enviarDatos={recibirDatos} i={2} />,
      titulo: "Titulo de prueba 2",
      active: true,
    },
  ];

  const [configCurso, setConfigCurso] = React.useState(initialConfigCurso);

  /* Logica de Modal */
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* Logica de Modal */

  //Estado que controla barra general de avance
  const [scrollTop, setScrollTop] = useLocalStorage("barraAvance", 0);

  //Se renderiza lista de coponentes
  const listaComponentes = configCurso.map((comp) => (
    <section key={comp.id}>
      {comp.active && (
        <div className="contNuevoCursoComponent">
          <h2 className="titleNuevoCurso">{comp.titulo}</h2>
          {comp.componente}
        </div>
      )}
    </section>
  ));

  /* Logica de temporizadores */
  const [estados, setEstados] = React.useState(
    configCurso.map((comp) => ({ id: comp.id, valor: false }))
  );
  const [iniciarTemporizador, setIniciarTemporizador] = React.useState(false);
  const handleInicio = () => {
    setIniciarTemporizador(true);
  };
  const handleFin = () => {
    setIniciarTemporizador(false);
  };
  /* Logica de temporizadores */

  return (
    <div className="contenedorPrincipal">
      <BarraAvance
        scrollTop={scrollTop}
        setIniciarTemporizador={setIniciarTemporizador}
      />

      <div className="botonesTemporales">
        <button className="buttonTypeUno" onClick={handleInicio}>
          Iniciar curso
        </button>
      </div>

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
        <Temporizador id={0} iniciarTemporizador={iniciarTemporizador} />
        <Temporizador
          id={1}
          iniciarTemporizador={estados[0].valor}
          nombre={"Carrusel"}
        />
      </Modal>
    </div>
  );
}
