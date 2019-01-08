import React, { Component } from 'react';
import './collections.css'

class Collections extends Component {
  
    state ={
      collections: []
    }

  render(){
    return (
        <div classNameName="gridContainer">
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
}

export default Collections;
