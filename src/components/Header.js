import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <ul className="nav-links">
          <li>
            <Link className="links" to="/watchlist">
              WatchList
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;