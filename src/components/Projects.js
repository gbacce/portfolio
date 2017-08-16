import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Project from './Project'
import PortfolioBackgroundImage from '../source-files/images/background-images/portfolio-static-image.png';
import CycslopeImage from '../source-files/images/cycslope-image.png';
import TravelistImage from '../source-files/images/travelist-image.png';
import $ from 'jquery';

// https://player.vimeo.com/external/174002648.hd.mp4?s=a93798103ef5b0363f17bd6f4b3dc04e54ce37b2&amp;profile_id=119&amp;oauth2_token_id=57447761


// Notes:

//  Project container might look better around each project rather than one big box with all the projects inside.

//  Buttons are getting longer than the image once window collapses to medium size. 
//    Possible solutions:
//       Easiest if it works: Use images that are 734px wide. If I edit the original pages before I screenshot, and either add bottom-padding or margin or make the actual content larger, this would work.
//       Set the max width of button group to width of image. But then between 520px and 720px the image is left aligned and the empty space is the actual content, not the margin or padding. 

//  Add top padding to each project.


class Projects extends Component {

  render() {

    var screenWidth = $(window).width();
    var mobileCheck = false;
    if (screenWidth < 800){
      mobileCheck = true
    }


    const cycslopeDemo = 'cycslope.guidobacce.com';
    const cycslopeRepo = 'https://github.com/merileewheelock/cycSlope';
    const cycslopeImage = CycslopeImage;

    const travelistDemo = 'travelist.guidobacce.com';
    const travelistRepo = 'https://github.com/merileewheelock/traveList';
    const travelistImage = TravelistImage;



    return (
      <Grid fluid className='project-section-container'>

        <div className="fullscreen-bg fullscreen-bg-projects">
          <video loop muted autoPlay={mobileCheck} poster={PortfolioBackgroundImage} className="fullscreen-bg__video">
            <source src="https://player.vimeo.com/external/174002648.hd.mp4?s=a93798103ef5b0363f17bd6f4b3dc04e54ce37b2&amp;profile_id=119&amp;oauth2_token_id=57447761" type="video/mp4"></source>
          </video>
        </div>


        <Row className='project-row'>
          <h1 className='portfolio-heading text-center type-it'>Portfolio</h1>
          <Col xs={10} xsOffset={1}>
           

            <Col xs={12} xsOffset={0} className='project-div text-center'>
              <Project demo={cycslopeDemo} repo={cycslopeRepo} image={cycslopeImage} />
              <Project demo={travelistDemo} repo={travelistRepo} image={travelistImage} />
            </Col>

          </Col>
        </Row>
      </Grid>
      
    );
  }
}

export default Projects;


{/*<iframe height='500' scrolling='no' title='cycSlope' src='//codepen.io/gbacce/embed/preview/awrbNO/?height=135&theme-id=28433&default-tab=js,result&embed-version=2' frameborder='0' allowtransparency='true' allowfullscreen='true' style={{width: '50%'}}>See the Pen <a href='https://codepen.io/gbacce/pen/awrbNO/'>cycSlope</a> by guido (<a href='https://codepen.io/gbacce'>@gbacce</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>*/}