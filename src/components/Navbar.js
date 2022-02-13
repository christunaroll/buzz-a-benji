import React from 'react'
import ChickenLeg from "../images/chicken.png";
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="left_side">
            <img src={ChickenLeg} />
            <h2 className="nav_header">BUZZ A BENJI!</h2>
        </div>
        <div className="right_side">
            <Link to ="/"> Home </Link>
            <Link to ="/About_Benji"> About Benji!</Link>
        </div>
    </div>
  );
}

export default Navbar
