import React from 'react';
import classes from './Photo.css'


const photo = (props) => (
  <div>
    <img src={props.image} alt={props.alt}/>
    <h1>{props.title}</h1>
  </div>
)

export default photo;
