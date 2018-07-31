import React, { Component } from 'react';
import './App.css';
import List from '../List/List'
import Form from '../Form/Form'


class App extends Component {
  
  render() {

    return (
      <div>
        <h2>Add a Snack</h2>
        <Form />
        <List />
      </div>
    );
  }
}

// snacks: reduxState.handleSubmit

export default App;
