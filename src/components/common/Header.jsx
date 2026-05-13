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

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-icon">LR</div>
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

        <button className="dark-btn desktop-btn">Get In Touch</button>

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