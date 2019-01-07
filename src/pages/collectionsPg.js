import React from 'react'
import Collections from '../components/CollectionsPgComponents/Container/container'
import '../components/CollectionsPgComponents/Container/collectionsContainer.css'
import Footer from '../components/MainPgComponents/Footer/footer'

// import React, { Component } from 'react';
// import API from '../utils/API';

// class Collections extends Component {
//   // for now when searched the state will look at all collections title, author or possibly ID depending on if that is useful
//   state = { 
//     collections: [],
//     title: "",
//     author: "",
//     id: ""
//    }

//    componentDidMount() {
//      this.loadCollections();
//    }

//    loadCollections = () => {
//     //  not sure where getCollections will be defined went off activity 11 on this one...
//      API.getCollections()
//      .then(res =>
//       this.setState({collections:res.data, title:"", author: "", id: ""})
//       )
//       .catch(err => console.log(err))
//    };

function CollectionsPg() {
  return (
    <div className="collectionsContainer">
      <Collections />
      <Footer />
    </div>
  )
}

export default CollectionsPg;
