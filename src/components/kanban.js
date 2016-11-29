import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firebaseDb } from '../firebase';

import Board from './board'

import { addList, addTask } from '../actions/kanbanActions';


const mapStateToProps = (state) => {

  console.log('stateinkanban', state);

  return {
    lists: state.kanbanReducer.lists
  }
}

class Kanban extends Component {

  componentDidMount() {

    firebaseDb.ref().child('lists').on('value', snap => {
      console.log('snapppp', snap.val());

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

        console.log('list!!!!!!!!!!!!!!', lists);

        lists.forEach((list) => {

          this.props.dispatch(addList(list))
        })
      }
    })

  }

  render() {

    console.log('props', this.props);

    return (
      <div>
        <Board lists={this.props.lists} addList={this._addList.bind(this)} addTask={this._addTask.bind(this)}/>
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

    // this.props.dispatch(addTask(name, listID))
  }



  _addList(name) {

    console.log('here');

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
}

export default connect(mapStateToProps)(Kanban)
