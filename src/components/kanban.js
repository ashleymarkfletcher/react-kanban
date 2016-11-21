import React, { Component } from 'react';
import { connect } from 'react-redux'

import Board from './board'

import { addList } from '../actions/kanbanActions';


// store.dispatch({ type: 'INCREMENT' })

const mapStateToProps = (state) => {

  console.log('stateinkanban', state);

  return {
    lists: state.kanbanReducer.lists
  }
}

class Kanban extends Component {

  render() {

    // this.props.dispatch(addList('test'))


  console.log('props', this.props);

    return (
      <div>
        <button onClick={this._addList.bind(this, 'new list')}>add list</button>
        <Board lists={this.props.lists}/>
      </div>
    )
  }

  _addList(name){
    console.log('here');
    this.props.dispatch(addList(name))
  }
}

export default connect(mapStateToProps)(Kanban)
