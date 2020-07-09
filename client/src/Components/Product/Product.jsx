import React from 'react';
import './Product.scss'

export default function Product({inventory}) {
  console.log(inventory)
  return (
    <section className="product">
      <div className="product__header-container">
        <h1 className="product__name">Product Name</h1>
        <div>in stock img here</div>
      </div>
      <div className="product__info-body-container">
          <div className="product__description-container">
            <p className="product__info-title">Item Description</p>
            <p className="product__info-content">item description here --- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam ---- </p>
          </div>
          <div className="product__order-info-container">
            <div>
              <div>
                <p className="product__info-title">ORDERED BY</p>
                <p className="product__info-content">Name</p>
              </div>
              <div>
                <p className="product__info-title">REFERENCE NUMBER</p>
                <p className="product__info-content">Reference ID</p>
              </div>
            </div>
            <div>
              <div>
                <p className="product__info-title">LAST ORDERED</p>
                <p className="product__info-content">Date ordered here</p>
              </div>
              <div>
                <p className="product__info-title">LOCATION</p>
                <p className="product__info-content">location here</p>
              </div>
            </div>
            <div>
                <p className="product__info-title">QUANTITY</p>
                <p className="product__info-content">quantity number</p>
            </div>
            <div>
              <p className="product__info-title">CATEGORIES</p>
              <p className="product__info-content">Industrial, Automotive, etc.</p>
            </div>
          </div>
      </div>

      <button>EDIT</button>
    </section>
  )
}


// The user must be able to view the details for a specific inventory item when an item is clicked from the list view. The user must have the ability to navigate to the edit item functionality from this view. The user can also navigate back to the inventory list view by clicking the inventory item name in this view.

// Create the UI and functionality for displaying the details of a specific inventory item.

// This component will need state.

// Ensure you get the right details for the inventory item specified in the URL from the back-end.

// Must handle any request errors gracefully by catching it and printing it to the console with console.error

// Note: If the data isn’t available from the back-end just yet, test with a sample / fake inventory item object.