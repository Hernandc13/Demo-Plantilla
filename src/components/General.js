
function General() {
    return(
        <div className="contenedor-principal">
              <img  className="imagen-principal animate__animated animate__fadeInUp animate__delay-0.5s" src="/src/imagenes/camisa.png" alt="Bienvenida" />
          <h1 className="animate__animated animate__fadeInUp animate__delay-1s">Plantilla Subitus Mx</h1>
          <img  className="imagen-general animate__animated animate__fadeInUp animate__delay-2s" src="https://www.subitus.com/wp-content/uploads/2019/07/isotipo_subitus_blanco_fondotrans_150x150-01-150x150.png" alt="" />
            <h1 className="animate__animated animate__fadeInUp animate__delay-3s">Bienvenido</h1>
            <h2 className="animate__animated animate__fadeInUp animate__delay-4s">Demo de funcionalidad</h2>
            <br/>
            <Link to="/Instrucciones" className="animate__animated animate__fadeInUp animate__delay-5s" ><button className="btn-general">Iniciar</button></Link>
        </div>
    );
    
}
