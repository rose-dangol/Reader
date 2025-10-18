import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content-left">
          <a className="nav-logo" href="/">
            <img src="/images/logo11.png" alt="Logo" className="nav-logo" />
          </a>
          <div className="nav-links">
            <input type="text" placeholder="Search" className="nav-search"/>
            {/* <SearchIcon/> */}
            <Link to="/" className="nav-link">Library</Link>
            <Link to="/discover" className="nav-link">Discover</Link>
            <Link to="/" className="nav-link">Discuss</Link>
          </div>
        </div>
        <div className="nav-content-right"><Link to="/auth" style={{textDecoration:"none"}}>Log in</Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
