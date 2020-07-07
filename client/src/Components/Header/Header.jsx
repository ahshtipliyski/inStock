import React from "react";
import Logo from '../../Assets/Logo/Logo-instock.svg';
import '../Header/Header.scss';


export default function Header() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="instock logo" />
      </div>
      <div className="nav__container">
        <ul className=" nav__menu">
          <li className="nav__menu--text    nav__menu--text--notActive">
            <a href="">Inventory</a>
          </li>
          <li className="nav__menu--text nav__menu--text--active">
            <a href="">Locations</a>
          </li>
        </ul>
      </div>
    </div>
  )
}


