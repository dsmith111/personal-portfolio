import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import CollapseBox from './CollapseboxComponent';


class StickyHeader extends Component{

  constructor(props){
    super(props);
    this.state ={
    };
  }

  render(){
    return(

      <div className='navbar-track'>
          <Navbar dark>
            <CollapseBox />
          </Navbar>
      </div>
    );
  }
}

export default StickyHeader;
