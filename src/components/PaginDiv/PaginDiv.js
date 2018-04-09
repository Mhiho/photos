import React from 'react';
import classes from './PaginDiv.css';


const paginDiv = (props) => {
  return (
            <div className={classes.Box}
              onClick={props.click}>{props.box}
              </div>
  );
}



export default paginDiv;
