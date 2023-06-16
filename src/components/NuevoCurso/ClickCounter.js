function ClickCounter({ count, setCount }) {
  React.useEffect(() => {
    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <p className="parrafoTempor">Clics totales: {count}</p>
}
