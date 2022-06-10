import React, { Component } from 'react';
import { Slider } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return <Slider defaultValue={70} color="warning"  />;
  }
}
