import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className='navLink'>
                <Link to="/">Homepage</Link>
            </div>
            <div className='navLink'>
                <Link to="/Details">Details</Link>
            </div>
            <div className='navTitle'>The Building App</div>
        </nav>
    );
}

export default Navbar;