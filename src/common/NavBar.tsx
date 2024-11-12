import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';  // Asegúrate de tener este archivo para los estilos

export const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Events Master</Link>
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className="nav-link">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign_in" className="nav-link">Sign In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
