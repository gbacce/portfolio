import React, {Component} from 'react';

class VideoBackground extends Component {
  constructor(props) {
    super(props);

    this.mobileCheck = this.mobileCheck.bind(this)
  }

  mobileCheck(){
    var screenWidth = $(window).width();
    var mobileDevice = false;
    if (screenWidth < 800){
      mobileDevice = true
    }
  }

  render(){
    return(
      <div className="fullscreen-bg">
        <video loop muted autoPlay={this.mobileCheck} poster={this.props.staticImage} className="fullscreen-bg__video">
          <source src={this.props.video} type={this.props.type}></source>
        </video>
      </div>
    )
  }
}

export default VideoBackground;