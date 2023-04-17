function Split() {
  const splitConfig = [
    {
      urlImg:
        "http://cdn.shopify.com/s/files/1/0257/8812/1137/products/image_55de00df-8570-481e-8716-c04c6e670a08_1200x1200.jpg?v=1657554803",
      text: "Playstation 5",
      color: "blue",
      id: 1,
    },
    {
      urlImg: "https://i.ytimg.com/vi/0tUqIHwHDEc/maxresdefault.jpg",
      text: "Xbox Series X",
      color: "black",
      id: 2,
    },
  ];
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
