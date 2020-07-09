import React from "react";
import Logo from '../../Assets/Logo/Logo-instock.svg';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/"><img src={Logo} alt="instock logo" /></Link>
      </div>
      <div className="nav__container">
        <ul className=" nav__menu">
          <li className="nav__menu--text    nav__menu--text--notActive">
            <Link to="/inventory">Inventory</Link>
          </li>
          <li className="nav__menu--text nav__menu--text--active">
            <Link to="/warehouses">Locations</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


