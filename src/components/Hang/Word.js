function Word(props) {
  return (
    <React.Fragment>
      {props.letter === " "
       ? (
        <div className="wordSecret" style={{border: 'none'}}><span></span></div>
      ) : (
        <div className="wordSecret"><span>{props.letter}</span></div>
      )}
    </React.Fragment>
  );
}
