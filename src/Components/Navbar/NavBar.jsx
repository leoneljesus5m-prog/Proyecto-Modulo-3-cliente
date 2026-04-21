import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">Logo</a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Turnos</a>
        <a href="/">Contacto</a>
        <a href="/">About</a>
        <a href="/">Register/Login</a>
      </nav>
    </header>
  );
};

export default NavBar;
