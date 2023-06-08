function BarraAvance({scrollTop}) {
  return (
    <div className="progressMainWrapper">
      <div className="progressMainStyle" style={{ width: `${scrollTop}%` }}>
        <h4>{`${scrollTop}%`}</h4>
      </div>
    </div>
  );
}
