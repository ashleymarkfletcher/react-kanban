import React, { Component } from 'react';

import Item from './item'

export default class List extends Component {

  render() {


      const Items = (this.props.list.items) ? this.props.list.items.map((item) => {
        return <Item item={item} />
      }) : null



    console.log('list props', this.props);
    return(
      <div>
        <h2>{this.props.list.title}</h2>
        <button onClick={this.props.addTask.bind(this, 'new task', this.props.list.id)}>new task</button>
        {Items}
      </div>
    )

  }
}
