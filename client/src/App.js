import React from "react";
import Header from "../src/Components/Header/Header";
import Locations from "../src/Components/Locations/Locations";
import axios from "axios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Inventory from "../src/Components/Inventory/Inventory";
import Product from "../src/Components/Product/Product";

const urlW = "http://localhost:8080";
class App extends React.Component {
	state = {
		locationWarehouse: [],
		inventory: [],
	};

	initialMount() {
		axios
			.get(`${urlW}/warehouses`)
			.then((res) => {
				const locationWarehouse = res.data;
				this.setState({ locationWarehouse });
				// console.log(locationWarehouse)
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${urlW}/inventory`)
			.then((res) => {
				const inventory = res.data;
				this.setState({ inventory });
				// console.log(inventory)
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.initialMount();
	}

	componentDidUpdate() {
		// axios.get('http://localhost:8080/inventory')
		// 	.then (res => {
		// 	const inventory = res.data
		// 	//console.log(inventory)
		// 	this.setState({inventory})
		// })
	}

	handleUpdateLocationWarehouses = (warehouses) => {
		this.setState({
			locationWarehouse: warehouses,
		});
	};

	handleUpdateInventory = (inventory = []) => {
		this.setState({
			inventory: inventory,
		});
	};

	render() {
		return (
			<div>
				<Router>
					<Header />
					<Switch>
						<Redirect exact from='/' to='/warehouses' />
						<Route exact path='/warehouses'>
							<Locations
								warehouse={this.state.locationWarehouse}
								updateLocationWarehouses={this.handleUpdateLocationWarehouses}
							/>
						</Route>
						<Route exact path='/inventory'>
							<Inventory 
								inventory={this.state.inventory}
								updateInventory={this.state.handleUpdateInventory}
								/>
						</Route>

						{/* <Route path="/inventory/:id" >
              <Product inventory={this.state.inventory}/>
            </Route> */}
						<Route
							path='/inventory/:id'
							render={(routeProps) => (
								<Product
									warehouse={this.state.locationWarehouse}
									{...routeProps}
								/>
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
//   render() {
//     return (
//       <div>
//         <Router>
//           <Header />
//           <Switch>
//             <Redirect exact from="/" to="/warehouses" />
//             <Route exact path="/warehouses">
//               <Locations warehouse={this.state.locationWarehouse} />
//             </Route>
//             {/* <Route path="/warehouses/id">
//               <Locations warehouse={this.state.locationWarehouse} />
//             </Route> */}
//             <Route exact path="/inventory">
//               <Inventory inventory={this.state.inventory} />
//             </Route>

// }
export default App;
