import React, { Component } from 'react';
import Menu from './Components/MenuComponent';
import Dishdetail from './Components/DishdetailComponent.js'
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes.js';

class App extends Component {
  constructor(props){
super(props);
this.state = {
  dishes:DISHES
};
  }
  
  render()
  {
  return (
    <div className="App">
      <Navbar dark color="secondary">
        <div className="container">
          <NavbarBrand href="#">Thilakmani</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}
export default App;