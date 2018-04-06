import React, { Component, Fragment} from 'react';
import Photo from '../../components/Photo/Photo';
import axios from 'axios';
import classes from './Photos.css';

class Photos extends Component{
  constructor(props){
    super(props)
  }
  state= {
    photos: [],
    x: 0,
    y: 12,
    initialPage: 0
  }
  componentDidMount() {
    axios.get( 'https://jsonplaceholder.typicode.com/photos' )
      .then( response => {
        console.log(response);
        const all = response.data;
        const photos = response.data.slice(this.state.x+(12*this.state.initialPage), this.state.y+(12*this.state.initialPage));
        const updatedPhotos = photos.map(photo => {
          return {
            ...photo
          }
        });

        this.setState({photos: updatedPhotos})
      });
  }

  render() {
    const renderPhotos = this.state.photos.map(photo =>{
      return <Photo
              title={photo.title}
              key={photo.id}
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
