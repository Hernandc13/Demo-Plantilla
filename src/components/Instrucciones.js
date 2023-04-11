
function Instrucciones() {
    return(
        <div className="contenedor-instrucciones">
              <img  className="imagen-principal-instrucciones animate__animated animate__fadeInUp animate__delay-0.5s" src="/src/imagenes/saludo.png" alt="Bienvenida" />
        <br/><br/>
            <div className="contenedor-titulo animate__animated animate__fadeInUp animate__delay-1s">
                <h4 >Instrucciones</h4>
            </div>
            <div className="contenedor-texto">
                <div className="contenedor-texto-puntos animate__animated animate__fadeInUp animate__delay-2s">
                        <h4>Bienvenido a la actividad</h4>
                        <label>La actividad tiene como objetivo formar  las palabras correctas, para hacerlo deberas:</label>
                        <br/>
                        <h5>Lee con atención cada pregunta.</h5>
                        <div className="puntos">
                            <ul>
                                <li>
                                    Selecciona una letra, haciendo clic sobre ella en el tablero que está en la pantalla o presionándola en tu teclado físico.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Si la letra que selecionaste forma parte de la palabra correcta, aparecerá en el espacio correspondiente.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Repite el procedimiento hasta formar la palabra correcta.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Por cada letra errónea que selecciones, irán apareciendo las partes del ahorcado, solo tendrás 5 posibilidades de fallar.
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="footer animate__animated animate__fadeInUp animate__delay-3s">
                    <strong>¿Estás listo? ¡Juguemos!</strong>
                    <Link to="/Ahorcado" className="animate__animated animate__fadeInUp animate__delay-4s" ><button className="btn-general-actividades">Iniciar actividad</button></Link>
                </div>
            </div>
        </div>
    );
    
}
