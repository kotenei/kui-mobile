import React, { Component } from 'react';
import { InputNumber } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <InputNumber step={2}/>
      </React.Fragment>
    );
  }
}
