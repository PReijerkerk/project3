import React, { Component } from 'react';
import AddItemModal from '../CollectionsModals/addItemModal'
import './addItem.css'

class AddItem extends Component {
  state = { 
    add:false
   }
  
  modalRendering = () => {
    if (this.state.add) {
      return <AddItemModal/>
    }
  }

  render() { 
    return ( 
      // but this in a container... style wise it looked a slight bit better... 
      <div className='container'>
        {/* <div className='row'>
          <div className='col-lg-6'></div>
          <div className='col-lg-6'> */}
          {/* button that renders modal */}
          <button 
              className="btn btn-secondary" 
              onClick= {()=>(
                this.setState({add:true})
              )}>
              Add
            </button>

          {/* </div>
        </div> */}
       
        {this.modalRendering()}
    </div>
     );
  }
}
 
export default AddItem;