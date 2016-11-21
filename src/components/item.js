import React, { Component } from 'react';

export default class Board extends Component {

  render() {
    console.log('item props,', this.props);

    return (
      <div>
        {this.props.item.body}
      </div>
    )

  }
}
