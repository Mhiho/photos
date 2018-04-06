import React, { Component, Fragment } from 'react';
import classes from './RightSide.css';
import axios from 'axios';
import PhotosOnHover from '../../components/PhotosOnHover/PhotosOnHover';


class RightSide extends Component {
constructor(props){
  super(props)
}

state = {
  photos: []
}

componentDidMount() {
  axios.get( 'https://jsonplaceholder.typicode.com/photos' )
    .then( response => {
      console.log(response);
      const photos = response.data.slice(0,12);
      const updatedPhotos = photos.map(photo => {
        return {
          ...photo
        }
      })
      this.setState({photos: updatedPhotos})
    });
};

render() {
  const onHover = this.state.photos.map(photo =>{
    return (
      <PhotosOnHover
          key={photo.id}
          photoOnHover={photo.url}
      />
    )
  });
  return (
    <div className={classes.RightSide}>
      {onHover}
    </div>
  )
}

}

export default RightSide;
