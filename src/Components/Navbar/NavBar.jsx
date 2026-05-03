import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  // const userData = useSelector((state) => state.user.userData);
  const [userData] = useState(() => {
    const storedUserData = window.localStorage.getItem("userId");
    if (storedUserData && storedUserData !== "undefined") {
      return JSON.parse(storedUserData);
    }
    return undefined;
  });
  return (
    <header className="header">
      <Link to="/home" className="logo">
        Logo
      </Link>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        {userData && (
          <>
            <Link to="/appointment">Turnos</Link>
            <Link to="/appointment/schedule">Agendar Turno</Link>
          </>
        )}
        <Link to="*">Contacto</Link>
        <Link to="*">About</Link>
        {userData ? (
          <span className="userLogged">
            Hola, <strong>{userData.name}</strong>
          </span>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
