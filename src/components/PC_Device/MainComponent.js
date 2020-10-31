import React, {Component} from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import StickyHeader from './StickyHeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class MainPC extends Component{

  render(){
    return(
      <div>
        <StickyHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Redirect to='/'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainPC;
