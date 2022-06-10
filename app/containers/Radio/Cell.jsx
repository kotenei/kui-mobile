import React, { Component } from 'react';
import { Radio, RadioGroup, Cell, CellGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <RadioGroup cell>
          <Radio title="单选项一" label="这里是描述" value="选项一" />
          <Radio title="单选项二" label="这里是描述" value="选项二" />
        </RadioGroup>
      </React.Fragment>
    );
  }
}
