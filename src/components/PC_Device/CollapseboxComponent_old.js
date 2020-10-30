import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, NavItem, Nav, Collapse, Button, CardBody, Card} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class CollapseBox extends Component{

  constructor(props){
    super(props);
    this.state={
      isNavOpen: false,
      menuLength:25
    };
    this.toggle = this.toggle.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  toggle(){
    this.setState({
      isNavOpen: !(this.state.isNavOpen)
    })
  }

  onEntering(){
    this.setState({
      menuLength:175
    })
  }
  onExited(){
    this.setState({
      menuLength:25
  })
  }

  render(){
  return(
    <React.Fragment>
      <div className="container" style={{marginLeft:-31}}>
      <div className='col-3'>
        <NavbarBrand><Button className="button-dark" onClick={this.toggle}
        style={{paddingLeft: 10, paddingRight:this.state.menuLength}}>
          <span className="fa fa-bars mr-2"></span>Menu</Button></NavbarBrand>

          <Collapse isOpen={this.state.isNavOpen}
           onEntering={this.onEntering} onExited={this.onExited} navbar>
                <Nav navbar className="dark-navbox border-right border-left border-bottom" style={{marginTop:-1}}>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/home">
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/aboutus">
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/projects">
                        Projects
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link nav-text" to="/contactus">
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
