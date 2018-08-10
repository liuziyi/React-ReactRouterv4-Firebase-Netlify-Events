import React, { Component } from 'react';
import _ from 'lodash';
import { categories_db } from '../config/firebase';
import Category from './Category';

class Categories extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories: {}
    }
  }

  componentDidMount(){
    categories_db.on('value', (snapshot) => {
      // console.log('SNAPSHOT ', snapshot.val())
      this.setState({ categories: snapshot.val() });
      console.log('categories ', this.state.categories)
    });
  }

  renderCategories(){
    return _.map(this.state.categories, (category, key) => {
      return(
        <Category key={key} category={category.category} image={category.imageName}/>
      )
    });
  }

  render(){
    return(
      <div style={{ marginTop: 20, marginBottom: 500 }}>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <h2 style={{ paddingLeft: 10 }}>Categories</h2>
        </div>
        {this.renderCategories()}
      </div>
    )
  }
}

export default Categories;
