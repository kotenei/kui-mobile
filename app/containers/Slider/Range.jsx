import React, { Component } from 'react';
import { Slider } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return <Slider range defaultValue={[20,80]} color="danger"  />;
  }
}
