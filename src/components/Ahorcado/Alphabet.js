function Letter(props){
    return(
        <button onClick={props.func} className="buttonAlphabet">
            {props.letter}
        </button>
    )
}