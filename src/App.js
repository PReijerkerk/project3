import React, { Component } from 'react';
import './App.css';
import Container from "../src/Components/LoginPage/Container/Container.js"
import Card from "../src/Components/LoginPage/LoginCard/LoginCard.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Container>
          {/* login card initialized*/}
              <Card/>
        </Container>
      </div>
    );
  }
}

export default App;
