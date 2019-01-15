import React, { Component } from 'react';
import { Container, Row, Col } from "../components/CollectionsPgComponents/Grid";
import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
import {List, ListItem} from "../components/CollectionsPgComponents/List";
import Thumbnail from "../components/CollectionsPgComponents/Thumbnail"
import API from "../utils/API";


class TestPg extends Component {
    state={
        googleId: "Dantesting",
        case: [],
        name: "",
        description: '',
        price: 0,
        note: '',
        imageURL: '',
    }

   componentDidMount() {
       this.loadUser(this.state.googleId)
   }

   loadUser(id) {
       API.getUserById(id)
       .then(res => this.setState({case: res.data.case}))
   }

   loadCase()


    

    

    render(){
        return(
         <Container>
             <Row>
                 <Col size="md-6">
                    <List>
                    {this.state.case.map(item => (
                    <ListItem key={item._id}>
                        <h1>{item.name}</h1>
                    </ListItem>
                    ))}
                    </List>
                 </Col>
             </Row>
         </Container>
        )
    }
}

export default TestPg