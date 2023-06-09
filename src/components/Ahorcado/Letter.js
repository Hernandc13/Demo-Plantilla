function Letter({letra, funcion}){
    const [disable, setDisable] = React.useState(false)
    
    return(
        <button onClick={funcion} className="buttonAlphabet">
            {letra}
        </button>
    )
}