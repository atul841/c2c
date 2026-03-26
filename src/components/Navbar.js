import "../css/Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* 🔝 TOP BAR */}
      <div className="topbar">
        <p>📞 +91 9319931949 | ✉️ infoc2innovations@gmail.com</p>
      </div>

      <header className="navbar">
        <div className="logo">2C</div>

        {/* 🍔 MOBILE ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAV MENU */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#">Home</a>

          {/* SERVICES */}
          <div className="dropdown">
            <span onClick={() => toggleDropdown("services")}>
              Services ▾
            </span>

            <div className={activeDropdown === "services" ? "dropdown-menu show" : "dropdown-menu"}>
              <a href="#">Architecture</a>
              <a href="#">Interior Design</a>
              <a href="#">BIM Solutions</a>
            </div>
          </div>

          <a href="#">Verticals</a>

          {/* PROJECTS */}
          <div className="dropdown">
            <span onClick={() => toggleDropdown("projects")}>
              Projects ▾
            </span>

            <div className={activeDropdown === "projects" ? "dropdown-menu show" : "dropdown-menu"}>
              <a href="#">Residential</a>
              <a href="#">Commercial</a>
            </div>
          </div>

          <a href="#">About Us</a>

          <button className="contact-btn">Contact Us</button>
        </nav>
      </header>
    </>
  );
}