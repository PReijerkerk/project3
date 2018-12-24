import React from 'react';
import "./Container.css";
//import M from 'materialize-css';

// ideally this container can be reapplied in all page locations
const Container = props => (
  <div className= "container">
  <div className= "row">
          {props.children}
  </div>
</div>
)

export default Container;