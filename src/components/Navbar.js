import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left'>
          <Link to='/'><h4>Guido Bacce</h4></Link>
        </div>
        <div className='navbar-right'>
          <Link to='/about'><Glyphicon glyph="user" className="glyph"/></Link>
          <Link to='/skills'><Glyphicon glyph="stats" className="glyph" /></Link>
          <Link to='/portfolio'><Glyphicon glyph="folder-open" className="glyph"/></Link>
          <Link to='/connect'><Glyphicon glyph="envelope" className="glyph"/></Link>
        </div>
      </div>
    );
  }
}

export default Navbar;