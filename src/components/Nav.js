import { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav() {
    const [menuToggle, setMenuToggle]= useState(false);

    function menuHandle() {
        menuToggle ? setMenuToggle(false) : setMenuToggle(true);
        
        // menuToggle ? console.log("false!") : console.log("true!");
    }

    return (
        <nav className={menuToggle ? "site-navigation toggled" : "site-navigation"} id="site-navigation">
            {/* hamburger menu button & svg */}
            <button className="menu-toggle" aria-controls="header-menu" aria-expanded={menuToggle ? "true" : "false"} aria-label="Menu Toggle" onClick={() => menuHandle()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <title>Menu icon</title>
                <path d="M2 5h20"></path>
                <path d="M2 12h20"></path>
                <path d="M2 19h20"></path>
            </svg>
            </button>

            {/* ul of nav links */}
            <ul className="nav-menu" id="header-menu">
                <li>
                    <Link to="/about" onClick={() => menuHandle()} >About</Link>
                </li>
                <li>
                    <Link to="/favourites" onClick={() => menuHandle()}>Favourites</Link>
                </li>
            </ul>
        </nav>
    );
}