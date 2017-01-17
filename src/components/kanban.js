import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firebaseDb } from '../firebase';

import Board from './board'

import { addList, addTask, toggleEditTask } from '../actions/kanbanActions';

class Kanban extends Component {

  componentDidMount() {

    firebaseDb.ref().child('lists').on('value', snap => {

      if (snap.val() != null) {

        let lists = Object.keys(snap.val()).map((listID) => {

          let list = snap.val()[listID]

          if (list.items != null) {
            list.items = Object.keys(list.items).map((itemID) => {
              return list.items[itemID]
            })

          }


          return list
        })

        lists.forEach((list) => {

          this.props.dispatch(addList(list))
        })
      }
    })

  }

  render() {

    return (
      <div>
        <Board
          lists={this.props.lists}
          addList={this._addList.bind(this)}
          addTask={this._addTask.bind(this)}
          deleteTask={this._deleteTask.bind(this)}
          toggleEditTask={this._toggleEditTask.bind(this)}
          editTaskID={this.props.editTaskID}
          saveTask={this._saveTask.bind(this)}
        />
      </div>
    )
  }

  _addTask(name, listID){

    let ref = firebaseDb.ref('lists/' + listID).child('items').push()
    let key = ref.key

    ref.set({
      name: name,
      id: key
    }).then((res) => {

      console.log('sucessfully added item!');
      // TODO: dispatch success

    }).catch((err) => {
      console.log('error adding item: ', err);
    });

  }

  _deleteTask(listID, taskID){

    let ref = firebaseDb.ref('lists/' + listID + '/items').child(taskID).remove()
      .then(() => {
        console.log("Remove succeeded.")
        // TODO: dispatch success

      })
      .catch((error) => {
        console.log("Remove failed: " + error.message)
      });

  }

  _toggleEditTask(taskID){

    this.props.dispatch(toggleEditTask(taskID))

  }

  _addList(name) {

    // Get a key for a new Post.
    let key = firebaseDb.ref().child('lists').push().key;

    firebaseDb.ref('lists/' + key).set({
      name: name,
      id: key
    }).then((res) => {

      console.log('sucessfully added list!');
      // TODO: dispatch success

    }).catch((err) => {
      console.log('error adding list: ', err);
    })

  }

  _saveTask(listID, taskID, taskName){
    let ref = firebaseDb.ref('lists/' + listID + '/items').child(taskID).update({
      name: taskName
    })
    .then(() => {
      console.log("update succeeded.")
      // TODO: dispatch success

    })
    .catch((error) => {
      console.log("update failed: " + error.message)
    });
  }
}

const mapStateToProps = (state) => {

  return {
    lists: state.kanbanReducer.lists,
    editTaskID: state.kanbanReducer.editTaskID
  }
}

export default connect(mapStateToProps)(Kanban)
