import React from "react";
import Logo from '../../Assets/Logo/Logo-instock.svg';
import '../Header/Header.scss';
import { NavLink, Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/"><img src={Logo} alt="instock logo" /></Link>
      </div>
      <div className="nav__container">
        <ul className=" nav__menu">
          <li className="nav__menu--text">
            <NavLink to="/inventory" activeClassName="nav__menu--text--active">Inventory</NavLink>
          </li>
          <li className="nav__menu--text">
            <NavLink to="/warehouses" activeClassName="nav__menu--text--active">Locations</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

