import React, { Component } from 'react';
import { Rate } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return <Rate allowHalf defaultValue={1.5}/>;
  }
}
