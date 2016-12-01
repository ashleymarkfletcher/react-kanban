import React, { Component } from 'react';

import Item from './item'

export default class List extends Component {

  render() {

    const Items = (this.props.list.items) ? this.props.list.items.map((item) => {
      console.log('itemidddd', item.id);
      return <Item item={item} key={item.id}/>
    }) : null

    console.log('list props', this.props);
    return(
      <div>
        <h2>{this.props.list.name}</h2>
        <button>edit</button>
        <button>delete</button>
        <button onClick={this.props.addTask.bind(this, 'new task', this.props.list.id)}>new task</button>
        {Items}
      </div>
    )

  }
}
