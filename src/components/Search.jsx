import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setGenre, genre, page, setPage, totalmovies }) => {
  const allGenres = [
    "All",
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short Film",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western",
  ];

  const path = window.location.pathname;
  // console.log(path.includes("movie"));

  // console.log(genre);
  const [query, setQuery] = useState("");
  // console.log(typeof page);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (!query) return;

    navigate(`/search?q=${query}`);
    setQuery("");
  };

  const handleGenre = (e) => {
    if (path.includes("movie")) {
      navigate("/");
      setPage(1);
      setGenre(e.target.value);
    } else {
      setPage(1);
      setGenre(e.target.value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${query}`);
      setQuery("");
    }
  };
  return (
    <div className="search">
      <div className="searchcontainer">
        <p>Search Movie:</p>
        <div className="inputcontainer">
          <input
            type="text"
            value={query}
            onKeyDown={handleKeyDown}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={query.length <= 2}
            className="searchbtn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="filtercontainer">
          <div className="scontainer">
            <p>Genre :</p>
            <select value={genre} onChange={handleGenre} name="genre" id="gen">
              {allGenres.map((g, i) => (
                <option key={i}>{g}</option>
              ))}
            </select>
          </div>

          {/* PAGE NO FILTER */}

          {/* <div className="scontainer">
            <p>page no :</p>
            <select
              value={page}
              onChange={(e) => setPage(+e.target.value)}
              name="page"
              id="pageno"
            >
              {[...Array(30)].map((_, i) => {
                return <option key={i}>{i + 1}</option>;
              })}
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
