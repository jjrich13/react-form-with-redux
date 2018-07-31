import React, { Component } from 'react';
import { connect } from 'react-redux';


class Snack extends Component {
  
  render() {

    return (
      <div>
          <li>{this.props.snack.person}: {this.props.snack.snack}</li>
      </div>
    );
  }
}


// snacks: reduxState.handleSubmit

export default Snack;
