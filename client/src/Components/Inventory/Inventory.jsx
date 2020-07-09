import React, { Component } from 'react'
import '../Locations/Locations.scss'
import search from '../../Assets/Icons/Icon-search.svg';
import InventoryItem from '../InventoryItem/InventoryItem';

class Inventory extends Component {
  render() {
    const inventory = this.props.inventory
    return (
      <>
        <div className="location">
          <div className="location__container">
            <div className="location__header">
              <h1 className="location__title">Inventory</h1>
            </div>
            <div className="location__search">
              <img className="location__search--icon" src={search} alt="Search Icon"></img>
              <input className="location__search--input" type="search" placeholder="Search Location"></input>
            </div>
          </div>
          <div className="location__headings">
            <h5 className="location__headings--text">ITEM</h5>
            <h5 className="location__headings--text">LAST ORDERED</h5>
            <h5 className="location__headings--text">LOCATION</h5>
            <h5 className="location__headings--text">QUANTITY</h5>
            <h5 className="location__headings--text">STATUS</h5>
          </div>
        </div>
        <InventoryItem inventory={inventory} />
      </>
    )
  }
}


export default Inventory;