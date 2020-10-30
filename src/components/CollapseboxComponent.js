import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, NavItem, Nav, Collapse, Button, CardBody, Card} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';


class CollapseBox extends Component{

  constructor(props){
    super(props);
    this.state={
      isNavOpen: false,
      buttonVisib:0.8
    };
    this.toggle = this.toggle.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onExited = this.onExited.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
  }

  toggle(){
    this.setState({
      isNavOpen: !(this.state.isNavOpen)
    })
  }
  onEntering(){
    this.setState({
      buttonVisib:1
    })
  }
  onExited(){
    this.setState({
      buttonVisib:0.8
  })
  }

handleClickAway(){
  this.setState({
    isNavOpen: false
  })
}

  render(){
  return(
    <React.Fragment>
      <div className="container">
        <div className='col-12'>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <Button className="button-dark border" onClick={this.toggle}
          style={{opacity:this.state.buttonVisib}}>
            <span className="fa fa-bars mr-2"></span>Menu</Button>

          </ClickAwayListener>
          <Collapse isOpen={this.state.isNavOpen}
            onEntering={this.onEntering} onExited={this.onExited} navbar>
                <Nav navbar
                className="dark-navbox border-right border-left border-bottom">
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/home">
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/about">
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/projects">
                        Projects
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/contact">
                        Contact
                      </NavLink>
                    </NavItem>
                </Nav>
          </Collapse>
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default CollapseBox;
