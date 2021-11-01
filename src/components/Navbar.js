import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navLinks">Logo</div>
                <div className="navLinks">Company-text</div>
            </div>
            <div className="navbar-right">
                <NavLink className = "navLinks" to="/Home">Home</NavLink>
                <NavLink ClassName = "navLinks" style={{textDecoration: 'none'}} to="/ShowCustomers">Show Customers</NavLink>
                <NavLink className = "navLinks" to="/AddCustomers">Add Customers</NavLink>
            </div>
        </nav>
    )
}


export default Navbar