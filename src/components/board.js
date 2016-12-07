import React, { Component } from 'react';

import ListContainer from './list'

export default class Board extends Component {

  render() {
    console.log('board props,', this.props);

    const Lists = this.props.lists.map((list) => {
      return <ListContainer
        list={list}
        addTask={this.props.addTask.bind(this)}
        deleteTask={this.props.deleteTask.bind(this)} 
        key={list.id}
      />
    })

    return (
      <div>
        <button onClick={this.props.addList.bind(this, 'new list')}>add list</button>
        {Lists}
      </div>
    )

  }
}
