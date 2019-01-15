import React, { Component } from 'react';
import { Container, Row, Col } from "../components/CollectionsPgComponents/Grid";
import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
import {List, ListItem} from "../components/CollectionsPgComponents/List";
import Thumbnail from "../components/CollectionsPgComponents/Thumbnail"
import API from "../utils/API";


class TestPg extends Component {
    state={
        userData:{},
        googleId: "Dantesting",
        tcase: '',
        


    }
       

   componentDidMount() {
       this.loadUserData(this.state.googleId)
   }

   loadUserData(id) {
       API.getUserById(id)
       .then(res => this.setState({userData: res.data}))
       .catch(err => console.log(err));
   }

   


    

    

    render(){
        return(
         <Container>
             <Row>
                 <Col size="md-6">
                        {this.state.userData.tcase ? (
                            <List>
                                {this.state.userData.tcase.map(tcase => 
                                    <ListItem key={tcase._id}>
                                        <h1>{tcase.name}</h1>
                                        {tcase.items ? (
                                            <div>
                                            {tcase.items.map(item => <h1>{item.name}</h1>)}
                                            </div>
                                        ) : (<p>noting here, add items</p>)}
                                    </ListItem>
                                )}
                            </List>
                        ) : (
                            <h1>there aint shit </h1>
                        )}
                 </Col>
             </Row>
         </Container>
        )
    }
}

export default TestPg