import { Link } from "react-router-dom";

const Card = ({ m }) => {
  const truncate = (string, limit) => {
    if (string?.length <= limit) {
      return string;
    } else {
      return string?.slice(0, limit) + "...";
    }
  };

  return (
    <Link to={`movie/${m.id}`} className="card">
      <img
        src={
          m.medium_cover_image ||
          "https://files.prokerala.com/movies/assets/img/no-poster-available.jpg"
        }
        alt=""
      />

      <h2>{truncate(m.title, 25)}</h2>

      <p>{m.year}</p>
    </Link>
  );
};

export default Card;
