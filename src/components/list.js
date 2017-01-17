import React, { Component } from 'react';

import Item from './item'
import List from 'material-ui/List';

export default class ListContainer extends Component {

  constructor(props){
    super();

    this.state = {
      listInput: props.list.name
    }
  }

  render() {

    const Items = (this.props.list.items) ? this.props.list.items.map((item) => {

      return <Item
        item={item}
        key={item.id}
        deleteTask={this.props.deleteTask.bind(this)}
        listID={this.props.list.id}
        toggleEditTask={this.props.toggleEditTask.bind(this)}
        editTaskID={this.props.editTaskID}
        saveTask={this.props.saveTask.bind(this)}
        />
    }) : null

    const listName = (this.props.list.id === this.props.editListID) ?
    <div>
      <input type="text" onChange={this._handleInput.bind(this)} value={this.state.listInput}/>
      <button onClick={this._handleSave.bind(this)}>save</button>
      <button onClick={this.props.toggleEditList.bind(this, null)}>cancel</button>
    </div> :
    <div>
      <h2>{this.props.list.name}</h2>
      <button onClick={this.props.toggleEditList.bind(this, this.props.list.id)}>edit</button>
      <button onClick={this.props.addTask.bind(this, 'new task', this.props.list.id)}>new task</button>
    </div>

    return(
      <div>
        {listName}
        {Items}
      </div>
    )

  }

    _handleInput(e){
      console.log('e', e.target.value);
      this.setState({listInput: e.target.value})
    }

    _handleSave(){
      this.props.saveList(this.props.list.id, this.state.listInput)
      this.props.toggleEditList(null)
    }
}
