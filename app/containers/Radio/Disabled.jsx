import React, { Component } from 'react';
import { Radio, RadioGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <RadioGroup value="选项一">
          <Radio value="选项一" disabled>单选框一</Radio>
          <Radio value="选项二" disabled>单选框二</Radio>
        </RadioGroup>
      </React.Fragment>
    );
  }
}
