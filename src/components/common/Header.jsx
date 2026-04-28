import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="top-label">L&R GREEN INDIA PVT LTD</div>

        <div className="top-info">
          <span>✉ Info.Lr1995@gmail.com</span>
          <span>☎ +91-8595351363 ; 9758813668</span>
        </div>

        <div className="top-social">
          <span>f</span>
          <span>in</span>
          <span>𝕏</span>
          <span>◎</span>
        </div>
      </div>

      <nav className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-icon">LR</div>
          <h2>L & R Enterprises</h2>
        </Link>

        <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" onClick={closeMenu}>
              Our Products⌄
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" onClick={closeMenu}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/media" onClick={closeMenu}>
              Media⌄
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button className="dark-btn desktop-btn">Get Touch</button>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>
    </header>
  );
};

export default Header;