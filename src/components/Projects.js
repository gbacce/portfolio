import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PortfolioBackgroundImage from '../images/background-images/portfolio-static-image.png'

// https://player.vimeo.com/external/174002648.hd.mp4?s=a93798103ef5b0363f17bd6f4b3dc04e54ce37b2&amp;profile_id=119&amp;oauth2_token_id=57447761

class Projects extends Component {
  render() {
    return (
      <Grid fluid className='project-container'>
      <div className="fullscreen-bg">
            <video loop muted autoPlay poster={PortfolioBackgroundImage} className="fullscreen-bg__video">
              <source src="https://player.vimeo.com/external/174002648.hd.mp4?s=a93798103ef5b0363f17bd6f4b3dc04e54ce37b2&amp;profile_id=119&amp;oauth2_token_id=57447761" type="video/mp4"></source>
            </video>
        </div>
        <Row className='project-row'>
          <h1 className='portfolio-heading text-center type-it'>Portfolio</h1>
          <Col xs={10} xsOffset={1}>
            <Col xs={10} xsOffset={1} className='project-div text-center'>
              <h1>Coming soon...</h1>
            </Col>

          </Col>
        </Row>
        {/*<iframe height='500' scrolling='no' title='cycSlope' src='//codepen.io/gbacce/embed/preview/awrbNO/?height=135&theme-id=28433&default-tab=js,result&embed-version=2' frameborder='0' allowtransparency='true' allowfullscreen='true' style={{width: '50%'}}>See the Pen <a href='https://codepen.io/gbacce/pen/awrbNO/'>cycSlope</a> by guido (<a href='https://codepen.io/gbacce'>@gbacce</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>*/}
      </Grid>
      
    );
  }
}

export default Projects;