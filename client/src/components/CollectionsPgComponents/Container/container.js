import  React, { Component } from 'react'
import './container.css'
import API from '../../../utils/API'


// this component is missleading in its labeling I suggest this file/component container
//be changed to TrophyCase or Collection
class Container extends Component {
  
  state={
    case: [],
    user: "",
    name: "",
    story: ""
  }
  componentDidMount() {
    this.loadTrophyCase()
  }

  loadTrophyCase = () => {
    API.getAllCollections()
    .then(res =>
        this.setState({case: res.data})
    )
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.user) {
      API.saveCollection({
        name: this.state.name,
        story: this.state.story,
        user: this.state.user,
        items: [],
        date: new Date(Date.now())
      })
        .then(res => this.loadTrophyCase())
        .catch(err => console.log(err));
    }
  };
  render(){
  return(
    <div className = 'container'>
    <div className="collectionContainer">
      <table className="table collectionContainer">
        <thead className="thead-light">
          <tr>
          <th scope="col">User Collections</th>
          {/* <th scope="col">test</th>
          <th scope="col">collection col 2</th>
          <th scope="col">collection col 3</th> */}
          </tr>
        </thead>
            {this.state.case.length? (
            <tbody>
              {this.state.case.map(collection => {
                return (
                  <tr>
                    <td>
                      {/* shelf list by collection id */}
                    <div key={collection._id}>
                      <a href={"/collection/" + collection._id}>
                        {/* Dan only listed collection name. We want to add collection.items */}
                        <strong>
                          {collection.name} Shelf
                        </strong>
                      </a>
                    </div>
                    </td>


               {/* not sure how to render this from the DB */}
                    <td
                      key={collection.itemName}
                    >
                        added item will go here
                    </td>
            
                   
                  </tr>
                );
              })}
         </tbody>
          ) : (
            <tbody>No Results to Display </tbody> 
            )}
      </table>
    </div>
  </div>
  )
}
}

export default Container; 
