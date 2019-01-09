import React, { Component } from 'react'
import Collections from '../components/CollectionsPgComponents/Container/container'
import AddItem from '../components/CollectionsPgComponents/AddBtn/addItem'
import '../components/CollectionsPgComponents/Container/collectionsContainer.css'
import Footer from '../components/MainPgComponents/Footer/footer'
import API from "../utils/API";
import { List, ListItem } from "../components/CollectionsPgComponents/List";
import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";



class CollectionPg extends Component {
  state = { 
    case: [],
    name: "",
    story: "",
    user: "",
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
        items: [this.state.item1, this.state.item2],
        date: new Date(Date.now())
      })
        .then(res => this.loadTrophyCase())
        .catch(err => console.log(err));
    }
  };

  render() { 
    return ( 
      <div>
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
        <Collections/>
        {this.state.case.length ? (
              <List>
                {this.state.case.map(collection => {
                  return (
                    <ListItem key={collection._id}>
                      <a href={"/collection/" + collection._id}>
                        <strong>
                          {collection.name} and {collection.story}
                        </strong>
                      </a>
                      <strong>{collection.items[0]}</strong>
                      <strong>{collection.items[1]}</strong>
                      <strong>{collection.items[2]}</strong>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        <AddItem/>
        <Footer />
      </div>
     );
  }
}
 
export default CollectionPg;

