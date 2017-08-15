import React, {Component} from 'react';
import { Col, Button, ButtonGroup, Image } from 'react-bootstrap';


const Projects = (props) => {
  return(
    <Col xs={12} md={6} className='project-container'>

      <Col xs={12} className='project-content'>
        <Image src={this.imagePath} />
        
        <ButtonGroup justified>
          <Button href={this.props.demoURL}>Live Demo</Button>
          <Button href={this.props.repoURL}>GitHub</Button>
        </ButtonGroup>
        
      </Col>
    </Col>
    )
  }
}

export default Project;



// Possible alternate backgrounds

https://videos.pexels.com/videos/code-fixed-on-a-computer-1349

https://videos.pexels.com/videos/monochrome-video-of-a-man-typing-on-keyboard-1134

https://videos.pexels.com/videos/close-up-video-of-fingers-typing-759