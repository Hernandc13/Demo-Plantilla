function NuevoCurso() {
  //array con Ids de componantes visibles, por defecto 1
  const [datos, setDatos] = useLocalStorage("arrayDatos", [1]);

  //DatosHijo recibe el indice del componente cuando se termina
  const recibirDatos = (datosHijo) => {
    //Guardamos el nuevo indice recibido en un array
    const newDatos = [...datos, datosHijo];

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
    const scrolled = (datosHijo / total) * 100;
    setScrollTop(scrolled.toFixed(0));
  };

  const initialConfigCurso = [
    {
      id: 1,
      componente: <Carrusel enviarDatos={recibirDatos} i={1} />,
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

  const [configCurso, setConfigCurso] = useLocalStorageDos(
    "configInicial",
    initialConfigCurso
  );

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

  return (
    <div className="contenedorPrincipal">
      <BarraAvance scrollTop={scrollTop} />
      {listaComponentes}
      <button onClick={openModal}>Abrir Estadisticas</button>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>Estadisticas</h2>
        <p>{detectarDispositivo()}</p>
        <p>Tu navegador es: {detectarNavegador()}</p>
      </Modal>
    </div>
  );
}
