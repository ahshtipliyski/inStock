import React, { Component } from 'react'

class InventoryItem extends Component {
  render() {
    const inventory = this.props.inventory
    return (
      <>
        {
          inventory.map((inventory) => {
            return(
            <div>{inventory.city}</div>
            )
          })
        }
      </>
    )
  }
}


export default InventoryItem;