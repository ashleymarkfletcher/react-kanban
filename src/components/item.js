import React, { Component } from 'react';

export default class Board extends Component {

  render() {
    console.log('item props,', this.props);

    return (
      <div>
        {this.props.item.name}
        <button onClick={this.props.toggleEditTask.bind(this, this.props.item.id)}>edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.listID, this.props.item.id)}>delete</button>
      </div>
    )

  }
}
