
import AddItem from '../components/CollectionsPgComponents/AddBtn/addItem';
// import '../components/CollectionsPgComponents/Container/collectionsContainer.css';
// import Footer from '../components/MainPgComponents/Footer/footer';
// // import Parallax from '../svg _background_files/rellax';
// import API from "../utils/API";
// // import { List, ListItem } from "../components/CollectionsPgComponents/List";
// import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
// // import '../components/CollectionsPgComponents/Container/container.css'
import React, { Component } from 'react'
// import Collections from '../components/CollectionsPgComponents/Container/container'
// import AddItem from '../components/CollectionsPgComponents/AddBtn/addItem'
import '../components/CollectionsPgComponents/Container/collectionsContainer.css'
import Footer from '../components/MainPgComponents/Footer/footer'
import API from "../utils/API";
// import { List, ListItem } from "../components/CollectionsPgComponents/List";
import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
import ImageUpload from '../components/CollectionsPgComponents/ImageUpload/ImageUpload'
import ImageGrid from '../components/CollectionsPgComponents/ImageGrid/ImageGrid'
import './collectionsPg.css'

class CollectionPg extends Component {
  state = { 
    googleId: 'Dantestingyy',
    userData: {},
    tcase: [],
    name: "",
    story: "",
    user: "",
    items: []
  
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
      <div className="container-margin">
          {/* <Collections/> */}
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
                  {this.state.userData.tcase ? (
                  <tbody>
                    {this.state.userData.tcase.map((collection, index) => {
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
                          <td>
                            {this.state.userData.tcase[0].items ? (
                              <div>{collection.items.map((subitem, i) => {
                                return (
                                  <td>{subitem.name}</td>
                                )
                              })}</div>
                            ):(<div>no items to display</div>)}
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
        <div className = 'container'>
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
                placeholder="User (required)"
              />
              <TextArea
                className="textarea"
                value={this.state.story}
                onChange={this.handleInputChange}
                name="story"
                placeholder="What is it (required)"
              />
              {/* <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Add Image:</label>
                <input type="file" className="form-control-file" id="file"/>
              </div> */}
              {/* <TextArea
                className="textarea"
                value={this.state.items}
                onChange={this.handleInputChange}
                name="items"
                placeholder="Item's image URL"
              /> */}
              <div className="row">
                <ImageUpload />
                <ImageGrid />
                {/* <TextArea
                className="textarea"
                value={this.state.items}
                onChange={this.handleInputChange}
                name="items"
                placeholder="Item's image URL"
              /> */}
              </div>
              
            </form>
            <FormBtn
              // disabled={!(this.state.user && this.state.name)}
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
            <br></br>
            </div>
            <AddItem/>
        <Footer />
      </div>
      );
    }
  }
   
  export default CollectionPg;
  
  