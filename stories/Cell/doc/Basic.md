```jsx
import React, { Component } from 'react';
import { Cell, CellGroup, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <CellGroup border>
          <Cell title="这是标题" value="描述文字" />
          <Cell title="这是标题" value="默认显示icon" label="这是副标题" showArrow />
          <Cell title="箭头方向" showArrow arrowDirection="up" />
          <Cell title="自定义Icon" value={<Icon type="search" />} />
          <Cell title="路由跳转" showArrow to="/layout" />
          <Cell title="链接跳转" showArrow url="http://www.baidu.com" />
        </CellGroup>
      </React.Fragment>
    );
  }
}

```
