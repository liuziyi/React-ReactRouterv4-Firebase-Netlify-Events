import React, { Component } from 'react';
import _ from 'lodash';
import countries from '../countries.json';

class Countries extends Component{
  constructor(){
    super();
    this.state = {
      countries: []
    }
  }

  componentDidMount(){
    this.setState({ countries });
  }

  renderCountries(){
    return _.map(this.state.countries, (country, key) => {
      return(
        <li key={key} className="list-group-item">{country.name}</li>
      )
    });
  }

  render(){
    return(
      <div style={{ marginTop: 20, marginBottom: 500 }}>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <h2 style={{ paddingLeft: 10 }}>Countries</h2>
        </div>
        <ul className="list-group">
          {this.renderCountries()}
        </ul>
      </div>
    )
  }
}

export default Countries;
