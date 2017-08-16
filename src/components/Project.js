import React from 'react';
import { Col, Button, ButtonGroup, Image } from 'react-bootstrap';

const Project = (props) => {
  return(
    <Col xs={12} md={6} className='project-container'>

      <Col xs={12} className='project-content'>
        <Image src={props.image} responsive />
        
        <ButtonGroup className='project-button-group' justified>
          <Button href={props.demo}>Live Demo</Button>
          <Button href={props.repo}>GitHub</Button>
        </ButtonGroup>
        
      </Col>
    </Col>
  )
}

export default Project;


// Possible alternate backgrounds

// https://videos.pexels.com/videos/code-fixed-on-a-computer-1349

// https://videos.pexels.com/videos/monochrome-video-of-a-man-typing-on-keyboard-1134

// https://videos.pexels.com/videos/close-up-video-of-fingers-typing-759