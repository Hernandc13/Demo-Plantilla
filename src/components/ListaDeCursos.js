
function ListaDeCursos(){
    const data=[
        {id:1 , texto: "curso1" , completada:false ,  eliminarcurso, eliminarcurso , completarcurso},
        {},
    ];

    /**Se inicializa la variable cursos como arreglo vacio,
     * despues se renderisa una lista de componentes
     */
    const [cursos,setcursos]=React.useState([]);
    const agregarcurso=curso=>{
         if(curso.texto.trim()){
            curso.texto=curso.texto.trim();
            const cursosActualizadas = [curso,...cursos];
            setcursos(cursosActualizadas);
         }
    }

    const eliminarcurso= id=>{
        const cursosActualizadas=cursos.filter(curso => curso.id !==id);
        setcursos(cursosActualizadas);
    }
    const completarcurso= id =>{
        const cursosActualizadas=cursos.map(curso=>{
            if(curso.id===id){
                curso.completada=!curso.completada;
            }
            return curso;
        });
        setcursos(cursosActualizadas);
    }
    return(
        <>
        <CursoFormulario onSubmit={agregarcurso}/>
        <div className="cursos-lista-contenedor">
            {
                cursos.map((curso)=>
                    <Curso
                        key={curso.id}
                        id={curso.id}
                        texto={curso.texto}
                        completada={curso.completada}
                        eliminarcurso={eliminarcurso}
                        completarcurso={completarcurso}
                    />
                )
            }
        </div>
        </>
    );
}
