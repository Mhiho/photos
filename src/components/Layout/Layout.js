import React, { Fragment } from 'react';
import classes from './Layout.css';
import Header from '../../components/Header/Header';

const layout = (props) => (
  <Fragment>
        <Header />
        <main className={classes.Content}>
          {props.children}
        </main>
  </Fragment>
);

export default layout;
