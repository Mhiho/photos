import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import axios from 'axios';
import PaginDiv from './components/PaginDiv/PaginDiv';
import Photo from './components/Photo/Photo';
import classes from './App.css';
import PhotosOnHover from './components/PhotosOnHover/PhotosOnHover';
import Header from './components/Header/Header';


class App extends Component {
  constructor(props){
    super(props)
  }
    state = {
        photos: [],
        initialPage: 1,
        ygrec: 12,
        hover: false,
        thisPhoto: 1,
        showPhoto: false,
        onePhoto: {}
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                const photos = response.data;
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
                        thisPhoto: 0,
                        showPhoto: false
                    },
                    () => this.setState({
                        photos: photos.slice(this.state.initialPage * this.state.ygrec, this.state.initialPage * this.state.ygrec + this.state.ygrec)
                        .map((photo, id) => {
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
                        thisPhoto: 0,
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
        let renderPagin = this.state.photos.map((photo, i) => {
            return (
              <PaginDiv
                box={photo.id}
                key={photo.id}
                click={this.thisPhoto.bind(this, i+1)}
              />
            )
        })
      let renderTitles = this.state.photos.map((el,i) => {
            return (
            <Photo
              click={this.thisPhoto.bind(this, i+1)}
              className={classes.Toggle}
              title = {el.title}
              key = {i}
            />
          )
        },this);
        let classe = ({
          cond: this.state.showPhoto ? classes.Show : classes.Hide,
          condi: this.state.hover ? classes.Big : classes.Small
        });

        return (
          <Layout>
            <Header />
            <div className = {classes.LeftSide}>
              {renderTitles}
            </div>
            <div className={classes.RightSide}>
            <PhotosOnHover
              key={this.state.onePhoto['id']}
              photoOnHover={this.state.onePhoto['thumbnailUrl']}
              classN={[classe['cond'],classe['condi']].join(' ')}
              enter={this.handleMouseHoverIn.bind(this)}
              leave={this.handleMouseHoverOut.bind(this)}
            />
            </div>
            <div className={classes.Break}></div>

            <div className={classes.Pagin}>
                <div className={classes.LeftMargin}></div>
                <button onClick = {this.wstecz.bind(this)}>
                  wstecz
                </button>
            {renderPagin}
                <button onClick = {this.naprzod.bind(this)}>
                  naprzód
                </button>
                  <div className={classes.RightMargin}></div>
            </div>

          </Layout>
        );
    }
}

export default App;
