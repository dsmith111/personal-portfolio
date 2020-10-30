import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import CollapseBox from './CollapseboxComponent';
import {StickyContainer, Sticky} from 'react-sticky';

class StickyHeader extends Component{

  constructor(props){
    super(props);
    this.state ={
    };
  }

  render(){
    return(

        <Sticky>{({style})=><header style={style}>
          <Navbar dark>
            <CollapseBox />
          </Navbar></header>}
        </Sticky>

    );
  }
}

export default StickyHeader;
