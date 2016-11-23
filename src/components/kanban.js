import React, { Component } from 'react';
import { connect } from 'react-redux'

import Board from './board'

import { addList, addTask } from '../actions/kanbanActions';


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
        <Board lists={this.props.lists} addList={this._addList.bind(this)} addTask={this._addTask.bind(this)}/>
      </div>
    )
  }

  _addList(name){
    console.log('here');
    this.props.dispatch(addList(name))
  }

  _addTask(name, listID){
    console.log('here');
    this.props.dispatch(addTask(name, listID))
  }
}

export default connect(mapStateToProps)(Kanban)
