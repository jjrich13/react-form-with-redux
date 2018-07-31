import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import List from '../List/List'


class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      newSnack: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        newSnack: event.target.value
    })
    
  }
  
  render() {


    return (
      <div>
        <p>Test</p>
        <input type="text" placeholder="snack" onChange={this.handleChange}/>
        <button onClick={()=> this.props.dispatch({type: 'SUBMIT', payload: this.state.newSnack})}>Submit</button>
        <List />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {snacks: reduxState.handleSubmit}
}
// snacks: reduxState.handleSubmit

export default connect(mapReduxStateToProps)(App);
