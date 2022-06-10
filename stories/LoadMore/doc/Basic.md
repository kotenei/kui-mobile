```jsx
import React, { Component } from 'react';
import { LoadMore } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <LoadMore tip="正在加载"/>
        <LoadMore tip="暂无数据" loading={false} />
        <LoadMore loading={false} />
      </React.Fragment>
    );
  }
}

```
