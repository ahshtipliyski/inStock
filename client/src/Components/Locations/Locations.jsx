import React from 'react';
//import { Link } from 'react-router-dom';
import '../Locations/Locations.scss'
import search from '../../Assets/Icons/Icon-search.svg';
import arrow from '../../Assets/Icons/Icon-arrow-right.svg';


export default class Locations extends React.Component {
  render() {
    const warehouse = this.props.warehouse
    console.log(warehouse)

    // console.log(name)
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
        {
          warehouse.map((warehouse) => {
            return (

              <div className="warehouse">
                <div className="warehouse__container">
                  <div className="warehouse__name">
                    <h2 className="warehouse__name--title">{warehouse.name}</h2>
                    <p className="warehouse__name--address">{warehouse.address.street}</p>
                    <p className="warehouse__name--address">{warehouse.address.location}</p>
                  </div>
                  <div className="warehouse__details">
                    <div className="warehouse__contact">
                      <p>{warehouse.contact.name}</p>
                      <p className="warehouse__contact--position">{warehouse.contact.position}</p>
                    </div>
                    <div className="warehouse__contactInfo">
                      <p>{warehouse.contact.phone}</p>
                      <p>{warehouse.contact.email}</p>
                    </div>
                    <div className="warehouse__categories">
                      <p>{warehouse.inventoryCategories}</p>

                    </div>
                  </div>

                </div>
                <div className="warehouse__arrow">
                  {/* <Link to={'/locations/id/${id}'}> */}
                  <img className="warehouse__arrow--right" src={arrow} alt="right arrow icon"></img>
                  {/* </Link> */}

                </div>
              </div>




            )


          })
        }










      </>


    )

  }
}