import React, { Component } from 'react'
import Collections from '../components/CollectionsPgComponents/Container/container'
import AddItem from '../components/CollectionsPgComponents/AddBtn/addItem'
import '../components/CollectionsPgComponents/Container/collectionsContainer.css'
import Footer from '../components/MainPgComponents/Footer/footer'
import API from "../utils/API";


class CollectionPg extends Component {
  state = { }

  state = { 
    case: [],
    name: "",
    story: "",
    user: "",
    items: []
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
        <Collections/>
        <AddItem/>
        <Footer />
      </div>
     );
  }
}
 
export default CollectionPg;

