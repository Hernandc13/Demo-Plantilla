function Button(props) {
    return (
      <button type="button" className="btn cube cube-hover">
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">{props.text}</div>
      </button>
    );
  }