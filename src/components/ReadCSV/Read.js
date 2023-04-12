
function Read() {

/*Funciòn para leer archivo csv*/
    const readFile = ( e ) => {
  
      const file = e.target.files[0];
      if ( !file ) return;
  
      const fileReader = new FileReader();
  
      fileReader.readAsText( file );
  
      fileReader.onload = () => {
        alert( fileReader.result );
        /*Recorremos el a.result para obtener la información*/
        
      }
  
      fileReader.onerror = () => {
        console.log( fileReader.error );
      }
  
    }

    return (
      <div className="contenedor-principal-read">
       
          
          <h1>Leer archivos de texto </h1>
  
          <br />
          <input className="btn-general-upload"
            type="file"
            multiple={ false }
            onChange={ readFile }
          />
  
     
      </div>
    );
  }