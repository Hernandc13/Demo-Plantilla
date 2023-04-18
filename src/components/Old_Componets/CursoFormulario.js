function CursoFormulario(props) {
    const [input,setInput]=React.useState('');
 
    const manejarCambio=e=>{
       setInput(e.target.value);
    }
    const manejarEnvio=e=>{
        e.preventDefault();
        
        const cursoNueva={
            id:Math.random()*10+1,
            texto: input,
            completada:false
        }
        props.onSubmit(cursoNueva);
    }
    return(
        <form className="curso-formulario"
        onSubmit={manejarEnvio}
        >
            <input type="text" 
                className="curso-input"
                placeholder="Nombre del curso"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="curso-boton">
                Nuevo Curso
            </button>
        </form>
    );
}
