import React, { Component } from 'react';
import { Container, Row, Col } from "../components/CollectionsPgComponents/Grid";
// import { Input, TextArea, FormBtn } from "../components/CollectionsPgComponents/Form";
import {List, ListItem} from "../components/CollectionsPgComponents/List";
import Card from "../components/CollectionsPgComponents/Card";
// import Thumbnail from "../components/CollectionsPgComponents/Thumbnail"
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
                    <Card>
                        {this.state.userData.tcase ? 
                            (
                                <List>
                                    {this.state.userData}
                                </List>
                            ) 
                            : 
                            (
                                <h1>there aint shit </h1>
                            )
                        }
                    </Card>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default TestPg