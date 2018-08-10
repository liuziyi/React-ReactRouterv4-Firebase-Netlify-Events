import React, { Component } from 'react';
import { events_db, storage } from '../config/firebase';

class AddEvent extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
      imageName: '',
      image: null,
      errorMessage: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  inputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  fileChange(e){
    if(e.target.files[0]){
      this.setState({ image: e.target.files[0] })
    }
  }

  addEvent(e){
    e.preventDefault();
    if(this.state.title === '' || this.state.category === '' || this.state.image === null){
      this.setState({ errorMessage: 'Title, Category and Image cannot be blank' });
    } else {
      const { image } = this.state;
      const event = {
        title: this.state.title,
        category: this.state.category,
        imageName: image.name
      }

      storage.ref(`events/${image.name}`).put(image);
      events_db.push(event);
      this.props.history.push('/events');
    }
  }

  renderError(){
    if(this.state.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Opps!</strong> {this.state.errorMessage}
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <div style={{ marginTop: 40, marginBottom: 20, textAlign: 'center' }}>
          <h2>Create New Event</h2>
        </div>
        <form onSubmit={this.addEvent} style={{ paddingBottom: 500 }}>
          {this.renderError()}
          <div className="form-group">
            <label style={{ fontWeight: 'bold' }}>Title *</label>
            <input
              onChange={this.inputChange}
              value={this.state.title}
              className="form-control"
              type="text"
              name="title"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 'bold' }}>Category *</label>
            <select onChange={this.inputChange} className="form-control" name="category">
              <option value="">Select</option>
              <option value="Sports">Sports</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Rugby">Rugby</option>
              <option value="Auto Racing">Auto Racing</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Golf">Golf</option>
              <option value="Tennis">Tennis</option>
              <option value="Cycling">Cycling</option>
              <option value="American Football">American Football</option>
              <option value="Baseball">Baseball</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 'bold' }}>Logo *</label>
            <input onChange={this.fileChange} type="file" className="form-control-file"/>
          </div>
          <button className="btn btn-dark btn-block">Add Event</button>
        </form>
      </div>
    )
  }
}

export default AddEvent;
