import React from 'react';
import classes from './Photo.css'


const photo = (props) => (

  <div className={classes.Container}>
    <div className={classes.Title}>{props.title}</div>
    <img className={classes.Image} src={props.thumbnail} alt={props.alt}/>
  </div>
)

export default photo;
