```jsx
import React, { Component } from 'react';
import { SwipeCell } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <SwipeCell
          cellProps={{
            title: '单元格',
            value: '内容',
          }}
          left={[
            {
              text: '选择',
              color: 'primary',
            },
          ]}
          right={[{ text: '删除', color: 'danger' }]}
        />
      </React.Fragment>
    );
  }
}

```
