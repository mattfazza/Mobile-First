import React, { Component } from 'react';
import './App.css';
import ComponentManager from './components/componentmanager';
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="master-bar">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Link class="nav-link active" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/work">Experience</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/projects">Projects</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>


        <ComponentManager />

      </div>
    );
  }
}

export default App;
