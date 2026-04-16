import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">Logo</a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Appointments</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
        <a href="/">Login</a>
      </nav>
    </header>
  );
};

export default NavBar;
