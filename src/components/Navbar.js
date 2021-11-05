import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <i className="fad fa-atom logo"></i>
                <div className="navLeftText">Atoms. Register with care</div>
            </div>
            <div className="navbar-right">
                <NavLink  exact to="/" className = "navLinks" >Home</NavLink>
                <NavLink  className = "navLinks" to="/ShowCustomers">Customer Register</NavLink>
                <NavLink  className = "navLinks" to="/AddCustomers">Add Customers</NavLink>
            </div>
        </nav>
    )
}


export default Navbar