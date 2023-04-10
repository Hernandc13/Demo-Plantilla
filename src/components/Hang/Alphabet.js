function Letter(props){
    return(
        <button onClick={props.func}>
            {props.letter}
        </button>
    )
}