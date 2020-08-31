import React, { Component } from 'react';
import './App.css';

import Blog from './Container/Blog/blog';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <Blog />
        </div>
  
    );
  }
}

export default App;
