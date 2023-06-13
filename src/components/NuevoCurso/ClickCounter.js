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

  return (
    <div>
      <p>Clics totales: {count}</p>
    </div>
  );
}
