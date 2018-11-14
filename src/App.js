import React, { Component } from 'react';
import './App.css';
import PersonForm from './FormikForm/PersonForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonForm />
      </div>
    );
  }
}

export default App;
