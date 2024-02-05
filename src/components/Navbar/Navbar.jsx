import React, { useState } from "react";
import "./Navbar.css";
import logo from './logo.svg'
import Search from "./Search";
import Navtabs from "./Navtabs";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
      console.log('I got clicked')
    };
  return (
    <nav class="navbar">
      <div className="logo"><img src={logo} alt="" /></div>
      <Search />
      <div className="customer-profile flex-row">
        <Navtabs />
      </div>
      <button className="toogle-button" onClick={toggleMenu}><i class="fa-solid fa-bars"></i></button>
      {isMenuOpen ?  <MobileNav /> : ''}
    </nav>
  );
}

export default Navbar;
