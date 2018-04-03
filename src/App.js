import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LeftSide from './containers/LeftSide/LeftSide';

class App extends Component {
  render() {
    return (
      <Layout>
        <LeftSide />
      </Layout>
    );
  }
}

export default App;
