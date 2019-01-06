import React from 'react';
import './container.css'

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
