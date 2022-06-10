```jsx
import React, { Component } from 'react';
import { Avatar, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ marginBottom: 10 }}>
          <Avatar icon={<Icon type="calendar" />} size="sm" />
          &nbsp;
          <Avatar icon={<Icon type="calendar" />} />
          &nbsp;
          <Avatar icon={<Icon type="calendar" />} size="lg" />
          &nbsp;
        </div>
        <div style={{ marginBottom: 10 }}>
          <Avatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4" size="sm">
            LS
          </Avatar>
          &nbsp;
          <Avatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4">LS</Avatar>
          &nbsp;
          <Avatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4" size="lg">
            LS
          </Avatar>
          &nbsp;
        </div>
        <div style={{ marginBottom: 10 }}>
          <Avatar color="primary" square size="sm">
            LS
          </Avatar>
          &nbsp;
          <Avatar color="primary" square>
            LS
          </Avatar>
          &nbsp;
          <Avatar color="primary" square size="lg">
            LS
          </Avatar>
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

```
