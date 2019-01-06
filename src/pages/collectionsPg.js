import React, { Component } from 'react'
import Collections from '../components/CollectionsPgComponents/Container/container'
import AddItem from '../components/CollectionsPgComponents/AddBtn/addItem'
import '../components/CollectionsPgComponents/Container/collectionsContainer.css'


class CollectionPg extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div>
        <Collections/>
        <AddItem/>
      </div>
     );
  }
}
 
export default CollectionPg;

