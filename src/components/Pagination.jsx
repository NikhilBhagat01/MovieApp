const Pagination = ({ page, setPage }) => {
  const handleClick = (type) => {
    if (type === "inc") {
      setPage((prev) => prev + 1);
      window.scrollTo({ top: 160, behavior: "smooth" });
    }
    if (type === "dec") {
      setPage((prev) => prev - 1);
      window.scrollTo({ top: 160, behavior: "smooth" });
    }
    if (type === "one") {
      setPage(1);
      window.scrollTo({ top: 160, behavior: "smooth" });
    }
  };

  return (
    <div className="pagination">
      <div className="buttons">
        {page !== 1 && (
          <button onClick={() => handleClick("one")}>GO TO PAGE 1</button>
        )}

        <button
          onClick={() => handleClick("dec")}
          className={page === 1 ? "none" : ""}
        >
          {"<<   "}PREV
        </button>
        <span>{page}</span>
        <button onClick={() => handleClick("inc")}>NEXT {"   >>"}</button>
      </div>
    </div>
  );
};

export default Pagination;
