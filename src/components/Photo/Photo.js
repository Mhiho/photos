import React, { Component } from 'react';
import classes from './Photo.css'





class Photo extends Component {
  render() {

  return(
  <div
  className={classes.Container}>
    <div className={classes.Title}
          onClick={this.props.click}
    >
    <a href="#">
      {this.props.title}
    </a>
    </div>
    <img className={this.props.classN} src={this.props.url}/>
  </div>
)
}
}

export default Photo;
