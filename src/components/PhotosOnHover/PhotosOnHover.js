import React from 'react';
import classes from './PhotosOnHover.css';

const photosOnHover = (props) => {
  return(
    <div className={classes.Row}>
    <img
      className={classes.Photo}
      src={props.photoOnHover} />
    </div>
  )
}

export default photosOnHover;
