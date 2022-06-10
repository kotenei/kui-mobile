import React, { Component } from 'react';
import { ActionSheet, Button, Toast } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    show: false,
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleHide = () => {
    this.setState({ show: false });
  };
  handleSelect = selected => {
    Toast.info(selected.text);
    this.handleHide();
  };
  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleShow}>弹出带取消按钮ActionSheet</Button>
        <ActionSheet
          show={show}
          actions={[
            { text: '选项' },
            { text: '禁用选项', disabled: true },
            { text: '加载中', loading: true },
          ]}
          showCancel
          maskClose={false}
          onSelect={this.handleSelect}
          onCancel={this.handleHide}
        />
      </React.Fragment>
    );
  }
}
