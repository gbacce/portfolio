import React from 'react';
import ReactDOM from 'react-dom';
import './source-files/index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import AboutMe from './components/AboutMe';
import Connect from './components/Connect';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

ReactDOM.render(
  <Router>
    <div>
      <Route path = "/" component={ Navbar } />
      <PageTransition>
        <Switch>
          <Route path="/about" component={ AboutMe } />
          <Route path="/connect" component={ Connect } />
          <Route path="/portfolio" component={ Projects } />
          <Route path="/skills" component={ Skills } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </PageTransition>
    </div>
  </Router>
  , 
  document.getElementById('root')
);