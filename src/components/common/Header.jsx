import { useState } from "react";
import "../../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="brand">
          <div className="brand-icon">LR</div>
          <h2>L & R Enterprises</h2>
        </div>

        <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Our Products⌄</li>
          <li>Products</li>
          <li>Media⌄</li>
          <li>Contact Us</li>
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