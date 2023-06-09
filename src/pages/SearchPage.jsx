import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = ({ genre }) => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("q");
  const [searchResult, setSearchResult] = useState([]);
  // console.log(query);

  useEffect(() => {
    const fetchBySearch = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://yts.mx/api/v2/list_movies.json?query_term=${query}&genre=${genre}`
        );
        setLoading(false);
        setSearchResult(res.data.data.movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBySearch();
  }, [query, genre]);
  return (
    <div className="container">
      <h3 className="searchtext">
        Search Results For : <span>{query.toUpperCase()}</span>
      </h3>

      {loading ? (
        <h2
          style={{
            color: "white",
            marginLeft: "9px",
            marginTop: "40px",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          Searching...
        </h2>
      ) : searchResult?.length !== 0 ? (
        <>
          {" "}
          <div className={searchResult?.length < 4 ? "smallgrid" : "cards"}>
            {searchResult?.map((m) => (
              <Card key={m.id} m={m} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="searchtext mt">No Movies Found </h2>
        </>
      )}

      {/* {searchResult?.length !== 0 ? (
        <>
          {" "}
          <div className={searchResult?.length < 4 ? "smallgrid" : "cards"}>
            {searchResult?.map((m) => (
              <Card key={m.id} m={m} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="searchtext mt">No Movies Found </h2>
        </>
      )} */}
    </div>
  );
};

export default SearchPage;
