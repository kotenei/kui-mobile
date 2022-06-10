```jsx
import React, { Component } from 'react';
import { Avatar, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Avatar icon={<Icon type="calendar" />} />
        &nbsp;
        <Avatar square color="danger" icon="folder" />&nbsp;
        <Avatar color="primary">LS</Avatar>&nbsp;
        <Avatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4" />
      </React.Fragment>
    );
  }
}

```
