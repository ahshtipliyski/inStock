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
    locationWarehouse: []
  }

  componentDidMount() {
    axios.get(`${urlW}/warehouses`)
      .then(res => {
        const locationWarehouse = res.data;
        this.setState({ locationWarehouse });
        console.log(locationWarehouse)
      })

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
              <Inventory />
            </Route>
            <Route exact path="/inventory/:id">
              <Product />
            </Route>
          </Switch>
        </Router> 
      </div>
    );
  }

}

export default App;
