import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile accordion states
  const [openDropdown, setOpenDropdown] = useState(null); // "products" | null
  const [openSub, setOpenSub] = useState(null); // "modular" | "steel" | "solar" | null
  const [openNested, setOpenNested] = useState(null); // "pre" | "prefab" | "sandwich" | null

  const isMobile = () => window.innerWidth <= 900;

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSub(null);
    setOpenNested(null);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setOpenDropdown(null);
      setOpenSub(null);
      setOpenNested(null);
    }
  };

  // Level 1
  const handleProductsClick = (e) => {
    if (!isMobile()) return;
    e.preventDefault();
    setOpenDropdown((prev) => (prev === "products" ? null : "products"));
    setOpenSub(null);
    setOpenNested(null);
  };

  // Level 2
  const handleSubClick = (name) => (e) => {
    if (!isMobile()) return;
    e.preventDefault();
    setOpenSub((prev) => (prev === name ? null : name));
    setOpenNested(null);
  };

  // Level 3
  const handleNestedClick = (name) => (e) => {
    if (!isMobile()) return;
    e.preventDefault();
    setOpenNested((prev) => (prev === name ? null : name));
  };

  return (
    <header className="site-header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-label">L&amp;R GREEN INDIA PVT LTD</div>

        <div className="top-info">
          <span className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Info.Lr1995@gmail.com
          </span>
          <span className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +91-8595351363 ; 9758813668
          </span>
        </div>

        <div className="top-social">
          <a href="#fb" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.65l.35-4H14V7a1 1 0 0 1 1-1h3V2z"/>
            </svg>
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
            </svg>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
          <a href="#instagram" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-icon-circle">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="21" stroke="#1a3a6b" strokeWidth="2.5" fill="none"/>
              <path d="M23 5 A18 18 0 0 1 41 23" stroke="#2b6cb0" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <text x="23" y="28" textAnchor="middle" fill="#1a3a6b" fontSize="15px" fontFamily="sans-serif" fontWeight="900">LR</text>
            </svg>
          </div>
          <h2>L &amp; R Enterprises</h2>
        </Link>

        <ul className={`nav-links${menuOpen ? " show-menu" : ""}`}>
          {/* Home */}
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          {/* About */}
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          {/* Our Products */}
          <li
            className={`dropdown${
              openDropdown === "products" ? " mobile-open" : ""
            }`}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={handleProductsClick}
              aria-expanded={openDropdown === "products"}
              aria-haspopup="true"
            >
              <span>Our Products</span>
              <span className="arrow">⌄</span>
            </button>

            <ul className="dropdown-menu">
              {/* Modular Solutions */}
              <li
                className={`dropdown-submenu${
                  openSub === "modular" ? " mobile-sub-open" : ""
                }`}
              >
                <button type="button" onClick={handleSubClick("modular")}>
                  <span>Modular Solutions</span>
                  <span className="side-arrow">›</span>
                </button>

                <ul className="submenu-list">
                  <li>
                    <Link to="/ms-containers" onClick={closeMenu}>
                      MS Containers
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-containers" onClick={closeMenu}>
                      Home Containers
                    </Link>
                  </li>
                  <li>
                    <Link to="/puf-containers" onClick={closeMenu}>
                      PUF Containers
                    </Link>
                  </li>
                  <li>
                    <Link to="/hinge-containers" onClick={closeMenu}>
                      Hinge Containers
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Steel Structures Buildings */}
              <li
                className={`dropdown-submenu${
                  openSub === "steel" ? " mobile-sub-open" : ""
                }`}
              >
                <button type="button" onClick={handleSubClick("steel")}>
                  <span>Steel Structures Buildings</span>
                  <span className="side-arrow">›</span>
                </button>

                <ul className="submenu-list">
                  {/* Pre-engineered Building */}
                  <li
                    className={`nested-submenu${
                      openNested === "pre" ? " mobile-nested-open" : ""
                    }`}
                  >
                    <button type="button" onClick={handleNestedClick("pre")}>
                      <span>Pre-engineered Building</span>
                      <span className="side-arrow">›</span>
                    </button>

                    <ul className="nested-list">
                      <li>
                        <Link to="/factory-building" onClick={closeMenu}>
                          Factory Building
                        </Link>
                      </li>
                      <li>
                        <Link to="/warehouse" onClick={closeMenu}>
                          Warehouse
                        </Link>
                      </li>
                      <li>
                        <Link to="/industrial-sheds" onClick={closeMenu}>
                          Industrial Shell
                        </Link>
                      </li>
                      <li>
                        <Link to="/cold-room" onClick={closeMenu}>
                          Cold Storage
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Prefabricated Modular Building */}
                  <li
                    className={`nested-submenu${
                      openNested === "prefab" ? " mobile-nested-open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={handleNestedClick("prefab")}
                    >
                      <span>Prefabricated Modular Building</span>
                      <span className="side-arrow">›</span>
                    </button>

                    <ul className="nested-list">
                      <li>
                        <Link to="/labour-accommodation" onClick={closeMenu}>
                          Prefab Labour Accommodation
                        </Link>
                      </li>
                      <li>
                        <Link to="/site-office" onClick={closeMenu}>
                          Prefab Site Office
                        </Link>
                      </li>
                      <li>
                        <Link to="/control-rooms" onClick={closeMenu}>
                          Control Rooms
                        </Link>
                      </li>
                      <li>
                        <Link to="/clean-rooms" onClick={closeMenu}>
                          Clean Rooms
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Sandwich Panels */}
                  <li
                    className={`nested-submenu${
                      openNested === "sandwich" ? " mobile-nested-open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={handleNestedClick("sandwich")}
                    >
                      <span>Sandwich Panels</span>
                      <span className="side-arrow">›</span>
                    </button>

                    <ul className="nested-list">
                      <li>
                        <Link to="/puf-panels" onClick={closeMenu}>
                          PUF Sandwich Panels
                        </Link>
                      </li>
                      <li>
                        <Link to="/eps-panels" onClick={closeMenu}>
                          EPS Sandwich Panels
                        </Link>
                      </li>
                      <li>
                        <Link to="/rockwool-panels" onClick={closeMenu}>
                          Rockwool Panels
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/rooftop-room" onClick={closeMenu}>
                      Rooftop Room
                    </Link>
                  </li>

                  <li>
                    <Link to="/lgsf-solutions" onClick={closeMenu}>
                      LGSF Modular Solutions
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Solar Energy Solutions */}
              <li
                className={`dropdown-submenu${
                  openSub === "solar" ? " mobile-sub-open" : ""
                }`}
              >
                <button type="button" onClick={handleSubClick("solar")}>
                  <span>Solar Energy Solutions</span>
                  <span className="side-arrow">›</span>
                </button>

                <ul className="submenu-list">
                  <li>
                    <Link to="/solar-epc" onClick={closeMenu}>
                      Solar EPC Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/mounting-structure" onClick={closeMenu}>
                      Module Mounting Structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/hvac-solutions" onClick={closeMenu}>
                      HVAC Solutions
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Media */}
          <li>
            <NavLink to="/media" onClick={closeMenu}>
              Media
            </NavLink>
          </li>

          {/* Contact */}
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button className="dark-btn desktop-btn">Get Touch</button>

        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>
    </header>
  );
};

export default Header;