import React, { Component } from 'react';
import { connect } from 'react-redux'

import Board from './board'

// store.dispatch({ type: 'INCREMENT' })

const mapStateToProps = (state) => {

  console.log('state', state);

  return {
    lists: state.default.kanbanReducer.lists
  }
}

class Kanban extends Component {

  render() {

  console.log('props', this.props);

    return (
      <div>
        <Board lists={this.props.lists}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Kanban)
