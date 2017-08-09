import React, { Component } from 'react';
import { Col} from 'react-bootstrap';

class Badge extends Component {
  render() {
    if (this.props.offset !== undefined) {
      return (
        <Col className='skill-badge text-center' xs={6} sm={3} smOffset={this.props.offset}>
          <a href={this.props.link}>
          {this.props.image}
          {this.props.name}
          </a>
        </Col>
      )
    } else {
      return (
        <Col className='skill-badge text-center' xs={6} sm={3}>
          <a href={this.props.link}>
            {this.props.image}
            {this.props.name}
          </a>
        </Col>
      )
    }
  }
}

export default Badge;