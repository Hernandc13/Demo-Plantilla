
function Curso({id,texto,completada, completarcurso, eliminarcurso}) {
    return(
        <div className={completada?'curso-contenedor completada':'curso-contenedor'}>
            <div className="curso-texto"
                onClick={()=>completarcurso(id)}>
                {texto}
            </div>
            <div className="curso-contenedor-iconos"
             onClick={()=>eliminarcurso(id)}>
             <img src="https://img.icons8.com/ios/1x/trash.png" alt="" />
            </div>
            <div className="container-editar">
                <img src="https://img.icons8.com/ios/1x/edit-row.png" alt="" />
          
            </div>
            
        </div>
    );
    
}
