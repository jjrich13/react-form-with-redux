import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snack from '../Snack/Snack'


class List extends Component {
  constructor(props) {
    super(props)

  }
  
  render() {

    let arrayOfListItems = this.props.snacks.map((snack, index) => {
        return <Snack 
                snack={snack}
                key={index}
                />
    })

    return (
      <div>
          <ul>{arrayOfListItems}</ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {snacks: reduxState.handleSubmit}
}
// snacks: reduxState.handleSubmit

export default connect(mapReduxStateToProps)(List);
