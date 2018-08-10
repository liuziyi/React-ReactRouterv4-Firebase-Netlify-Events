import React, { Component } from 'react';
import { events_db, storage } from '../config/firebase';

class EventDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
			event: [],
      imageURL: ''
		}
  }

  componentDidMount(){
    const eventId = this.props.match.params.id;
    events_db.child(eventId).on('value', (snapshot) => {
      this.setState({ event: snapshot.val() });
    });
  }

  componentDidUpdate(){
    storage.ref('events').child(this.state.event.imageName).getDownloadURL().then(url => {
      // console.log(url)
      this.setState({ imageURL: url })
    });
  }

  render(){
    return(
      <div className="card" style={{ marginTop: 100, marginBottom: 500 }}>
        <img className="card-img-top" src={this.state.imageURL}/>
        <div className="card-body">
          <h5 className="card-title">{this.state.event.title}</h5>
          <p className="card-text">{this.state.event.category}</p>
        </div>
      </div>
    )
  }
}

export default EventDetails;
