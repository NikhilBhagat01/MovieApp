const Movetotop = () => {
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button onClick={scrolltotop} className="top">
      <span role="img" aria-label="top">
        ⬆️
      </span>
    </button>
  );
};

export default Movetotop;
