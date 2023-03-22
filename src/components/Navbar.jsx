import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        MOVIE APP
      </Link>
    </div>
  );
};

export default Navbar;
