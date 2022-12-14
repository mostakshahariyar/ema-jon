import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Heder.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' style={{textAlign: 'center'}} src={logo} alt="" />
            <nav className='nav'>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                 <NavLink to="/inventory">Manage Inventory here</NavLink>
            </nav>
        </div>
    );
};

export default Header;