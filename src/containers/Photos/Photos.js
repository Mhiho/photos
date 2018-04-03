import React, { Component, Fragment} from 'react';
import Photo from '../../components/Photo/Photo';
import axios from 'axios';
import classes from './Photos.css';

class Photos extends Component{
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
        this.setState({photos: photos})
      });
  };

  render() {
    const renderPhotos = this.state.photos.map(photo =>{
      return <Photo
              title={photo.title}
              key={photo.id}
              image={photo.url}
            />
    })
    return (
            <div>
              {renderPhotos}
            </div>
    )
  }



}


export default Photos;
