import React, {Component} from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import StickyHeader from './StickyHeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

  render(){
    return(
      <div>
        <StickyHeader />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
