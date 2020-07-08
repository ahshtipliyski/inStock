import React from 'react';
import Header from '../src/Components/Header/Header'
import Locations from '../src/Components/Locations/Locations'
import axios from 'axios';

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
        <Header />
        <Locations warehouse={this.state.locationWarehouse} />
      </div>

    );
  }

}

export default App;
