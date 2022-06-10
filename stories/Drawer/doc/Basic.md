```jsx
import React, { Component } from 'react';
import { Drawer, Button } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    position: 'left',
    open: false,
  };
  render() {
    const { open, position } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleClick.bind(this, 'left')} full>
          左边弹出
        </Button>
        <br />
        <Button onClick={this.handleClick.bind(this, 'right')} full>
          右边弹出
        </Button>
        <br />
        <Button onClick={this.handleClick.bind(this, 'top')} full>
          顶部弹出
        </Button>
        <br />
        <Button onClick={this.handleClick.bind(this, 'bottom')} full>
          底部弹出
        </Button>
        <br />
        <Drawer position={position} open={open} onMaskClick={this.handleClose}>
          <div style={{ margin: 20 }}>
            <h3>这里是内容</h3>
            <br />
            <Button onClick={this.handleClose}>点击关闭</Button>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
  handleClick = position => {
    this.setState({
      open: true,
      position,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
}

```
