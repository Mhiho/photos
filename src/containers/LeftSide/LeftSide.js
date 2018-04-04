import React, { Component, Fragment } from 'react';
import Photos from '../Photos/Photos';
import classes from './LeftSide.css';

class LeftSide extends Component {

render() {

  return (
    <Fragment>
      <div className={classes.LeftSide}>
        <Photos />
      </div>
    </Fragment>

  )
}

}

export default LeftSide;
