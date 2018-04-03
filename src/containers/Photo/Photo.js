import React, { Component, Fragment} from 'react';
import axios from 'axios';
import classes from './Photo.css';

class Photo extends Component{
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
      return (<li key={photo.id}>{photo.title}</li>)
    })
    return (
        <ul>
          {renderPhotos}
        </ul>

    )
  }



}


export default Photo;
