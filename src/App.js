import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Header"
import Favorites from "./components/Favorites"
import Movies from "./components/Movies"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="FLISOL CBBA" />
        <main className="ed-container l-section l-section--main">
          <h1>Flisol 2018 - Cochabamba</h1>
          <Favorites/>
          <Movies/>
        </main>
      </Fragment>
    );
  }
}

export default App;
