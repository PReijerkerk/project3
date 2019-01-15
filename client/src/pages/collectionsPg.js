import React, { Component } from 'react'
// import Collections from '../components/CollectionsPgComponents/Container/container'
import AddItem from '../components/CollectionsPgComponents/AddBtn/addItem';
import '../components/CollectionsPgComponents/Container/collectionsContainer.css';
import Footer from '../components/MainPgComponents/Footer/footer';
// import Parallax from '../svg _background_files/rellax';
import API from "../utils/API";
// import { List, ListItem } from "../components/CollectionsPgComponents/List";
import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
// import '../components/CollectionsPgComponents/Container/container.css'


class CollectionPg extends Component {
  state = { 
    googleId: 'Dantesting',
    userData: {}

  }

  componentDidMount() {
    this.loadTrophyCase()
  }

  loadTrophyCase = () => {
    API.getUserById(this.state.googleId)
    .then(res =>
        this.setState({
          userData: res.data
        })
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

  render() { 
    return ( 
      <div>
        <div className = 'container'>
        {/* removed relax js just for now as 
        the zIndex on this pg is harder to pin down */}
        {/* <Parallax/> */}
         <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Collection Name (required)"
              />
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="user (required)"
              />
              <TextArea
                value={this.state.story}
                onChange={this.handleInputChange}
                name="story"
                placeholder="What is it (required)"
              />
              <FormBtn
                disabled={!(this.state.user && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            <br></br>
            </div>

        {/* <Collections/> */}
        <hr></hr>
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
                    <td>
                        added item will go here
                    </td>
                    <td>
                        added item will go here
                    </td>
                    <td>
                        added item will go here
                    </td>
                    <td>
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

        <AddItem/>
        <Footer />
      </div>
     );
  }
}
 
export default CollectionPg;

