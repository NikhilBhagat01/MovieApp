import Navbar from "./components/Navbar";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SearchPage from "./pages/SearchPage";
import Search from "./components/Search";
import Movetotop from "./components/Movetotop";
import { useState } from "react";

export default function App() {
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);
  const [totalmovies, setTotalmovies] = useState();

  return (
    <div className="App">
      <Navbar />
      <Search
        genre={genre}
        setGenre={setGenre}
        page={page}
        setPage={setPage}
        totalmovies={totalmovies}
      />
      <Movetotop />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                genre={genre}
                setTotalmovies={setTotalmovies}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="search/movie/:id" element={<Movie />} />
          <Route
            path="/search"
            element={<SearchPage genre={genre} page={page} />}
          />
        </Routes>
      </main>
    </div>
  );
}
