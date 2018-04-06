import React, { Component, Fragment } from 'react';
import classes from './Pagination.css';
import PaginDiv from '../../components/PaginDiv/PaginDiv';
import axios from 'axios';


class Pagination extends Component {
  constructor(props) {
    super(props)
  }
  state= {
    photos: [],
    x: 0,
    y: 12,
    initialPage: 1
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
    const renderIt = this.state.photos.map(photo =>{
      return (
            <PaginDiv
              box={photo.id}
              key={photo.id}

            />
)
    })
    return (
            <div>
              {renderIt}
            </div>
    )
  }

}

export default Pagination;
