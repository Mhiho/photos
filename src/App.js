import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LeftSide from './containers/LeftSide/LeftSide';
import Pagination from './containers/Pagination/Pagination';
import RightSide from './containers/RightSide/RightSide';


class App extends Component {
  render() {
    return (
      <Layout>
        <LeftSide />
        <RightSide />
        <Pagination />
      </Layout>
    );
  }
}

export default App;
