import React from 'react';

const photosOnHover = (props) => {
  return(

    <div className={props.classN}>
    <img
      src={props.photoOnHover}
      onMouseEnter={props.enter}
      onMouseLeave={props.leave} />
    </div>
  )
}

export default photosOnHover;
