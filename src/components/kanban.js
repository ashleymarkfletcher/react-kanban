import React, { Component } from 'react';
import { connect } from 'react-redux'

// store.dispatch({ type: 'INCREMENT' })

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    test: 1
  }
}

class Kanban extends Component {

  render() {

  console.log('own', this.props);

    return (
      <div>
        hellooo
      </div>
    );
  }
}

export default connect(mapStateToProps)(Kanban)
