import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Layout from './hoc/Layout/Layout';
import Service from './components/Service/Service';
import Photo from './components/Photo/Photo';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cover from './components/Cover/Cover';
import Book from './components/Book/Book';
import Aux from './hoc/Aux/Aux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Service />
          <Photo />
          <Book />
          <About />
          <Contact />
        </Layout>
      </div>
    );
  }
}

export default App;
