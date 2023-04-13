function SplitUnit(props) {
  return (
    <div className="containSplitUnit">
      <img className="imgSplit" src={props.url} />
      <div className="filtro" style={{background: props.color}}></div>
      <p className="textSplit">{props.text}</p>
      <ButtonSplit/>
    </div>
  );
}