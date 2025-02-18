import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import ProfPic from "../../images/profile-pic-cropped.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/BookLogo.png" alt="Logo" className="logo" />
        <p className="title"><b>Book</b>Nook</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
      </div>
      <button className="profile-button" onClick={() => navigate("/profile")}>
        <img
          src={ProfPic}
          alt="Perfil"
          className="profile-pic"
        />
      </button>
    </nav>
  );
};

export default Navbar;

