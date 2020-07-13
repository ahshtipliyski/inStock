import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../InventoryItem/InventoryItem.scss';
import RemoveButton from '../RemoveButton/RemoveButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const urlW = "http://localhost:8080";

class InventoryItem extends Component {
  state = {
    inventoryData: []
  }
  deleteHandler(deleteItem) {
    //const inventory = this.props.inventory
    axios
    .delete(`${urlW}/inventory/${deleteItem}`)
    .then((res) => {
      const inventory = res.data;
      const { updateInventory } = this.props;
      console.log(res.data)
      //updateInventory(res.data)
      // this.setState(updateInventory(inventory));
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    const inventory = this.props.inventory
    //console.log(inventory)

    return (
      <>
        {
          inventory.map((inventory) => {
            // console.log("this mapped ID", inventory.id)

            return(
              <div className="inventory__item" key={uuidv4()}>
                <h5 className="inventory__headings--text inventory__headings-hidden">ITEM</h5>
                <Link className="inventory__anchor" to={`/inventory/${inventory.id}`}>
                <div className="inventory__product-container">
                  <h2 className="inventory__item-heading">{inventory.name}</h2>
                  <p className="inventory__description">{inventory.description}</p>
                </div>
                </Link>
                <h5 className="inventory__headings--text inventory__headings-hidden">LAST ORDERED</h5>
                <p className="inventory__data">{inventory.lastOrdered}</p>
                <h5 className="inventory__headings--text inventory__headings-hidden">LOCATION</h5>
                <p className="inventory__data">{inventory.city}</p>
                <h5 className="inventory__headings--text inventory__headings-hidden">QUANTITY</h5>
                <p className="inventory__data">{inventory.quantity}</p>
                <h5 className="inventory__headings--text inventory__headings-hidden">STATUS</h5>
                <div className="inventory__instock">{inventory.isInstock 
                ? <p>In Stock</p> 
                : <p>Out of stock</p>}
                </div>
                <RemoveButton deleteHandler={() => this.deleteHandler(inventory.id)} />
              </div>
            )
          })
        }
      </>
    )
  }
}


export default InventoryItem;