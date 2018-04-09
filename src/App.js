import React, { Component, PureComponent } from 'react';
import Layout from './components/Layout/Layout';
import axios from 'axios';
import PaginDiv from './components/PaginDiv/PaginDiv';
import Photo from './components/Photo/Photo';
import classes from './App.css';
import PhotosOnHover from './components/PhotosOnHover/PhotosOnHover';
import _ from 'lodash';
import {  BrowserRouter as Router, Link} from 'react-router-dom';


class App extends PureComponent {
  constructor(props){
    super(props)
  }
    state = {
        photos: [],
        initialPage: 1,
        ygrec: 12,
        hover: false,
        thisPhoto: 0,
        showPhoto: false,
        onePhoto: {}
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                const photos = response.data;
                let twelvePhotos = photos.map(photo => {
                    return {
                        ...photo
                    }
                });

                this.setState({
                        initialPage: this.state.initialPage
                    },
                    () => this.setState({
                        photos: photos.slice(this.state.initialPage * this.state.ygrec, this.state.initialPage * this.state.ygrec + this.state.ygrec).map(photo => {
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


                this.setState({
                        initialPage: this.state.initialPage - 1,
                        thisPhoto: null,
                        showPhoto: false
                    },
                    () => this.setState({
                        photos: photos.slice(this.state.initialPage * this.state.ygrec, this.state.initialPage * this.state.ygrec + this.state.ygrec).
                        map((photo, id) => {
                            return { ...photo
                            }
                        })
                    })
                )
            })
    }

    naprzod() {

        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                const photos = response.data;

                this.setState({
                        initialPage: this.state.initialPage + 1,
                        thisPhoto: null,
                        showPhoto: false
                    },
                    () => this.setState({
                        photos: photos.slice(this.state.initialPage * this.state.ygrec, this.state.initialPage * this.state.ygrec + this.state.ygrec).map((photo, id) => {
                            return { ...photo
                            }
                        })
                    })
                )
            })
    }


    handleMouseHoverIn() {
      this.setState({hover: true});
    }

    handleMouseHoverOut() {
      this.setState({hover: false});
    }
    thisPhoto(i,event){
      this.setState({ thisPhoto: i},
      ()=> {
        let top = this.state.thisPhoto;
        axios.get(`https://jsonplaceholder.typicode.com/photos/${top}`)
            .then(response => {
        let onePhoto = response.data;
        this.setState({onePhoto: onePhoto,
                      showPhoto: true})
                    })
                  }
      )
    }

    render() {
        let renderIt = this.state.photos.map(photo => {
            return (
              <PaginDiv
                box = {photo.id}
                key = {photo.id}
              />
            )
        })
      let renderTitles = this.state.photos.map((el,i) => {
            return (
            <Photo
              click={this.thisPhoto.bind(this, i)}
              className={classes.Toggle}
              title = {el.title}
              key = {i}
              enter={this.handleMouseHoverIn.bind(this)}
              leave={this.handleMouseHoverOut.bind(this)}

            />
          )
        },this);


        return ( <Layout >

            <div className = {classes.LeftSide}>
              {renderTitles}
            </div>
            <div className={classes.RightSide}>
            <PhotosOnHover
              key={this.state.onePhoto['id']}
              photoOnHover={this.state.onePhoto['thumbnailUrl']}
              classN={this.state.showPhoto ? classes.Show : classes.Hide}
            />
            </div>
            <div className={classes.Break}></div>
            <button
              onClick = {this.wstecz.bind(this)}
            >
            wstecz
            </button>
            {renderIt}
            <button onClick = {this.naprzod.bind(this)}
            >
              naprzód
            </button>
            </Layout>
        );
    }
}

export default App;
