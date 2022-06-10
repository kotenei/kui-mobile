import React, { Component } from 'react';
import { Slider } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <div style={{ height: 150 }}>
        <Slider defaultValue={10} vertical />
      </div>
    );
  }
}
