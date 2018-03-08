import React, { Component } from 'react';

import { Element } from 'react-scroll';

import './App.css';

import Layout from './hoc/Layout/Layout';
import Service from './components/Service/Service';
import Photo from './components/Photo/Photo';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Book from './components/Book/Book';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
            <Element name="service" className="element">
              <Service />
            </Element>
            <Element name="photo" className="element"> 
              <Photo />
            </Element>
            <Element name="book" className="element">
              <Book />
            </Element>
            <Element name="about" className="element">
              <About />
            </Element>
            <Element name="contact" className="element">
              <Contact />
            </Element>
        </Layout>
      </div>
    );
  }
}

export default App;
