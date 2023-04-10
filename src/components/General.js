
function General() {
    return(
        <div className="contenedor-principal">
          <h1 className="animate__animated animate__fadeInUp animate__delay-0.5s">Plantilla Subitus Mx</h1>
          <img  className="imagen-general animate__animated animate__fadeInUp animate__delay-1s" src="https://www.subitus.com/wp-content/uploads/2019/07/isotipo_subitus_blanco_fondotrans_150x150-01-150x150.png" alt="" />
            <h1 className="animate__animated animate__fadeInUp animate__delay-2s">Bienvenido</h1>
            <h2 className="animate__animated animate__fadeInUp animate__delay-2s">Demo de funcionalidad</h2>
            <br/>
            <button className="btn-general animate__animated animate__fadeInUp animate__delay-3s"> <Link to="/Instrucciones" className="link">Iniciar</Link></button>
         
        </div>
    );
    
}
