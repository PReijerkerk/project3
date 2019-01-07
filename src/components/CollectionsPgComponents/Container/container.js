import React from 'react';
import './container.css'

// this component is missleading in it's labeling I suggest this file/component container
//be changed to TrophyCase or Collection
function Container() {
  return(
        <div className="collectionContainer">
            <div className="card-header"><strong>Collection Title</strong></div>
            <div className="card-body">
                <div className="row">
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                </div>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                </div>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                </div>
            </div>
        </div>
  )
}

export default Container; 
