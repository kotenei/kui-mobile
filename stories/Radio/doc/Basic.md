```jsx
import React, { Component } from 'react';
import { Radio, RadioGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <RadioGroup>
          <Radio value="选项一">单选框一</Radio>
          <Radio value="选项二">单选框二</Radio>
        </RadioGroup>
      </React.Fragment>
    );
  }
}

```
