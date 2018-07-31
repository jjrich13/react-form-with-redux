import React, { Component } from 'react';
import { connect } from 'react-redux';


class Snack extends Component {
  constructor(props) {
    super(props)

  }
  
  render() {

    return (
      <div>
          <li>{this.props.snack}</li>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {snacks: reduxState.handleSubmit}
}
// snacks: reduxState.handleSubmit

export default connect(mapReduxStateToProps)(Snack);
