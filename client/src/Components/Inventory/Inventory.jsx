import React, { Component } from 'react'
import './Inventory.scss'
import search from '../../Assets/Icons/Icon-search.svg';
import InventoryItem from '../InventoryItem/InventoryItem';


class Inventory extends Component {
  render() {
    const inventory = this.props.inventory
    return (
      <>
        <div className="inventory">
          <div className="inventory__container">
            <div className="inventory__header">
              <h1 className="inventory__title">Inventory</h1>
            </div>
            <div className="inventory__search">
              <img className="inventory__search--icon" src={search} alt="Search Icon"></img>
              <input className="inventory__search--input" type="search" placeholder="Search Location"></input>
            </div>
          </div>
          <div className="inventory__headings">
            <h5 className="inventory__headings--text">ITEM</h5>
            <h5 className="inventory__headings--text">LAST ORDERED</h5>
            <h5 className="inventory__headings--text">LOCATION</h5>
            <h5 className="inventory__headings--text">QUANTITY</h5>
            <h5 className="inventory__headings--text">STATUS</h5>
          </div>
        </div>
        <InventoryItem inventory={inventory} />
      </>
    )
  }
}


export default Inventory;