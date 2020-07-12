import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ArrowBack from '../../Assets/Icons/Icon-back-arrow.svg';

class Product extends React.Component {

  state={
    product:[]
  }
  
  componentDidMount(){
    const {...routeProps} = this.props
    console.log(routeProps)
    console.log(routeProps.match.params.id)

    axios.get(`http://localhost:8080/inventory/${routeProps.match.params.id}`)
    .then(res => {
      const product = res.data.pop();
      this.setState({product})

      console.log(product)
    })
  }

  render(){

    const {product} = this.state
    const {warehouse} = this.props
    const stockStatus = product.isInstock
    console.log(stockStatus) 
    console.log(product)
    // console.log(warehouse)
    // console.log(warehouse.contact)

     return(
      <section className="product">
      <div className="product__header-container">
        <div className="product__title-arrow-container">
          <Link to="/inventory" className="product__arrow-container">
            <img src={ArrowBack} alt="back arrow"/>
          </Link>
          <h1 className="product__name">{product.name}</h1>
        </div>
        <div className="product__badge-container">
          <div className="product__stock-badge">
            <p className="product__stock-info">{product.isInstock ? "In Stock" : "No Stock"}</p>
          </div>
        </div>
      </div>
      {warehouse.map((warehouse) => {
        if (product.warehouseId === warehouse.id){
          return(
          <div key={uuidv4()} className="product__info-body-container">
            <div className="product__description-container">
              <p className="product__info-title">Item Description</p>
              <p className="product__info-content">{product.description}</p>
            </div>
            <div className="product__order-info-container">
              <div className="product__horizontal-container">
                <div className="product__orderedby-conatiner">
                  <p className="product__info-title">ORDERED BY</p>
                  <p className="product__info-content">{warehouse.contact.name}</p>
                </div>
                <div className="product__reference-container">
                  <p className="product__info-title">REFERENCE NUMBER</p>
                  <p className="product__info-content">{product.id}</p>
                </div>
              </div>
              <div className="product__horizontal-container">
                <div className="product__lastorder-container">
                  <p className="product__info-title">LAST ORDERED</p>
                  <p className="product__info-content">{product.lastOrdered}</p>
                </div>
                <div className="product__location-conatiner">
                  <p className="product__info-title">LOCATION</p>
                  <p className="product__info-content">{warehouse.address.location}</p>
                </div>
              </div>
              <div className="product__horizontal-container">
                <div className="product__quantity-conatiner">
                  <p className="product__info-title">QUANTITY</p>
                  <p className="product__info-content">{product.quantity}</p>
                </div>
              </div>
              <div className="product__horizontal-container">
                <div className="product__categories-conatiner">
                  <p className="product__info-title">CATEGORIES</p>
                  <p className="product__info-content">{product.categories}</p>
                </div>
              </div>
            </div>
          </div>
          )}
      })}
      <div className="product__btn-container">
        <button>EDIT</button>
      </div>
    </section>
    )
  }
}

export default Product;


// The user must be able to view the details for a specific inventory item when an item is clicked from the list view. The user must have the ability to navigate to the edit item functionality from this view. The user can also navigate back to the inventory list view by clicking the inventory item name in this view.

// Create the UI and functionality for displaying the details of a specific inventory item.

// This component will need state.

// Ensure you get the right details for the inventory item specified in the URL from the back-end.

// Must handle any request errors gracefully by catching it and printing it to the console with console.error

// Note: If the data isn’t available from the back-end just yet, test with a sample / fake inventory item object.
