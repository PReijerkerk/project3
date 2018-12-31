import React, { Component } from "react";
import NavTabs from "../Components/MainPgComponents/NavTabs/NavTabs";
import LoginPg from "../pages/LoginPg";
import CollectionsPg from "../pages/CollectionsPg";
import MainPg from "../pages/MainPg";
import AboutUs from "../pages/AboutUs"
import Contact from "../pages/Contact"

class Portfolio extends Component {
  state = {
    currentPage: "LoginPg"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "LoginPg") {
      return <LoginPg />;
    } else if (this.state.currentPage === "MainPg") {
      return <MainPg />;
    } else if (this.state.currentPage === "CollectionsPg") {
      return <CollectionsPg />;
    } else if (this.state.currentPage === "AboutUs") {
        return <AboutUs />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
