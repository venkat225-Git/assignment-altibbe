import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"><h2>Altibbe Transparency</h2></Link>
        </div>

        <ul className="navbar-links">
          <Link to='/'><li>Home</li></Link>
          <Link to='/form'><li>Product Form</li></Link>
          <Link to="/ai"><li>AI Questions</li></Link>
          <Link to="/report"><li>Report</li></Link>
          <Link to="/sign"><li>Sign up</li> </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
