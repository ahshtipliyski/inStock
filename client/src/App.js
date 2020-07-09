import React from 'react';
import Header from '../src/Components/Header/Header'
import Locations from '../src/Components/Locations/Locations'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Inventory from '../src/Components/Inventory/Inventory';
import Product from '../src/Components/Product/Product';

const urlW = 'http://localhost:8080'

class App extends React.Component {
  state = {
    locationWarehouse: [],
    inventory: []
  }

  initialMount() {
    axios.get(`${urlW}/warehouses`)
      .then(res => {
        const locationWarehouse = res.data;
        this.setState({ locationWarehouse });
        console.log(locationWarehouse)
      })
      .catch(error => {
        console.log(error)
      }) 
    axios.get(`${urlW}/inventory`)
      .then(res => {
        const inventory = res.data;
        this.setState({ inventory });
        //console.log(inventory)
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.initialMount();
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
          <Redirect exact from="/" to="/warehouses" />
            <Route exact path="/warehouses">
              <Locations warehouse={this.state.locationWarehouse} />
            </Route> 
            <Route exact path="/inventory">
              <Inventory inventory={this.state.inventory} />
            </Route>
            <Route exact path="/inventory/:id">
              <Product inventory={this.state.inventory}/>
            </Route>
          </Switch>
        </Router> 
      </div>
    );
  }

}

export default App;
