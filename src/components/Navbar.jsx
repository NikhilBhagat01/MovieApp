import { useNavigate } from "react-router-dom";

const Navbar = ({ setPage, setGenre }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    setPage(1);
    setGenre("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <span className="link" onClick={handleHome}>
        MOVIE APP
      </span>
    </div>
  );
};

export default Navbar;
