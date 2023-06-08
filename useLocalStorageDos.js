function useLocalStorageDos(key, initialValue) {
  //Estado que asigna el valor guardao en storage o el valor inicial en caso de estar vacio
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      //constante que extrae con la key que se le pasa
      const item = window.localStorage.getItem(key);
      //Si encontro algo guarado, transforma la cadena en objeto de JS, sino le asigna el valor inicial que se le pasa
      //cadena a objeto
      /* const reconstruido = (JSON.parse(item)).map((obj) => {
        const Componente = eval(obj.componente);
        const componenteJSX = <Componente {...obj.datosComponente} />;
      
        return {
          id: obj.id,
          componente: componenteJSX,
          titulo: obj.titulo,
          active: obj.active,
        };
      });
      console.log(reconstruido) */
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  //Constante que actuliza los valores guardados en storage
  const setValue = (value) => {
    /* const desestructurado = value.map((obj) => {
      const componentName = obj.componente.type.name;
      const datosComponente = {
        enviarDatos: obj.componente.props.enviarDatos,
        i: obj.componente.props.i,
      };

      return {
        id: obj.id,
        componente: componentName,
        datosComponente: datosComponente,
        titulo: obj.titulo,
        active: obj.active,
      };
    }); */
    try {
      //Se actualiza el estado creado antes con el valor que se le pasa
      setStoredValue(value);
      //Almacena los valores en storage convirtiendo un
      //objeto a cadena
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  //Retirna el valor y el metodo para actualizar
  return [storedValue, setValue];
}
