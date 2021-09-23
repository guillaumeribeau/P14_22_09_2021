import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo2.png'

const Header = () => {
    return (
        <div className='navigation'>
        <img className="logo" src={logo} alt="logo de Kasa" />
        <nav className="header_nav">
          <NavLink to ="/"  exact activeClassName="nav-active">
           Home
          </NavLink>
          <NavLink to ="/employee" exact activeClassName="nav-active">
          Current employee
          </NavLink>
        </nav>
      </div>
    );
};

export default Header;