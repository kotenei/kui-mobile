```jsx
import React, { Component } from 'react';
import { Input, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Input
          label={
            <React.Fragment>
              <Icon type="user" /> 
              用户名
            </React.Fragment>
          }
          placeholder="输入框已禁用"
          disabled
        />
      </React.Fragment>
    );
  }
}

```
