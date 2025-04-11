import React, { useState } from "react";
import logo from "../images/mavix-transparent.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-3 py-2">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="d-flex align-items-center text-white text-decoration-none">
            <img 
              src={logo} 
              alt="Mavix Logo" 
              className="logo-img"
              style={{ height: "100px" }}
            />
          </a>

          {/* Hamburger Icon - Visible only on mobile */}
          <button 
            className="navbar-toggler d-lg-none" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "3.0rem",
              cursor: "pointer"
            }}
          >
            ☰
          </button>

          {/* Navigation Links - Hidden on mobile when menu is closed */}
          <div className={`${isOpen ? 'd-block' : 'd-none d-lg-block'}`}>
            <ul className="nav flex-column flex-lg-row">
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  Kryefaqja
                </a>
              </li>
              <li className="nav-item">
                <a href="#sherbimet" className="nav-link text-white">
                  Shërbimet
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonialz" className="nav-link text-white">
                Dëshmitë
                </a>
              </li>
              <li className="nav-item">
                <a href="#kontaktz" className="nav-link text-white">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}