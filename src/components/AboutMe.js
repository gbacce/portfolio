import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Headshot from '../source-files/images/headshot.png'
import AboutMeBackgroundImage from '../source-files/images/background-images/about-me-static-image.png'
import $ from 'jquery';

// https://videos.pexels.com/videos/blurry-video-of-man-writing-1546

class AboutMe extends Component {

  render() {

    var screenWidth = $(window).width();
    var mobileCheck = false;
    if (screenWidth < 800){
      mobileCheck = true
    }

    return (
      <Grid fluid>
        <div className="fullscreen-bg fullscreen-bg-about">
            <video loop muted autoPlay={mobileCheck} poster={AboutMeBackgroundImage} className="fullscreen-bg__video">
              <source src="https://player.vimeo.com/external/174002812.hd.mp4?s=adbd4371ef546a2a57027fb7e799649cb0af2bd8&amp;profile_id=119&amp;oauth2_token_id=57447761" type="video/mp4"></source>
            </video>
        </div>
        <Row>
          <Col xs={12} className='about-heading col-xs-12 text-center'>
            <h1 className='type-it'>About Me</h1>
          </Col>
          <Col sm={12} className='about-section'>
            <Col className='text-center thumbnail-pic' xsOffset={1} xs={10} smOffset={2} sm={8} md={4} mdOffset={1} >
              <Image src={Headshot} responsive circle />
            </Col>
            <Col className='about-content' xsOffset={1} xs={10} smOffset={2} sm={8} mdOffset={1} md={4}>
              <p>Hi! I'm Guido Bacce. I'm a full-stack web developer living in Atlanta, GA. I attended the University of Georgia for my undergraduate studies where I majored in Biology and Finance.</p>
              
              <p>I'm passionate about music and writing great code. When I'm not programming, you can find me producing music or playing the guitar.</p>

              {/*<p>I'm passionate about music and writing great code. When I'm not programming, you can find me producing music or playing the guitar.</p>*/}

              {/*<p>Besides writing code, I also have a passion for music. When I'm not writing code, you can find me producing music or playing the guitar.</p>*/}

              <p>I also enjoy spending time with my friends and reading books.</p>

              <p></p>

            </Col>
          </Col>
        </Row>

        
      </Grid>
    );
  }
}

export default AboutMe;
