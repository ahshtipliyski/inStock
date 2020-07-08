import React from 'react';
import '../Locations/Locations.scss'
import search from '../../assets/Icons/Icon-search.svg';
import arrow from '../../assets/Icons/Icon-arrow-right.svg';

export default function Locations() {
  return (
    <>
      <div className="location">
        <div className="location__container">
          <div className="location__header">
            <h1 className="location__title">Locations</h1>
          </div>
          <div className="location__search">
            <img className="location__search--icon" src={search} alt="Search Icon"></img>
            <input className="location__search--input" type="search" placeholder="Search Location"></input>
          </div>
        </div>
        <div className="location__headings">
          <h5 className="location__headings--text">Warehouse</h5>
          <h5 className="location__headings--text">Contact</h5>
          <h5 className="location__headings--text">Contact Information</h5>
          <h5 className="location__headings--text">Categories</h5>

        </div>
      </div>

      <div className="warehouse">
        <div className="warehouse__container">
          <div className="warehouse__name">
            <h2 className="warehouse__name--title">Warehouse Name</h2>
            <p className="warehouse__name--address">Address</p>
          </div>
          <div className="warehouse__details">
            <div className="warehouse__contact">
              <p>Name</p>
              <p className="warehouse__contact--position">Position</p>
            </div>
            <div className="warehouse__contactInfo">
              <p>Phone</p>
              <p>email</p>
            </div>
            <div className="warehouse__categories">
              <p>Industrial, Automotive, Heavy</p>
              <p>Engineer</p>
            </div>
          </div>

        </div>
        <div className="warehouse__arrow">
          <img className="warehouse__arrow--right" src={arrow} alt="right arrow icon"></img>
        </div>
      </div>
    </>


  )
}