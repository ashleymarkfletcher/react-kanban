import React, { Component } from 'react';

import Item from './item'
import List from 'material-ui/List';

export default class ListContainer extends Component {

  render() {

    const Items = (this.props.list.items) ? this.props.list.items.map((item) => {
      console.log('itemidddd', item.id);
      return <Item
        item={item}
        key={item.id}
        deleteTask={this.props.deleteTask.bind(this)}
        listID={this.props.list.id}
        />
    }) : null

    console.log('list props', this.props);
    return(
      <div>
        <h2>{this.props.list.name}</h2>
        <button>edit</button>
        <button onClick={this.props.addTask.bind(this, 'new task', this.props.list.id)}>new task</button>
        {Items}
      </div>
    )

  }
}
