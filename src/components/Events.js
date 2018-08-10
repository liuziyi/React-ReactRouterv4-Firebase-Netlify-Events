import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { events_db } from '../config/firebase';

class Events extends Component{
  constructor(props){
    super(props);
    this.state = {
      events: {}
    }
  }

  componentDidMount(){
    events_db.on('value', (snapshot) => {
      this.setState({ events: snapshot.val() });
      console.log('events ', this.state.events)
    });
  }

  renderEvents(){
    return _.map(this.state.events, (event, key) => {
      return(
        <div className="card" key={key} style={{ marginBottom: 20 }}>
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.category}</p>
            <Link to={`events/${key}`} className="btn btn-outline-dark">Details</Link>
          </div>
        </div>
      )
    });
  }

  render(){
    return(
      <div style={{ marginTop: 20, marginBottom: 500 }}>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <h2 style={{ paddingLeft: 10 }}>List of Events</h2>
        </div>
        {this.renderEvents()}
      </div>
    )
  }
}

export default Events;
