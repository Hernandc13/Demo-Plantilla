function Split() {
  return (
    <div className="contenedorPrincipal">
      <div className="containSplit">
        {splitConfig.map((config) => (
          <SplitUnit
            key={config.id}
            text={config.text}
            url={config.urlImg}
            color={config.color}
          />
        ))}
      </div>
    </div>
  );
}
