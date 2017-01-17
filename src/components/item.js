import React, { Component } from 'react';

export default class Board extends Component {

  constructor(props){
    super();

    this.state = {
      taskInput: props.item.name
    }
  }

  render() {

    const itemBody = this._getItemBody()

    return (
      itemBody
    )

  }

  _getItemBody(){
    if (this.props.item.id === this.props.editTaskID) {
      return (
        <div>
        <input type="text" onChange={this._handleInput.bind(this)} value={this.state.taskInput}/>
        <button onClick={this._handleSave.bind(this)}>save</button>
        <button onClick={this.props.toggleEditTask.bind(this, null)}>cancel</button>
        </div>
      )

    } else {
      return (
        <div>
          {this.props.item.name}
          <button onClick={this.props.toggleEditTask.bind(this, this.props.item.id)}>edit</button>
          <button onClick={this.props.deleteTask.bind(this, this.props.listID, this.props.item.id)}>delete</button>
        </div>
      )
    }
  }

  _handleInput(e){
    console.log('e', e.target.value);
    this.setState({taskInput: e.target.value})
  }

  _handleSave(){
    this.props.saveTask(this.props.listID, this.props.item.id, this.state.taskInput)
    this.props.toggleEditTask(null)
  }
}
