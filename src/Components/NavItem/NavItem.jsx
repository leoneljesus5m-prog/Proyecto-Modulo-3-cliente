import { useState } from "react";
import "./NavItem.css";

export const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};