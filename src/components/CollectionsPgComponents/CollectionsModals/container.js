import React from 'react';
import './collections.css'

// this component is missleading in it's labeling I suggest this file/component container
//be changed to TrophyCase or Collection
function Container() {
  return(
        <div className="collectionContainer">
            <div className="card-header"><strong>Collection Title</strong></div>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col">collection col 1</th>
                <th scope="col">collection col 2</th>
                <th scope="col">collection col 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
                </tr>
            </tbody>
          </table>
        </div>
  )
}

export default Container; 
