import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LeftSide from './containers/LeftSide/LeftSide';
import Pagination from './containers/Pagination/Pagination';
import RightSide from './containers/RightSide/RightSide';
import axios from 'axios';
import PaginDiv from './components/PaginDiv/PaginDiv';
import Photo from './components/Photo/Photo';
import classes from './App.css';
import PhotosOnHover from './components/PhotosOnHover/PhotosOnHover';




class App extends Component {
  state= {
      photos: [],
      initialPage: 1,
      ygrec: 12
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        const photos = response.data;
        let twelvePhotos= photos.map(photo => {
          return {
            ...photo
          }
        });

      this.setState({initialPage: this.state.initialPage},
        () => this.setState({photos: photos.slice(this.state.initialPage*this.state.ygrec, this.state.initialPage*this.state.ygrec + this.state.ygrec).map(photo => {
          return {
            ...photo
          }
        })
      })
      )
    });
  }

  wstecz() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        const photos = response.data;


   this.setState({ initialPage: this.state.initialPage - 1 },
() => this.setState({photos: photos.slice(this.state.initialPage*this.state.ygrec, this.state.initialPage*this.state.ygrec + this.state.ygrec).
     map((photo, id)=> {
       return{  ...photo }
     })
   })
  )
})
 }

 naprzod() {

   axios.get('https://jsonplaceholder.typicode.com/photos')
     .then(response => {
       const photos = response.data;

   this.setState({ initialPage: this.state.initialPage + 1 },
() => this.setState({photos: photos.slice(this.state.initialPage*this.state.ygrec, this.state.initialPage*this.state.ygrec + this.state.ygrec).map((photo, id)=> {
  return{  ...photo }}) })
)
})
 }

  render() {
    let renderIt = this.state.photos.map(photo => {
    return (
          <PaginDiv
            box={photo.id}
            key={photo.id}

          />
    )
    })
    const renderPhotos = this.state.photos.map(photo =>{
      return <Photo
              title={photo.title}
              key={photo.id}

            />
    });

    const onHover = this.state.photos.map(photo =>{
      return (
        <PhotosOnHover
            key={photo.id}
            photoOnHover={photo.url}
        />
      )
    });
    return (
      <Layout>
        <div className={classes.LeftSide}>
        {renderPhotos}
        </div>
        <div className={classes.RightSide}>
          {onHover}
        </div>
              <button
                onClick={this.wstecz.bind(this)}>
                  wstecz
                </button>
                  {renderIt}
              <button
                onClick={this.naprzod.bind(this)}>
                  naprzód
                </button>
      </Layout>
    );
  }
}

export default App;
