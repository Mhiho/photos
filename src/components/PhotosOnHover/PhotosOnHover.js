import React from 'react';
import classes from './PhotosOnHover.css';

const photosOnHover = (props) => {
  return(

    <div className={props.classN}>
    <img
      src={props.photoOnHover} />
    </div>
  )
}

export default photosOnHover;
