import React, { Component } from 'react';

import List from './list'

export default class Board extends Component {

  render() {
    console.log('board props,', this.props);

    const Lists = this.props.lists.map((list) => {
      return <List list={list}/>
    })

    return (
      <div>
        {Lists}
      </div>
    )

  }
}
