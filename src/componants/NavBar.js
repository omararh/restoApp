import React from 'react';
import {Link} from 'react-router-dom';
import '../componants/navBar.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
       <header>
           
           <Link to = "/home">
                <h3 className = "text-3xl font-light">MK<span>'s</span></h3>
           </Link>
            <nav ref={navRef}>
                <Link to = "/home" onClick={showNavbar} >Acceuil</Link>
                <Link to = "/about" onClick={showNavbar} >A propos</Link>
                <Link to = "/" onClick={showNavbar} >Menu</Link> 
     
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavBar;
