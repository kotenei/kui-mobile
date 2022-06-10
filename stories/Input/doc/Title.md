```jsx
import React, { Component } from 'react';
import { Input } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Input label="用户名" placeholder="请输入用户名" />
        <Input label="密码" type="password" placeholder="请输入密码" />
      </React.Fragment>
    );
  }
}

```
