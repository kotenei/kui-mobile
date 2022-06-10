```jsx
import React, { Component } from 'react';
import { Message, Button, Icon, Modal } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleOK = () => {
    this.handleClose();
    Message('点击了确定');
  };
  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen} full>
          打开无标题模态框
        </Button>
        <Modal
          content="这里是内容"
          onCancel={this.handleClose}
          onOK={this.handleOK}
          open={open}
          showHeader={false}
        />
      </React.Fragment>
    );
  }
}

```
