import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AddEvent from './AddEvent';
import AddCategory from './AddCategory';
import Events from './Events';
import EventDetails from './EventDetails';
import Categories from './Categories';
import Countries from './Countries';
import Error from './Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/add/event" component={AddEvent}/>
              <Route path="/add/category" component={AddCategory}/>
              <Route path="/events" component={Events} exact/>
              <Route path="/events/:id" component={EventDetails}/>
              <Route path="/categories" component={Categories}/>
              <Route path="/countries" component={Countries}/>
              <Route component={Error}/>
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
