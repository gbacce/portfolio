import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';
import $ from 'jquery';
import 'typeit';
import HomeBackgroundImage from '../source-files/images/background-images/home-static-image.png';



// https://videos.pexels.com/videos/coding-performed-on-a-computer-1317
// https://videos.pexels.com/videos/blurred-video-of-scripts-being-typed-735
// https://videos.pexels.com/videos/data-encrypting-891

// https://player.vimeo.com/external/210753068.hd.mp4?s=b8882789271b999e42c1893fb2ae200e5dc8dea5&amp;profile_id=119&amp;oauth2_token_id=57447761
// https://player.vimeo.com/external/194822072.hd.mp4?s=74d6a7693162de0a30c40a70cdcc027dcc7cddd1&amp;profile_id=119&amp;oauth2_token_id=57447761


class Home extends Component {




  render() {
    
    var screenWidth = $(window).width();
    var mobileCheck = false;
    if (screenWidth < 800){
      mobileCheck = true
    }
    
    return (
      
      // <div>
      //   <div className="fullscreen-bg">
      //     <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
      //       <source src="https://player.vimeo.com/external/194822072.hd.mp4?s=74d6a7693162de0a30c40a70cdcc027dcc7cddd1&amp;profile_id=119&amp;oauth2_token_id=57447761" type="video/mp4"></source>
      //     </video>
      //   </div>
        <Grid fluid>
          <div className="fullscreen-bg fullscreen-bg-home">
            <video loop muted autoPlay={mobileCheck} poster={HomeBackgroundImage} className="fullscreen-bg__video">
              <source src="https://player.vimeo.com/external/194822072.hd.mp4?s=74d6a7693162de0a30c40a70cdcc027dcc7cddd1&amp;profile_id=119&amp;oauth2_token_id=57447761" type="video/mp4"></source>
            </video>
        </div>
          <Row className='home-headings'>

            <Col xs={12} className='home-main-heading text-center'>
              <h1 className='type-it'>Guido Bacce</h1>
            </Col>
            <Col xs={12} className='home-subheading text-center'>
              <h3>FULL-STACK WEB DEVELOPER</h3>
            </Col>
            <Col className="home-contact-info text-center">
              <h5> <a href='https://www.linkedin.com/in/gbacce/' className='home-contact-link'>LinkedIn</a> | <a href='https://github.com/gbacce' className='home-contact-link'>GitHub</a> | <a href='mailto:gbacce@gmail.com' className='home-contact-link'>Contact Me</a></h5>
            </Col>
          </Row>
        </Grid>
      // </div>
      
    );
  }
}

export default Home;