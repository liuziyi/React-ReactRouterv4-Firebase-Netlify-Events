import React, { Component } from 'react';
import { categories_db, storage } from '../config/firebase';

class AddCategory extends Component{
  constructor(props){
    super(props);
    this.state = {
      category: '',
      imageName: '',
      image: null,
      errorMessage: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
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

  addCategory(e){
    e.preventDefault();
    if(this.state.category === '' || this.state.image === null){
      this.setState({ errorMessage: 'Category and Image cannot be blank' });
    } else {
      const { image } = this.state;
      const category = {
        category: this.state.category,
        imageName: image.name
      }

      storage.ref(`categories/${image.name}`).put(image);
      categories_db.push(category);
      this.props.history.push('/categories');
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
          <h2>Add Category</h2>
        </div>
        <form onSubmit={this.addCategory} style={{ paddingBottom: 500 }}>
          {this.renderError()}
          <div className="form-group">
            <label style={{ fontWeight: 'bold' }}>Category *</label>
            <input
              onChange={this.inputChange}
              value={this.state.category}
              className="form-control"
              type="text"
              name="category"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 'bold' }}>Logo *</label>
            <input onChange={this.fileChange} type="file" className="form-control-file"/>
          </div>
          <button className="btn btn-dark btn-block">Add Category</button>
        </form>
      </div>
    )
  }
}

export default AddCategory;
