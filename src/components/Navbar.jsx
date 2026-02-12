import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar container">
      <h2 className="logo">John</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#works">Works</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
