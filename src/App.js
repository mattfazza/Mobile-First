import React, { Component } from 'react';
import './App.css';
import ComponentManager from './components/componentmanager';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className = "master-bar">
          <ul class="nav justify-content-center">
          <li class="nav-item">
              <a class="nav-link active" href="#">About</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Work</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
          </li>
          </ul>
      </div>


      <ComponentManager/>

      </div>
    );
  }
}

export default App;
