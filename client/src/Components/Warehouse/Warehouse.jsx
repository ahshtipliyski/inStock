// import React from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../Warehouse/Warehouse.scss';
// import BackArrow from '../../Assets/Icons/Icon-back-arrow.svg';
// import InventoryItem from '../InventoryItem/InventoryItem';

// class Warehouse extends React.Component {

//     state ={
//         warehouseInfo: [],
//         warehouseAddress: [],
//         warehouseContact: [],
//         warehouseInventory: []
//     }

//     componentDidMount(){
//         const {...routeProps} = this.props
//         console.log(routeProps)
//         console.log(routeProps.match.params.id)  
        
//         axios.get(`http://localhost:8080/warehouses/${routeProps.match.params.id}`)
//         .then(res => {
//             const warehouseInfo = res.data.pop();
//             this.setState({warehouseInfo});
//             const warehouseAddress = warehouseInfo.address;
//             this.setState({warehouseAddress});
//             const warehouseContact = warehouseInfo.contact;
//             this.setState({warehouseContact});
//             // const warehouseInventory = warehouseInfo;
//             // this.setState({warehouseInventory});
            
//             console.log(warehouseInfo);
//             console.log(warehouseAddress);
//             console.log(warehouseContact);
//             // console.log(warehouseInventory)

//         })
//     }
//     render(){
//         const {warehouseInfo} = this.state;
//         const {warehouseAddress} = this.state;
//         const {warehouseContact} = this.state;

//         return (
//             <>
//             <section className="warehouseInfo">
//             <div className="warehouseInfo__info-container">
//                 <div className="warehouseInfo__title-arrow-container">
//                     <Link to='/warehouses'>
//                         <img src={BackArrow} alt="back arrow"/>
//                     </Link>
//                     <h1 className="warehouseInfo__title">{warehouseInfo.name}</h1>
//                 </div>
//                 <div className="warehouseInfo__info-section-container">
//                     <div className=" warehouseInfo__info-container">
//                         <p className="warehouseInfo__info-titles">ADDRESS</p>
//                         <div className="warehouseInfo__info-sub-container">
//                             <p className="warehouseInfo__info-text">{warehouseAddress.street}</p>
//                         </div>
//                         <div className="warehouseInfo__info-sub-container">
//                             <p className="warehouseInfo__info-text">{warehouseAddress.location}</p>
//                         </div>
//                     </div>
//                     <div className=" warehouseInfo__info-container">
//                         <p className="warehouseInfo__info-titles">CONTACT</p>
//                         <div className="warehouseInfo__info-sub-container">
//                             <p className="warehouseInfo__info-text">{warehouseContact.name}</p>
//                             <p className="warehouseInfo__info-text">{warehouseContact.position}</p>
//                         </div>
//                         <div className="warehouseInfo__info-sub-container">
//                             <p className="warehouseInfo__info-text">{warehouseContact.phone}</p>
//                             <p className="warehouseInfo__info-text">{warehouseContact.email}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </section>
//         <h1>ADD inventoryItem component here</h1>
//         {/* inventory={this.state.warehouseInventory} */}
//         </>
//         )
//     }
// }

// export default Warehouse;

import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Warehouse/Warehouse.scss';
import BackArrow from '../../Assets/Icons/Icon-back-arrow.svg';
import InventoryItem from '../InventoryItem/InventoryItem';

class Warehouse extends React.Component {

    state ={
        warehouseInfo: [],
        warehouseAddress: [],
        warehouseContact: [],
        warehouseInventory: []
    }

    componentDidMount(){
        const {...routeProps} = this.props
        console.log(routeProps)
        console.log(routeProps.match.params.id)  
        
        axios.get(`http://localhost:8080/warehouses/${routeProps.match.params.id}`)
        .then(res => {
            const warehouseInfo = res.data;
            const warehouseInventory = res.data.inventory;
            const warehouseAddress = res.data.address;
            const warehouseContact = res.data.contact;
            this.setState({warehouseInfo});
            this.setState({warehouseAddress});
            this.setState({warehouseContact});
            this.setState({warehouseInventory});

            console.log(warehouseInventory);
        })
    }
    render(){
        const {warehouseInfo} = this.state;
        const {warehouseAddress} = this.state;
        const {warehouseContact} = this.state;

        return (
            <>
            <section className="warehouseInfo">
            <div className="warehouseInfo__info-container">
                <div className="warehouseInfo__title-arrow-container">
                    <Link to='/warehouses'>
                        <img src={BackArrow} alt="back arrow"/>
                    </Link>
                    <h1 className="warehouseInfo__title">{warehouseInfo.name}</h1>
                </div>
                <div className="warehouseInfo__info-section-container">
                    <div className=" warehouseInfo__info-container">
                        <p className="warehouseInfo__info-titles">ADDRESS</p>
                        <div className="warehouseInfo__info-sub-container">
                            <p className="warehouseInfo__info-text">{warehouseAddress.street}</p>
                        </div>
                        <div className="warehouseInfo__info-sub-container">
                            <p className="warehouseInfo__info-text">{warehouseAddress.location}</p>
                        </div>
                    </div>
                    <div className=" warehouseInfo__info-container">
                        <p className="warehouseInfo__info-titles">CONTACT</p>
                        <div className="warehouseInfo__info-sub-container">
                            <p className="warehouseInfo__info-text">{warehouseContact.name}</p>
                            <p className="warehouseInfo__info-text">{warehouseContact.position}</p>
                        </div>
                        <div className="warehouseInfo__info-sub-container">
                            <p className="warehouseInfo__info-text">{warehouseContact.phone}</p>
                            <p className="warehouseInfo__info-text">{warehouseContact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section className="warehouseInfo__inventory-item-container">
            <InventoryItem inventory={this.state.warehouseInventory} className="warehouseInfo__inventory-item-render"/>
        </section>
        </>
        )
    }
}
export default Warehouse;