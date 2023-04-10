
function Instrucciones() {
    return(
        <div className="contenedor-instrucciones">
        <br/><br/>
            <div className="contenedor-titulo animate__animated animate__fadeInUp animate__delay-1s">
                <h4 >Instrucciones</h4>
            </div>
            <div className="contenedor-texto">
                <div className="contenedor-texto-puntos animate__animated animate__fadeInUp animate__delay-2s">
                        <h4>Bienvenido a la actividad</h4>
                        <label>La actividad tiene como objetivo formar  las palabras correctas, para hacerlo deberas:</label>
                        <br/>
                        <h5>Lee con atenciòn cada pregunta.</h5>
                        <div className="puntos">
                            <ul>
                                <li>
                                    Selecciona una letra, haciedno clic sobre ella en el tablero que està en la pantalla o presionàndola en tu teclado fìsico.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Si la letra que selecionaste forma parte de la palabra correcta, aparecerà en el espacio correspondiente.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Repite el procedimiento hasta formar la palabra correcta.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Por cada letra errònea que selecciones, iràn apareciendo las partes del ahorcado, solo tendràs 5 posibilidades de fallar.
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="footer animate__animated animate__fadeInUp animate__delay-3s">
                    <strong>¿Estàs listo? ¡Juguemos!</strong>
                    <button className="btn-general animate__animated animate__fadeInUp animate__delay-4s"> <Link to="/Ahorcado" className="link">Iniciar actividad</Link></button>
                </div>
            </div>
        </div>
    );
    
}
