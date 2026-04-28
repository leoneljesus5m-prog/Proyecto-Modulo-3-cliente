import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/home" className="logo">Logo</Link>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/appointment">Turnos</Link>
        <Link to="/appointment/schedule">Agendar Turno</Link>
        <Link to="*">Contacto</Link>
        <Link to="*">About</Link>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default NavBar;
