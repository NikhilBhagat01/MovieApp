import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Home = ({ genre, page, setTotalmovies, setPage }) => {
  const [movies, setMovies] = useState([]);

  // console.log(genre);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?genre=${
          genre === "All" ? "" : genre
        }&page=${page}`
      );
      // console.log(res.data.data.movie_count);
      setTotalmovies(res.data.data.movie_count);

      setMovies(res.data.data.movies);
    };

    fetchMovies();
  }, [genre, page, setTotalmovies]);

  return (
    <div className="container">
      {/* <div className="pageNo">
        <button onClick={() => setP((prev) => prev + 1)}>Next</button>
      </div> */}
      <div className="cards">
        {movies?.map((m) => (
          <Card key={m.id} m={m} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
