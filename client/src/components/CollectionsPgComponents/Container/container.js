import  React, { Component } from 'react'
import './container.css'

// this component is missleading in its labeling I suggest this file/component container
//be changed to TrophyCase or Collection
class Container extends Component {
  
  state={
    collection: []
  }

  render(){
  return(
        <div className="collectionContainer">
             <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col"></th>
                <th scope="col">collection col 1</th>
                <th scope="col">collection col 2</th>
                <th scope="col">collection col 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Shelf 1</th>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
                </tr>
                <tr>
                <th scope="row">Shelf 2</th>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
                </tr>
                <tr>
                <th scope="row">Shelf 3</th>
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

export default Container; 
