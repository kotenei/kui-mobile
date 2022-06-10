```jsx
import React, { Component } from 'react';
import { Switch, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch checkedContent="开" unCheckedContent="关" />
        <br />
        <br />
        <Switch checkedContent={<Icon type="check" />} unCheckedContent={<Icon type="close" />} />
      </React.Fragment>
    );
  }
}

```
