import React, { Component } from 'react';

import Item from './item'

export default class List extends Component {

  render() {

    const Items = this.props.list.items.map((item) => {
      return <Item item={item}/>
    })

    console.log('list props', this.props);
    return(
      <div>
        <h2>{this.props.list.title}</h2>
        {Items}
      </div>
    )

  }
}
