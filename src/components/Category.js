import React, { Component } from 'react';

class Category extends Component{
  render(){
    return(
      <div className="card" style={{ marginBottom: 50 }}>
        <img className="card-img-top" src={require(`../images/categories/${this.props.image}`)}/>
        <div className="card-body">
          <p className="card-text">{this.props.category}</p>
        </div>
      </div>
    )
  }
}

export default Category;
