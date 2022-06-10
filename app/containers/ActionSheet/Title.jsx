import React, { Component } from 'react';
import { ActionSheet, Button } from 'kui-mobile';

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
    this.handleHide();
  };
  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleShow}>弹出带标题ActionSheet</Button>
        <ActionSheet
          title="标题"
          show={show}
          onSelect={this.handleSelect}
          onCancel={this.handleHide}
        >
          <p style={{ padding: 20, textAlign: 'left' }}>内容</p>{' '}
        </ActionSheet>
      </React.Fragment>
    );
  }
}
