import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">IMDB | Adobe Interview</div>
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