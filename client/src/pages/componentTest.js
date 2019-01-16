import React, { Component } from 'react';
import { Container, Row, Col } from "../components/CollectionsPgComponents/Grid";
// import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
import {List, ListItem} from "../components/CollectionsPgComponents/List";
import Card from "../components/CollectionsPgComponents/Card";
// import Thumbnail from "../components/CollectionsPgComponents/Thumbnail"
import API from "../utils/API";
import './componentTest.css'


class TestPg extends Component {
    state={
        userData:{},
        username: "Dantheman",
        tcase: '',
    }
       

   componentDidMount() {
       this.loadUserData(this.state.username)
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
                <Col size="md-12">
                        {this.state.userData.tcase ? 
                            (
                                <Row>
                                    {this.state.userData.tcase.map((collection, index) => {
                                        // eslint-disable-next-line no-unused-expressions
                                       return(
                                        <Col size="md-12">
                                            <Card key={index} heading={collection.name} >
                                                {collection.items ? (
                                                    <p>Items are here</p>
                                                ) : (
                                                    <p>No items to display</p>
                                                )}
                                            </Card>
                                        </Col>
                                        )
                                    })}
                                </Row>
                            ) 
                            : 
                            (
                                <h1>No Collections to display</h1>
                            )
                        }
                </Col>
            </Row>
        </Container>
        )
    }
}

export default TestPg