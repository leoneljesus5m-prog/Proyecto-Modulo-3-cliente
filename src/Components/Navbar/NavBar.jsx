import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { NavItem } from "../NavItem/NavItem";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  // const user = useSelector((state) => state.user.userData);
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

        <Link to="*">Contacto</Link>
        <Link to="*">About</Link>

        <NavItem icon="👤">
          <div className="dropdown">
            {userData ? (
              <>
                <p>Bienvenido! {userData.name}</p>
                <Link to="/appointment" className="menu-item">
                  Mis Turnos
                </Link>
                <Link to="/appointment/schedule" className="menu-item">
                  Agendar Turno
                </Link>
                <button className="menu-button">Logout</button>
              </>
            ) : (
              <>
                <p>Inicia sesión para continuar</p>
                <Link to="/login" className="menu-item">
                  Iniciar sesión
                </Link>
                <Link to="/register" className="menu-item">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </NavItem>
      </nav>
    </header>
  );
};

export default NavBar;
