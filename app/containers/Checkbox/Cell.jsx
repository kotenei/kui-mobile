import React, { Component } from 'react';
import { Checkbox, CheckboxGroup, Cell, CellGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <CheckboxGroup cell>
          <Checkbox title="复选框一"  value="选项一" />
          <Checkbox title="复选框二"  value="选项二" />
          <Checkbox title="复选框三" label="这里是描述"  value="选项三" />
        </CheckboxGroup>
      </React.Fragment>
    );
  }
}
