import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import ProfPic from "../../images/profile-pic-cropped.jpg";
import LogoBN from "../../images/Logos/logo-bn.png";
import LogoColor from "../../images/Logos/logo-cl.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Sección izquierda */}
      <div className="left-section">
        <Link to="/BooksList" className="logo-container">
          <img src={LogoBN} alt="Logo" className="logo-bn" />
          <img src={LogoColor} alt="Logo" className="logo-color" />
        </Link>
        <p className="title">
          <b>Book</b>Nook
        </p>
      </div>

      {/* Sección central: search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books by author, title, genre or ISBN..."
        />
      </div>

      {/* Sección derecha */}
      <div className="right-section">
        <button className="profile-button" onClick={() => navigate("/profile")}>
          <img src={ProfPic} alt="Perfil" className="profile-pic" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
