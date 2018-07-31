import React, { Component } from 'react';
import { connect } from 'react-redux';


class Form extends Component {
  constructor(props) {
    super(props)

    this.state ={
      newSnack: {
          person: '',
          snack: ''
      }
    }
  }

  handleChange = (property) =>(event) => {
    this.setState({
        newSnack: {
            ...this.state.newSnack,
            [property]: event.target.value
        }
    })
    
  }
  
  render() {

    return (
      <div>
        <input type="text" placeholder="person" onChange={this.handleChange('person')}/>
        <input type="text" placeholder="snack" onChange={this.handleChange('snack')}/>
        <button onClick={()=> this.props.dispatch({type: 'SUBMIT', payload: this.state.newSnack})}>Submit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {snacks: reduxState.handleSubmit}
}
// snacks: reduxState.handleSubmit

export default connect(mapReduxStateToProps)(Form);
