import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <i class="fad fa-atom logo"></i>
                <div className="navLeftText">Atoms. Register with care</div>
            </div>
            <div className="navbar-right">
                <NavLink className = "navLinks" to="/Home">Home</NavLink>
                <NavLink className = "navLinks" to="/ShowCustomers">Customer Registry</NavLink>
                <NavLink className = "navLinks" to="/AddCustomers">Add Customers</NavLink>
            </div>
        </nav>
    )
}


export default Navbar