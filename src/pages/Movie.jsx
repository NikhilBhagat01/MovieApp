import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Movie = () => {
  const [mov, setMov] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        setLoading(false);
        setMov(res.data.data.movie);
        // console.log(res.data.data.movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const truncate = (string, limit) => {
    if (string?.length <= limit) {
      return string;
    } else {
      return string?.slice(0, limit) + "...";
    }
  };

  return (
    <div className="movie">
      {loading ? (
        <h2 style={{ color: "white", marginLeft: "300px", fontSize: "18px" }}>
          Loading...
        </h2>
      ) : (
        <div className="moviecontainer">
          <img src={mov.large_cover_image} alt="" />
          <h1>{mov.title_long}</h1>
          <div className="genre">
            <h2 style={{ display: "inline-block" }}>Genres :</h2>
            {mov?.genres?.map((g) => (
              <span>{g} </span>
            ))}
          </div>
          <div className="genre">
            <h2 style={{ display: "inline-block" }}>Language :</h2>{" "}
            <span>{mov?.language?.toUpperCase()}</span>
          </div>
          <div className="imdb">
            <a
              href={`https://www.imdb.com/title/${mov.imdb_code}`}
              target="_blank"
              rel="noreferrer"
            >
              IMDB {mov.rating} / 10
            </a>
          </div>
          <div className="yt ">
            <a
              href={`https://www.youtube.com/watch?v=${mov.yt_trailer_code}`}
              target="_blank"
              rel="noreferrer"
            >
              TRAILER
            </a>
          </div>

          <p>
            {" "}
            <h2 style={{ display: "inline-block" }}>Plot : </h2>{" "}
            {truncate(mov.description_intro, 400) || "N/A"}
          </p>
          <div className="dwdlinks">
            {mov?.torrents?.map((m, i) => (
              <a key={i} className="dwd" href={m.url}>
                {m.quality}.{m.type.toUpperCase()}
              </a>
            ))}
          </div>

          {/* <div className="video">
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/watch?v=${mov.yt_trailer_code}`}
            frameborder="0"
            allowfullscreen
            title="trailer"
          />
         
        </div> */}
        </div>
      )}
    </div>
  );
};

export default Movie;
