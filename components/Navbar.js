import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link href="/">
        <div className="nav-logo">IMDB | A-I</div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/">Search</Link>
        </li>
        <li>
          <Link href="/userhistory">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;