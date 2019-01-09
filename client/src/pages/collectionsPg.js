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
        {/* User collection to be added to the db; this is Dan's form. We need the format below to go into addItemModal*/}
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
        {/* Our container component/shelfcase called "Collections" is where we want to display the code below*/}
        <Collections>
        {/*Here we get an array of the user's collections. We need to get this into the container component */}
        {this.state.case.length ? (
              <List>
                {this.state.case.map(collection => {
                  return (
                    <ListItem key={collection._id}>
                      <a href={"/collection/" + collection._id}>
                        {/* Dan only listed collection name. We want to add collection.items */}
                        <strong>
                          {collection.name} 
                        </strong>
                      </a>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Collections>
        {/* AddItem takes us to AddItemModal which is where we need to add value and onChange */}
        <AddItem/>
        <Footer />
      </div>
     );
  }
}
 
export default CollectionPg;

