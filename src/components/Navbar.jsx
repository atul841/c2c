import { useState } from "react";
import "./css/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <span>📞 +91 9319931949</span>
        <span>✉️ info@company.com</span>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">2C</div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          
          <li>Home</li>

          {/* SERVICES DROPDOWN */}
          <li className="dropdown">
            Services ▾
            <ul className="dropdown-menu">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </li>

          <li>Verticals</li>
          <li>Projects</li>

          {/* ABOUT DROPDOWN */}
          <li className="dropdown">
            About Us ▾
            <ul className="dropdown-menu">
              <li>Company</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </li>

        </ul>

        <button className="contact-btn">Contact Us</button>

        {/* MOBILE MENU BUTTON */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </>
  );
}